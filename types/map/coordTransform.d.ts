/**
 * 判断坐标是否在中国境外
 * @param lng - 经度（WGS84坐标系）
 * @param lat - 纬度（WGS84坐标系）
 * @returns 是否在境外（true表示境外坐标，不进行转换）
 *
 * @example
 * ```typescript
 * // 境外坐标示例
 * out_of_china(135.0, 35.0) // true
 * // 境内坐标示例
 * out_of_china(116.4074, 39.9042) // false
 * ```
 */
export declare const out_of_china: (lng: number, lat: number) => boolean;
declare class CoordinateTransform {
    /**
     * 将WGS84坐标系转换为GCJ02火星坐标系
     * @param lng - WGS84经度，范围-180到180
     * @param lat - WGS84纬度，范围-90到90
     * @returns [经度, 纬度] 格式的GCJ02坐标数组
     *
     * @example
     * ```typescript
     * const [gcjLng, gcjLat] = wgs84ToGcj02(114.123, 22.456)
     * ```
     */
    static wgs84ToGcj02(lng: number, lat: number): [number, number];
    /**
     * 将GCJ02火星坐标系转换为WGS84坐标系
     * @param lng - GCJ02经度，范围-180到180
     * @param lat - GCJ02纬度，范围-90到90
     * @returns [经度, 纬度] 格式的WGS84坐标数组
     *
     * @example
     * ```typescript
     * const [wgsLng, wgsLat] = gcj02ToWgs84(114.123, 22.456)
     * ```
     */
    static gcj02ToWgs84(lng: number, lat: number): [number, number];
}
export declare const wgs84ToGcj02: typeof CoordinateTransform.wgs84ToGcj02;
export declare const gcj02ToWgs84: typeof CoordinateTransform.gcj02ToWgs84;
export {};
