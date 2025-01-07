/**
 * 计算两个经纬度之间的距离，并返回中心点经纬度。
 *
 * @param lat1 - 第一个点的纬度，范围必须在 -90 到 90 之间。
 * @param lon1 - 第一个点的经度，范围必须在 -180 到 180 之间。
 * @param lat2 - 第二个点的纬度，范围必须在 -90 到 90 之间。
 * @param lon2 - 第二个点的经度，范围必须在 -180 到 180 之间。
 * @returns 返回一个对象，其中包含：
 * - `lon`：中心点的经度。
 * - `lat`：中心点的纬度。
 * - `distance`：距离（单位：米）。
 *
 * @throws 如果输入的经纬度不在合法范围内，抛出错误。
 *
 * @example
 * // 示例：计算两个经纬度之间的距离
 * const result = distanceLngLat(39.9042, 116.4074, 31.2304, 121.4737);
 * console.log('中心点经纬度:', { lon: result.lon, lat: result.lat });
 * console.log('距离:', result.distance, '米');
 */
export function distanceLngLat(lat1, lon1, lat2, lon2) {
    // 校验纬度范围
    if (lat1 < -90 || lat1 > 90 || lat2 < -90 || lat2 > 90) {
        throw new Error('纬度必须在 -90 到 90 之间');
    }
    // 校验经度范围
    if (lon1 < -180 || lon1 > 180 || lon2 < -180 || lon2 > 180) {
        throw new Error('经度必须在 -180 到 180 之间');
    }
    const radLat1 = rad2deg(lat1);
    const radLat2 = rad2deg(lat2);
    const a = radLat1 - radLat2;
    const b = rad2deg(lon1) - rad2deg(lon2);
    const s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
    const earthRadius = 6378137.0; // WGS84标准参考椭球中的地球长半径(单位:m)
    const distance = s * earthRadius;
    const centerLonLat = getCenterLonLat(lon1, lat1, lon2, lat2);
    return { lon: centerLonLat[0], lat: centerLonLat[1], distance: Math.round(distance * 10000) / 10000 };
}
/**
 * 将角度转换为弧度。
 *
 * @param deg - 角度值。
 * @returns 对应的弧度值。
 */
function rad(deg) {
    return (deg * Math.PI) / 180.0;
}
/**
 * 计算两个经纬度之间的中心经纬度。
 *
 * @param {number} oneLon - 第一个点的经度,范围必须在 -90 到 90 之间
 * @param {number} oneLat - 第一个点的纬度,范围必须在 -180 到 180 之间
 * @param {number} twoLon - 第二个点的经度,范围必须在 -90 到 90 之间
 * @param {number} twoLat - 第二个点的纬度,范围必须在 -180 到 180 之间
 * @returns {Array<number>} - 返回中心点的经纬度数组。
 *
 * @version 1.0.0 - 2023-12-23
 *
 * @example
 * // 示例：计算两个经纬度之间的中心经纬度
 * const center = getCenterLonLat(116.4074, 39.9042, 121.4737, 31.2304)
 * console.log('中心点经纬度:', center) // 输出类似 [118.94055, 35.5693]
 */
export const getCenterLonLat = (oneLon, oneLat, twoLon, twoLat) => {
    const centerLon = (oneLon + twoLon) / 2;
    const centerLat = (oneLat + twoLat) / 2;
    return [centerLon, centerLat];
};
/**
 * 将角度转换为弧度。
 *
 * @param rad - 角度值。
 * @returns 对应的弧度。
 */
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}
/**
 * 将弧度转换为角度
 * @param rad - 弧度值
 *
 * @private
 *
 * @returns 对应的角度值
 */
function rad2deg(rad) {
    return rad * (180 / Math.PI);
}
/**
 * 计算以给定点为中心，距离为 `distance` 的四个新点的坐标
 * @type {Point}
 * @param centerPoint  - 包含中心点纬度、经度和距离的对象
 * @returns 四个新点的坐标数组，格式为 [[经度1, 纬度1], [经度2, 纬度2], ...]
 * @author 朝阳
 * @example
 * const centerLat = 33.4148429; // 中心点纬度
 * const centerLon = 113.5930592; // 中心点经度
 * const distance = 1; // 距离（米）
 * const newPoints = calculateNewPoints({lon: centerLon, lat: centerLat, centerLon, distance});
 * console.log(newPoints);
 * // 输出结果：
 * // [
 * //   [113.5930699741221, 33.414842899999535], // 第一个点
 * //   [113.5930592, 33.41483390678393],        // 第二个点
 * //   [113.5930484258779, 33.414842899999535], // 第三个点
 * //   [113.5930592, 33.41485189321607]         // 第四个点
 * // ]
 */
export const calculateNewPoints = ({ lat, lon, distance }) => {
    const R = 6371e3;
    const d = distance / R;
    const latRad = deg2rad(lat);
    const lonRad = deg2rad(lon);
    const newPoints = [];
    for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const newLatRad = Math.asin(Math.sin(latRad) * Math.cos(d) + Math.cos(latRad) * Math.sin(d) * Math.cos(angle));
        const newLonRad = lonRad + Math.atan2(Math.sin(angle) * Math.sin(d) * Math.cos(latRad), Math.cos(d) - Math.sin(latRad) * Math.sin(newLatRad));
        newPoints.push([rad2deg(newLonRad), rad2deg(newLatRad)]);
    }
    return newPoints;
};
