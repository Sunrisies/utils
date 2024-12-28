/**
 * 计算两个经纬度之间的距离，并返回中心点经纬度。
 *
 * @param {number} lat1 - 第一个点的纬度。
 * @param {number} lon1 - 第一个点的经度。
 * @param {number} lat2 - 第二个点的纬度。
 * @param {number} lon2 - 第二个点的经度。
 * @returns {{ centerLonLat: [number, number]; distance: number }} - 返回中心点经纬度和距离（单位：米）。
 *
 * @example
 * // 示例：计算两个经纬度之间的距离
 * const result = distanceLngLat(39.9042, 116.4074, 31.2304, 121.4737)
 * console.log('中心点经纬度:', result.centerLonLat)
 * console.log('距离:', result.distance, '米')
 */
export function distanceLngLat(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): { centerLonLat: [number, number]; distance: number } {
  const radLat1 = rad(lat1)
  const radLat2 = rad(lat2)
  const a = radLat1 - radLat2
  const b = rad(lon1) - rad(lon2)
  const s =
    2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
  const earthRadius = 6378137.0 // WGS84标准参考椭球中的地球长半径(单位:m)
  const distance = s * earthRadius
  const centerLonLat = getCenterLonLat(lon1, lat1, lon2, lat2)
  return { centerLonLat, distance: Math.round(distance * 10000) / 10000 }
}

/**
 * 将角度转换为弧度。
 * @param {number} deg - 角度值。
 * @returns {number} - 弧度值。
 */
function rad(deg: number): number {
  return (deg * Math.PI) / 180.0
}

/**
 * 计算两个经纬度之间的中心经纬度。
 *
 * @param {number} oneLon - 第一个点的经度。
 * @param {number} oneLat - 第一个点的纬度。
 * @param {number} twoLon - 第二个点的经度。
 * @param {number} twoLat - 第二个点的纬度。
 * @returns {[number, number]} - 返回中心点的经纬度数组。
 *
 * @version 1.0.0 - 2023-12-23
 *
 * @example
 * // 示例：计算两个经纬度之间的中心经纬度
 * const center = getCenterLonLat(116.4074, 39.9042, 121.4737, 31.2304)
 * console.log('中心点经纬度:', center) // 输出类似 [118.94055, 35.5693]
 */
export const getCenterLonLat = (oneLon: number, oneLat: number, twoLon: number, twoLat: number): [number, number] => {
  const bLon = Math.abs(oneLon - twoLon)
  const bLat = Math.abs(oneLat - twoLat)

  const centerLon = (oneLon + twoLon) / 2
  const centerLat = (oneLat + twoLat) / 2

  return [centerLon, centerLat]
}

/**
 * 将角度转换为弧度
 * @param {number} deg - 角度值
 * @returns {number} 弧度值
 */
function deg2rad(deg: number) {
  return deg * (Math.PI / 180)
}

/**
 * 将弧度转换为角度
 * @param {number} rad - 弧度值
 * @returns {number} 角度值
 */
function rad2deg(rad: number) {
  return rad * (180 / Math.PI)
}
export type Point = { lat: number; lon: number; distance: number }
/**
 * 计算以给定点为中心，距离为 `distance` 的四个新点的坐标
 * @param {number} lat - 中心点的纬度
 * @param {number} lon - 中心点的经度
 * @param {number} distance - 距离（米）
 * @returns {Array<[number, number]>} 四个新点的坐标数组，格式为 [[经度1, 纬度1], [经度2, 纬度2], ...]
 * @example
 * const centerLat = 33.4148429; // 中心点纬度
 * const centerLon = 113.5930592; // 中心点经度
 * const distance = 1; // 距离（米）
 * const newPoints = calculateNewPoints(centerLat, centerLon, distance);
 * console.log(newPoints);
 * // 输出结果：
 * // [
 * //   [113.5930699741221, 33.414842899999535], // 第一个点
 * //   [113.5930592, 33.41483390678393],        // 第二个点
 * //   [113.5930484258779, 33.414842899999535], // 第三个点
 * //   [113.5930592, 33.41485189321607]         // 第四个点
 * // ]
 */
export const calculateNewPoints = ({ lat, lon, distance }: Point) => {
  // 地球半径（米）
  const R = 6371e3

  // 将距离转换为弧度
  const d = distance / R

  // 原始点的弧度
  const latRad = deg2rad(lat)
  const lonRad = deg2rad(lon)

  // 四个新点的坐标数组
  const newPoints = []

  // 计算四个点，每个点与原始点相隔 `distance` 米
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2 // 每个点的角度
    const newLatRad = Math.asin(Math.sin(latRad) * Math.cos(d) + Math.cos(latRad) * Math.sin(d) * Math.cos(angle))
    const newLonRad =
      lonRad + Math.atan2(Math.sin(angle) * Math.sin(d) * Math.cos(latRad), Math.cos(d) - Math.sin(latRad) * Math.sin(newLatRad))

    newPoints.push([rad2deg(newLonRad), rad2deg(newLatRad)])
  }

  return newPoints
}
