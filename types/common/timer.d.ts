/**
 * 日期时间格式化工具类
 * @public
 *
 * @remarks
 * 提供标准日期格式、星期计算、时间格式化等功能，所有方法均为纯函数。
 * 注意：月份计算会自动加 1（Date 对象月份从 0 开始计数）
 *
 * @example
 * ```typescript
 * const formatter = new TimeFormatter();
 * // 格式化当前日期
 * formatter.formatDate(new Date()); // "2023-10-01"
 *
 * // 获取中文星期
 * formatter.getWeekday(new Date()); // "星期一"
 * ```
 */
export declare class TimeFormatter {
    /**
      * 生成符合 ISO 8601 的短日期格式字符串
      * @public
      *
      * @param date - 需要格式化的日期对象（支持 Date 实例或时间戳）
      * @returns 标准化日期字符串（YYYY-MM-DD）
      *
      * @example
      * ```typescript
      * // 格式化当前时间
      * formatter.formatDate(new Date());
      * // 输出示例: "2023-10-01"
      *
      * // 处理跨年日期
      * formatter.formatDate(new Date(2024, 0, 1));
      * // 输出: "2024-01-01"
      * ```
      */
    formatDate(date: Date): string;
    /**
     * 获取中文星期名称
     * @public
     *
     * @param date - 日期对象（注意：周日对应索引 0）
     * @returns 中文星期字符串（"星期一" 至 "星期日"）
     *
     * @example
     * ```typescript
     * // 获取当前星期
     * formatter.getWeekday(new Date());
     *
     * // 指定日期计算
     * formatter.getWeekday(new Date(2023, 9, 1)); // "星期日"
     * formatter.getWeekday(new Date(2023, 9, 2)); // "星期一"
     * ```
     */
    getWeekday(date: Date): string;
    /**
     * 生成标准化时间字符串
     * @public
     *
     * @param date - 需要格式化的时间对象（支持 Date 实例或时间戳）
     * @returns 24 小时制时间字符串（HH:mm:ss）
     *
     * @example
     * ```typescript
     * // 格式化当前时间
     * formatter.formatTime(new Date()); // "14:05:30"
     *
     * // 处理午夜时间
     * formatter.formatTime(new Date(2023, 9, 1, 0, 15, 0)); // "00:15:00"
     * ```
     */
    formatTime(date: Date): string;
}
export type TimeUpdaterType = {
    startUpdate: () => void;
    stopUpdate: () => void;
};
export type UpTimeType = {
    formattedDate: string;
    today: string;
    nowTime: string;
};
/**
 * 时间更新管理器
 * @public
 *
 * @remarks
 * 提供自动更新时间数据的能力，通过回调函数传递格式化后的时间信息。
 * 内置定时器每秒钟更新一次时间数据，需手动调用启动/停止方法
 *
 * @example
 * ```typescript
 * const updater = new TimeUpdater();
 *
 * // 启动时间更新
 * updater.startUpdate(({ nowTime }) => {
 *   console.log('当前时间:', nowTime);
 * });
 *
 * // 停止更新时间
 * updater.stopUpdate();
 * ```
 */
export declare class TimeUpdater {
    private readonly timer;
    private readonly formatter;
    /**
     * 初始化时间更新管理器实例
     * @public
     *
     * @remarks
     * 内部自动创建 Timer 和 TimeFormatter 实例
     * 注意：当前实现为强耦合设计，无法配置外部依赖项
     *
     * @example
     * ```typescript
     * // 基础用法
     * const updater = new TimeUpdater();
     *
     * @example
     * // 未来可扩展的依赖注入形式（当前尚未支持）
     * new TimeUpdater(customTimer, customFormatter);
     * ```
     */
    constructor();
    /**
     * 执行时间数据更新流程
     * @private
     *
     * @remarks
     * 本方法通过时间格式化工具获取当前日期、星期和时间的格式化字符串
     * 每秒钟自动触发一次，通过回调函数传递最新时间数据
     *
     * @param callback - 接收时间数据对象的回调函数，包含：
     *  - formattedDate: ISO 格式日期字符串（YYYY-MM-DD）
     *  - today: 中文星期名称
     *  - nowTime: 24小时制时间字符串（HH:mm:ss）
     *
     * @example
     * ```typescript
     * // 内部使用示例
     * this.updateDateTime((timeData) => {
     *   state.time = timeData.nowTime;
     * });
     * ```
     */
    private updateDateTime;
    /**
     * 开始定期更新时间。
     *
     * @param callback - 回调函数，接收一个包含 formattedDate, today, nowTime 的对象
     * @public
     */
    startUpdate(callback: (result: UpTimeType) => void): void;
    /**
     * 停止定期更新时间。
     *
     * @public
     */
    stopUpdate(): void;
}
/**
 * 定时器控制器
 * @public
 *
 * @remarks
 * 提供定时任务管理能力，支持设置任意间隔时间的周期性回调。
 * 基于浏览器原生 setInterval 实现，使用后需手动调用停止方法释放资源
 *
 * @example
 * ```typescript
 * const timer = new Timer();
 *
 * // 启动定时任务
 * timer.start(() => {
 *   console.log('每2秒执行');
 * }, 2000);
 *
 * // 停止定时任务
 * timer.stop();
 * ```
 */
