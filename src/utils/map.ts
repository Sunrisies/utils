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
export function distanceLngLat(lat1: number, lon1: number, lat2: number, lon2: number): Point {
  // 校验纬度范围
  if (lat1 < -90 || lat1 > 90 || lat2 < -90 || lat2 > 90) {
    throw new Error('纬度必须在 -90 到 90 之间')
  }

  // 校验经度范围
  if (lon1 < -180 || lon1 > 180 || lon2 < -180 || lon2 > 180) {
    throw new Error('经度必须在 -180 到 180 之间')
  }

  const radLat1 = rad2deg(lat1)
  const radLat2 = rad2deg(lat2)
  const a = radLat1 - radLat2
  const b = rad2deg(lon1) - rad2deg(lon2)
  const s =
    2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
  const earthRadius = 6378137.0 // WGS84标准参考椭球中的地球长半径(单位:m)
  const distance = s * earthRadius
  const centerLonLat = getCenterLonLat(lon1, lat1, lon2, lat2)
  return { lon: centerLonLat[0], lat: centerLonLat[1], distance: Math.round(distance * 10000) / 10000 }
}

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
export const getCenterLonLat = (oneLon: number, oneLat: number, twoLon: number, twoLat: number): [number, number] => {
  // 校验经度范围
  if (oneLon < -180 || oneLon > 180 || twoLon < -180 || twoLon > 180) {
    throw new Error('经度必须在 -180 到 180 之间')
  }

  // 校验纬度范围
  if (oneLat < -90 || oneLat > 90 || twoLat < -90 || twoLat > 90) {
    throw new Error('纬度必须在 -90 到 90 之间')
  }
  const centerLon = (oneLon + twoLon) / 2
  const centerLat = (oneLat + twoLat) / 2
  return [centerLon, centerLat]
}

/**
 * 将角度转换为弧度。
 *
 * @param rad - 角度值。
 * @returns 对应的弧度。
 */
function deg2rad(deg: number): number {
  return deg * (Math.PI / 180)
}

/**
 * 将弧度转换为角度
 * @private
 * 
 * @param rad - 需要转换的弧度值
 * @returns 对应的角度值
 */
function rad2deg(rad: number): number {
  return rad * (180 / Math.PI)
}
/**
 * 表示地理坐标点及其关联距离的类型
 * @public
 *
 * @remarks
 * 该类型用于存储具有经度、纬度坐标和关联距离值的点数据，
 * 常见于地理空间计算场景
 */
export type Point = {
  /** 纬度坐标（-90 到 90 之间） */
  lat: number
  /** 经度坐标（-180 到 180 之间） */
  lon: number
  /** 关联的距离值（单位：米） */
  distance: number
}
/**
 * 计算以给定点为中心，在四个方向扩展指定距离的新坐标点
 * @public
 *
 * @param centerPoint - 包含中心点经纬度和距离的对象
 * @returns 四个新点的经纬度坐标数组，按顺时针方向排列
 *
 * @example
 * ```typescript
 * // 在中心点周围生成四个坐标点
 * const newPoints = calculateNewPoints({
 *   lon: 113.5930592,
 *   lat: 33.4148429,
 *   distance: 1
 * });
 * console.log(newPoints); // 输出四个坐标数组
 * ```
 */
export const calculateNewPoints = ({ lat, lon, distance }: Point): Array<[number, number]> => {
  // 校验经度范围
  if (lon < -180 || lon > 180) {
    throw new Error('经度必须在 -180 到 180 之间')
  }

  // 校验纬度范围
  if (lat < -90 || lat > 90) {
    throw new Error('纬度必须在 -90 到 90 之间')
  }
  const R = 6371e3
  const d = distance / R
  const latRad = deg2rad(lat)
  const lonRad = deg2rad(lon)
  const newPoints: Array<[number, number]> = []
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2
    const newLatRad = Math.asin(Math.sin(latRad) * Math.cos(d) + Math.cos(latRad) * Math.sin(d) * Math.cos(angle))
    const newLonRad =
      lonRad + Math.atan2(Math.sin(angle) * Math.sin(d) * Math.cos(latRad), Math.cos(d) - Math.sin(latRad) * Math.sin(newLatRad))

    newPoints.push([rad2deg(newLonRad), rad2deg(newLatRad)])
  }

  return newPoints
}
