/**
 * 获取指定元素ID的内容区域（排除内边距padding）的尺寸。
 * @public
 *
 * @param elementId - 要获取尺寸的元素的ID
 * @returns 返回一个包含width和height的对象，如果找不到元素或无法获取计算样式则返回错误对象
 *
 * @example
 * ```typescript
 * // 获取ID为 'myElement' 的元素的内容区域尺寸
 * const dimensions = getContentDimensions('myElement')
 * if (dimensions instanceof Error) {
 *   console.error('无法获取元素的尺寸')
 * } else {
 *   console.log('内容区域宽度:', dimensions.width)
 *   console.log('内容区域高度:', dimensions.height)
 * }
 * ```
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
    return new Error("找不到id为" + elementId + "的元素")
  }
}




/**
 * 根据传入的参数类型生成随机字符串或返回错误。
 * @public
 * 
 * @typeParam T - 参数的类型约束
 * @param length - 随机字符串的长度（需为大于0的数字）
 * @returns 生成的随机字符串或错误对象
 *
 * @example
 * ```typescript
 * // 传入合法的 number 类型
 * const result1 = genRandStr(10);
 * console.log(result1); // 输出类似 "aB3dE7gH9j"
 *
 * // 传入非 number 类型
 * const result2 = genRandStr('invalid');
 * if (result2 instanceof Error) {
 *   console.error(result2.message);
 * }
 * ```
 */

export type GenRandStrResult<T> = T extends number ? string : Error

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
