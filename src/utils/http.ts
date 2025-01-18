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


export const sum = (a:number,b:number) => {
  return a + b
}