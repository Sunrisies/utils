import { Point } from "./types";
/**
 * 计算两个经纬度之间的距离，并返回中心点经纬度。
 * @public
 *
 * @param lat1 - 第一个点的纬度（-90 到 90 之间）
 * @param lon1 - 第一个点的经度（-180 到 180 之间）
 * @param lat2 - 第二个点的纬度（-90 到 90 之间）
 * @param lon2 - 第二个点的经度（-180 到 180 之间）
 * @returns 包含中心点坐标和距离的对象
 *
 * @example
 * ```typescript
 * // 计算北京到上海的经纬度距离
 * const result = distanceLngLat(39.9042, 116.4074, 31.2304, 121.4737);
 * console.log('中心点:', result.lon, result.lat);
 * console.log('距离:', result.distance + '米');
 * ```
 */
export declare function distanceLngLat(lat1: number, lon1: number, lat2: number, lon2: number): Point;
