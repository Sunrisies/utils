/**
 * 获取指定元素ID的内容区域（排除内边距padding）的尺寸。
 *
 * @param {string} elementId - 要获取尺寸的元素的ID。
 * @returns {Error | { width: number; height: number }} - 返回一个包含width和height的对象，如果找不到元素或无法获取计算样式则返回null。
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
          const image = new Image();
          image.onload = () => resolve(image);
          image.onerror = () => reject(new Error(`图片加载失败: ${url}`));
          image.src = url;
        })
    )
  );
};

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
 * 随机生成指定长度的字符串。
 *
 * @param {number} length - 字符串的长度，必须是一个正整数。
 * @returns {string|Error} - 返回生成的随机字符串；如果输入的长度无效，则返回一个 Error 对象。
 * @throws {Error} - 当长度参数不是正整数时抛出错误。
 *
 * @example
 * // 示例：生成一个长度为 10 的随机字符串
 * const randomStr = genRandStr(10)
 * if (randomStr instanceof Error) {
 *   console.error(randomStr.message)
 * } else {
 *   console.log(randomStr) // 输出类似 'aB3dE7fGh9'
 * }
 *
 * // 示例：尝试生成一个长度为负数的随机字符串
 * const invalidStr = genRandStr(-5)
 * if (invalidStr instanceof Error) {
 *   console.error(invalidStr.message) // 输出 'Length must be a positive number'
 * }
 */
export const genRandStr = (length: number): string | Error => {
  if (typeof length !== 'number' || length <= 0) {
    return new Error('Length must be a positive number')
  }

  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomString: string = ''
  for (let i = 0; i < length; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
  }
  return randomString
}
