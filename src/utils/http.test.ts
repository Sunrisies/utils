import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { downloadFile } from './http';

// 模拟全局对象和方法
global.URL.createObjectURL = vi.fn()
global.URL.revokeObjectURL = vi.fn()
global.document = {
  createElement: vi.fn(),
  body: {
    appendChild: vi.fn(),
    removeChild: vi.fn()
  }
} as unknown as Document
// beforeEach(() => {
//   console.log('-----')
// })
describe('downloadFile', () => {
  beforeEach(() => {
    // 每个测试之前重置模拟
    vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'mocked-url')
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {})
    vi.spyOn(document, 'createElement').mockImplementation(() => ({
      href: '',
      download: '',
      click: vi.fn()
    })as unknown as HTMLAnchorElement)
    vi.spyOn(document.body, 'appendChild').mockImplementation(() => document.createElement('div'))
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => document.createElement('div'))
  })


  it('应成功下载文件', async () => {
    // 模拟 fetch 响应
    const mockResponse = {
      ok: true,
      blob: vi.fn().mockResolvedValue(new Blob(['test content'], { type: 'text/plain' }))
    }
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse))

    await downloadFile('http://example.com/file', 'test.txt')

    expect(URL.createObjectURL).toHaveBeenCalled()
    expect(document.createElement).toHaveBeenCalled()
    expect(document.body.appendChild).toHaveBeenCalled()
    expect(document.body.removeChild).toHaveBeenCalled()
    expect(URL.revokeObjectURL).toHaveBeenCalled()
  })

  it('当fetch失败时应该抛出错误', async () => {
    // 模拟 fetch 失败
    const mockResponse = {
      ok: false,
      statusText: 'Not Found'
    }
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(mockResponse))

    await expect(downloadFile('http://example.com/file', 'test.txt')).rejects.toThrow('无法获取文件: Not Found')
  })

  it('fetch抛出时应该抛出错误', async () => {
    // 模拟 fetch 抛出异常
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network Error')))

    await expect(downloadFile('http://example.com/file', 'test.txt')).rejects.toThrow('Network Error')
  })

  // 测试完成后恢复全局对象和方法
  afterEach(() => {
    vi.unstubAllGlobals()
  })
})