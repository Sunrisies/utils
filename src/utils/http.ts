/**
 * 从指定 URL 下载文件并保存为指定文件名。
 *
 * @param url - 要下载的文件的 URL。
 * @param filename - 保存文件时的名称（包括文件扩展名）。
 * @returns 返回一个 Promise，文件下载成功时解析。
 * @throws 如果文件无法获取或下载失败，将抛出错误。
 *
 * @example
 * ```typescript
 * // 下载图片
 * downloadFile('https://example.com/image.png', 'my-image.png')
 *   .then(() => console.log('图片下载成功'))
 *   .catch((error) => console.error('下载图片失败:', error));
 *
 * // 下载 PDF
 * downloadFile('https://example.com/document.pdf', 'my-document.pdf')
 *   .then(() => console.log('PDF 下载成功'))
 *   .catch((error) => console.error('下载 PDF 失败:', error));
 * ```
 */
export const downloadFile = async (url: string, filename: string): Promise<void> => {
  try {
    // 使用 fetch 获取文件内容
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`无法获取文件: ${response.statusText}`)
    }

    // 将文件内容转换为 Blob
    const blob = await response.blob()

    // 创建一个指向 Blob 的临时 URL
    const blobUrl = URL.createObjectURL(blob)

    // 创建 <a> 标签并触发下载
    const aTag = document.createElement('a')
    aTag.href = blobUrl
    aTag.download = filename // 设置下载的文件名
    document.body.appendChild(aTag) // 将 <a> 标签添加到文档中
    aTag.click() // 触发点击事件
    document.body.removeChild(aTag) // 移除 <a> 标签

    // 释放 Blob URL
    URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.error('下载文件时出错:', error)
    throw error // 抛出错误以便调用方处理
  }
}



export interface RequestConfig<T = unknown> extends Omit<RequestInit, 'body'> {
  params?: Record<string, string>
  data?: T
}

// 统一接口规范，泛型TData使返回数据类型可配置
export interface ApiResponse<T> {
  code: number
  data: T
  message: string
}

// 使用类支持多个服务
export class Http {
  private readonly baseURL: string
  /**
   * 创建一个新的 Http 实例。
   *
   * @param baseURL - 请求的基础 URL。
   * @param fetch - 可选的 fetch 函数，用于发送 HTTP 请求。
   */
  constructor(baseURL: string = '') {
    this.baseURL = baseURL
  }

  /**
   * 发送 HTTP 请求。
   *
   * @param endpoint - 请求的端点。
   * @param config - 请求的配置。
   * @returns 返回一个 Promise，解析为 ApiResponse。
   */
  async request<TResponse, T = unknown>(endpoint: string, config: RequestConfig<T> = {}): Promise<ApiResponse<TResponse>> {
    const { params, data, headers = {}, method = 'GET', ...rest } = config

    // 处理 URL 参数
    const queryString = params ? `?${new URLSearchParams(params)}` : ''
    const url = `${this.baseURL}${endpoint}${queryString}`

    // 处理请求头
    const contentType = data ? { 'Content-Type': 'application/json' } : {}
    const finalHeaders = { ...contentType, ...headers } as HeadersInit

    // 统一错误处理
    try {
      const response = await fetch(url, {
        method,
        headers: finalHeaders,
        body: data ? JSON.stringify(data) : null,
        ...rest
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      return result as ApiResponse<TResponse>
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('An unknown error occurred')
    }
  }
  /**
   * 发送 GET 请求。
   *
   * @param endpoint - 请求的端点。
   * @param config - 请求的配置。
   * @returns 返回一个 Promise，解析为 ApiResponse。
   */
  get<TResponse>(endpoint: string, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse>(endpoint, { ...config, method: 'GET' })
  }
  /**
   * 发送 POST 请求。
   *
   * @param endpoint - 请求的端点。
   * @param data - 请求的数据。
   * @param config - 请求的配置。
   * @returns 返回一个 Promise，解析为 ApiResponse。
   */
  post<TResponse, T = unknown>(endpoint: string, data?: T, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse, T>(endpoint, {
      ...config,
      data,
      method: 'POST'
    })
  }
  /**
   * 发送 PUT 请求。
   *
   * @param endpoint - 请求的端点。
   * @param data - 请求的数据。
   * @param config - 请求的配置。
   * @returns 返回一个 Promise，解析为 ApiResponse。
   */
  put<TResponse, T = unknown>(endpoint: string, data?: T, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse, T>(endpoint, {
      ...config,
      data,
      method: 'PUT'
    })
  }
  /**
   * 发送 DELETE 请求。
   *
   * @param endpoint - 请求的端点。
   * @param config - 请求的配置。
   * @returns 返回一个 Promise，解析为 ApiResponse。
   */
  delete<TResponse>(endpoint: string, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse>(endpoint, { ...config, method: 'DELETE' })
  }
}

// 创建实例
// export const http = new Http(process.env.NEXT_PUBLIC_API_BASE_URL)

// 使用示例:

/*
interface User {
  id: number
  name: string
}

// GET 请求
const getUser = async (id: string) => {
  const response = await http.get<User>(`/users/${id}`)
  return response.data
}

// POST 请求
const createUser = async (userData: Partial<User>) => {
  const response = await http.post<User, Partial<User>>('/users', userData)
  return response.data
}
*/
