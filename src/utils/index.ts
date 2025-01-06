/**
 * 获取指定元素ID的内容区域（排除内边距padding）的尺寸。
 *
 * @param {string} elementId - 要获取尺寸的元素的ID。
 * @returns {Error | { width: number, height: number }} - 返回一个包含width和height的对象，如果找不到元素或无法获取计算样式则返回null。
 *
 * @example
 * // 示例：获取ID为 'myElement' 的元素的内容区域尺寸
 * const dimensions = getContentDimensions('myElement')
 * if (dimensions) {
 *   console.log('内容区域宽度:', dimensions.width)
 *   console.log('内容区域高度:', dimensions.height)
 * } else {
 *   console.error('无法获取元素的尺寸')
 * }
 */
export const getContentDimensions = (elementId: string): Error | { width: number; height: number } => {
  const element = document.getElementById(elementId)
  if (element) {
    const rect = element.getBoundingClientRect()
    const style = window.getComputedStyle(element)
    if (style) {
      const paddingTop = parseFloat(style.paddingTop)
      const paddingRight = parseFloat(style.paddingRight)
      const paddingBottom = parseFloat(style.paddingBottom)
      const paddingLeft = parseFloat(style.paddingLeft)
      const contentWidth = rect.width - (paddingLeft + paddingRight)
      const contentHeight = rect.height - (paddingTop + paddingBottom)

      return {
        width: contentWidth,
        height: contentHeight
      }
    } else {
      return new Error('Element has no computed style' + elementId)
    }
  } else {
    return new Error('Element not found with ID' + elementId)
  }
}

/**
 * 预加载并缓存一组图片资源。
 *
 * @param {string[]} imageUrls - 图片资源的URL数组。
 * @returns {Promise<HTMLImageElement[]>} - 返回一个Promise，该Promise在所有图片加载完成后解析为一个包含HTMLImageElement对象的数组。
 *
 * @example
 * // 示例：预加载并缓存一组图片
 * preloadAndCacheImages(['https://example.com/image1.jpg', 'https://example.com/image2.jpg'])
 *   .then((images) => {
 *     console.log('所有图片加载成功', images);
 *   })
 *   .catch((error) => {
 *     console.error('图片加载失败', error);
 *   });
 */
export const preloadAndCacheImages = (imageUrls: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(
    imageUrls.map(
      (url) =>
        new Promise<HTMLImageElement>((resolve, reject) => {
          const image = new Image()
          image.onload = () => resolve(image)
          image.onerror = () => reject(new Error(`图片加载失败: ${url}`))
          image.src = url
        })
    )
  )
}

/**
 * 预加载并缓存图片资源。
 *
 * @param {string} imageUrl - 图片资源的URL。
 * @returns {Promise<HTMLImageElement>} - 返回一个Promise，该Promise在图片加载完成后解析为一个包含HTMLImageElement对象。
 *
 * @example
 * // 示例：预加载并缓存图片
 * preloadAndCacheImage('https://example.com/image.jpg')
 *   .then((image) => {
 *     console.log('图片加载成功', image);
 *   })
 *   .catch((error) => {
 *     console.error('图片加载失败', error);
 *   });
 */
export const preloadAndCacheImage = (imageUrl: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error('图片加载失败'))
    }
    img.src = imageUrl
  })
}

/**
 * 时间戳转换为日期字符串。
 *
 * @param {number} time - 时间戳，单位为秒。
 * @returns {string} - 返回格式化的日期字符串，格式为 'YYYY年MM月DD日HH时MM分'。
 *
 * @example
 * // 示例：将时间戳 1633072800 转换为日期字符串
 * const dateString = conversionTime(1633072800)
 * console.log(dateString) // 输出类似 '2021年10月1日00时00分'
 */
export const conversionTime = (time: number): string => {
  const date = new Date(time * 1000)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  return `${year}年${month}月${day}日${hours}时${minutes}分`
}

/**
 * 根据传入的参数类型生成随机字符串或返回错误。
 * - 如果传入的参数是 `number` 类型且大于 0，返回生成的随机字符串。
 * - 如果传入的参数不是 `number` 类型或小于等于 0，返回 `Error` 对象。
 *
 * @template T - 参数的类型，可以是 `number` 或其他类型。
 * @param {T} length - 随机字符串的长度。如果类型是 `number` 且大于 0，则生成对应长度的随机字符串；否则返回错误。
 * @returns {GenRandStrResult<T>} - 如果 `length` 是 `number` 类型且大于 0，返回 `string`；否则返回 `Error`。
 *
 * @example
 * // 示例 1: 传入合法的 number 类型
 * const result1 = genRandStr(10); // 返回 string
 * console.log(result1); // 输出随机字符串，如 "aB3dE7gH9j"
 *
 * @example
 * // 示例 2: 传入非 number 类型
 * const result2 = genRandStr('invalid'); // 返回 Error
 * console.log(result2 instanceof Error ? result2.message : result2); // 输出错误信息
 */

type GenRandStrResult<T> = T extends number ? string : Error

export const genRandStr = <T>(length: T): GenRandStrResult<T> => {
  if (typeof length !== 'number' || length <= 0) {
    return new Error('Length must be a positive number') as GenRandStrResult<T>
  }

  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString: string = ''
  for (let i = 0; i < length; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
  }
  return randomString as GenRandStrResult<T>
}
