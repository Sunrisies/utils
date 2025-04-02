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

/**
 * 创建一个可配置的 HTTP 客户端实例
 * @param baseURL - 基础请求路径，将自动拼接到所有请求的端点前
 * @example
 * ```typescript
 * // 创建指向 GitHub API 的客户端
 * const http = new Http('https://api.github.com');
 * ```
 */
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
   * 核心请求方法，封装 HTTP 请求的公共逻辑
   * @template TResponse 响应体数据类型
   * @template T 请求体数据类型
   * @param endpoint - 接口端点路径（自动拼接 baseURL）
   * @param config - 请求配置项
   * @returns 包含标准化响应格式的 Promise
   * @throws {Error} 当 HTTP 状态码非 2xx 时抛出错误
   * 
   * @example
   * ```typescript
   * // 自定义请求配置
   * await http.request<User>('/users', {
   *   method: 'POST',
   *   data: { name: 'John' },
   *   headers: { 'X-Request-ID': '123' }
   * });
   * ```
  */
  async request<TResponse, T = unknown>(endpoint: string, config: RequestConfig<T> = {}): Promise<ApiResponse<TResponse>> {
    const { params, data, headers = {}, method = 'GET', ...rest } = config

    // 处理 URL 参数
    const queryString = params ? `?${URLSearchParamsUtils(params)}` : ''
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
      throw error
    }
  }
  /**
   * 发送 GET 请求
   * @template TResponse 预期响应类型
   * @param endpoint - 接口端点路径
   * @param config - 请求配置（自动排除 data 属性）
   * @returns 包含响应数据的 Promise
   * 
   * @example
   * ```typescript
   * // 获取用户列表
   * const { data } = await http.get<User[]>('/users');
   * ```
   */
  get<TResponse>(endpoint: string, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse>(endpoint, { ...config, method: 'GET' })
  }
  /**
   * 发送 POST 请求
   * @template TResponse 预期响应类型
   * @template T 请求体数据类型
   * @param endpoint - 接口端点路径
   * @param data - 请求体数据（自动序列化为 JSON）
   * @param config - 请求配置
   * @returns 包含响应数据的 Promise
   */
  post<TResponse, T = unknown>(endpoint: string, data?: T, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse, T>(endpoint, {
      ...config,
      data,
      method: 'POST'
    })
  }

  /**
   * 发送 PUT 请求
   * @template TResponse 预期响应类型
   * @template T 请求体数据类型
   * @param endpoint - 接口端点路径
   * @param data - 需要更新的完整资源数据
   * @param config - 请求配置
   * @returns 包含更新后数据的 Promise
   */
  put<TResponse, T = unknown>(endpoint: string, data?: T, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse, T>(endpoint, {
      ...config,
      data,
      method: 'PUT'
    })
  }
  /**
   * 发送 DELETE 请求
   * @template TResponse 预期响应类型（通常为 void）
   * @param endpoint - 需要删除的资源端点路径
   * @param config - 请求配置
   * @returns 包含空响应的 Promise
   */
  delete<TResponse>(endpoint: string, config?: Omit<RequestConfig, 'data' | 'method'>) {
    return this.request<TResponse>(endpoint, { ...config, method: 'DELETE' })
  }
}


/**
 * 将对象转换为 URL 查询字符串
 * @param data - 包含查询参数的对象，支持嵌套对象和数组
 * @returns 经过 URL 编码的查询字符串（不带问号前缀）
 * 
 * @example
 * // 基本用法
 * URLSearchParamsUtils({ name: 'John', age: 30 });
 * // 返回 'name=John&age=30'
 * 
 * @example
 * // 处理数组
 * URLSearchParamsUtils({ ids: [1, 2], tags: ['vue', 'react'] });
 * // 返回 'ids=1&ids=2&tags=vue&tags=react'
 * 
 * @example
 * // 处理特殊字符
 * URLSearchParamsUtils({ q: 'vue&react' });
 * // 返回 'q=vue%26react'
 */
export const URLSearchParamsUtils = (data: { [key: string]: any }) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(data)) {
    // 处理数组类型
    if (Array.isArray(value)) {
      value.forEach(item => searchParams.append(key, item.toString()));
    } else {
      searchParams.append(key, value.toString());
    }
  }

  return searchParams.toString();
};