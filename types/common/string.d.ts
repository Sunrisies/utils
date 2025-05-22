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
export type GenRandStrResult<T> = T extends number ? string : Error;
export declare const genRandStr: <T>(length: T) => GenRandStrResult<T>;
