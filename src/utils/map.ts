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
  return deg * Math.PI / 180.0
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