export declare class Timer {
    private intervalId;
    /**
     * 启动定时任务
     * @public
     *
     * @remarks
     * 该方法会创建周期性定时器，重复执行回调函数直到主动停止
     * 注意：多次调用需先停止前次定时器，避免内存泄漏
     *
     * @param callback - 定时执行的回调函数（无参数、无返回值）
     * @param interval - 执行间隔（单位：毫秒，最小值 10ms）
     *
     * @example
     * ```typescript
     * const timer = new Timer();
     * timer.start(() => {
     *   console.log('每秒钟执行');
     * }, 1000);
     * ```
     */
    start(callback: Function, interval: number): void;
    /**
     * 停止定时任务并释放资源
     * @public
     *
     * @remarks
     * 安全终止当前活动的定时器，清除内部定时器引用
     * 注意：无活动定时器时调用不会产生副作用
     *
     * @example
     * ```typescript
     * const timer = new Timer();
     * timer.start(() => {}, 1000);
     *
     * // 停止后定时器立即失效
     * timer.stop();
     * ```
     */
    stop(): void;
}
export declare const timeUpdater: TimeUpdater;
/**
 * 将时间值格式化为中文长日期时间字符串
 * @public
 *
 * @remarks
 * 支持 Date 实例和 ISO 格式字符串解析，自动处理时区转换
 * 注意：月份显示会自动加 1（Date 对象月份从 0 开始计数）
 *
 * @param date - 可解析的时间值（Date 实例或 ISO 字符串）
 * @returns 中文格式的日期时间字符串（YYYY年MM月DD日 HH:mm:ss）
 *
 * @example
 * ```typescript
 * // 格式化当前时间
 * formatChineseDateTime(new Date());
 *
 * @example
 * // 处理跨年日期
 * formatChineseDateTime('2024-01-01T00:00:00'); // "2024年01月01日 00:00:00"
 * ```
 */
export declare const formatChineseDateTime: (date: Date | string) => string;
/**
 * 时间戳转换为日期字符串。
 * @public
 *
 * @param time - 时间戳（单位：秒）
 * @returns 格式化的日期字符串，格式为 'YYYY年MM月DD日HH时MM分'
 *
 * @example
 * ```typescript
 * // 将时间戳 1633072800 转换为日期字符串
 * const dateString = conversionTime(1633072800);
 * console.log(dateString); // 输出 "2021年10月1日00时00分"
 * ```
 */
export declare const conversionTime: (time: number) => string;
/**
 * 将秒数转换为易读的时长字符串
 * @public
 *
 * @remarks
 * 支持从秒到天的单位转换，自动选择最合适的单位组合
 * 注意：超过24小时会显示天数，超过60分钟显示小时，以此类推
 *
 * @param duration - 以秒为单位的时长（必须为数字类型）
 * @returns 格式化后的时长字符串（示例：3天2小时5分 / 45.30秒）
 * @throws 当参数不是数字类型时抛出错误
 *
 * @example
 * ```typescript
 * // 基本用法
 * convertTime(3661); // "1小时1分1秒"
 * ```
 * @example
 * ```
 * // 小数处理
 * convertTime(45.5); // "45.50秒"
 * ```
 * @example
 * ```typescript
 * convertTime(100000, 'en'); // "11d 4h 20m"
 * ```
 *
 */
export declare const convertTime: (duration: number, type?: "en" | "zh") => string;
