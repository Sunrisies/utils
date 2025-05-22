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
export declare const getContentDimensions: (elementId: string) => Error | {
    width: number;
    height: number;
};
