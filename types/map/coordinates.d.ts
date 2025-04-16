/**
 * 计算两个经纬度之间的中心经纬度。
 * @public
 *
 * @param oneLon - 第一个点的经度（-180 到 180 之间）
 * @param oneLat - 第一个点的纬度（-90 到 90 之间）
 * @param twoLon - 第二个点的经度（-180 到 180 之间）
 * @param twoLat - 第二个点的纬度（-90 到 90 之间）
 * @returns 中心点的经纬度数组 [经度, 纬度]
 *
 * @example
 * ```typescript
 * // 计算北京和上海之间的中心点
 * const center = getCenterLonLat(116.4074, 39.9042, 121.4737, 31.2304);
 * console.log('中心点经纬度:', center); // 输出 [118.94055, 35.5673]
 * ```
 */
export declare const getCenterLonLat: (oneLon: number, oneLat: number, twoLon: number, twoLat: number) => [number, number];
