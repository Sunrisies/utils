/**
 * 相对时间配置选项
 */
export interface RelativeTimeOptions {
    /** 当前时间参考点，默认为当前时间 */
    now?: Date | number | string;
    /** 语言设置，默认为 'zh-CN'，支持 'zh-CN' | 'en-US' */
    locale?: 'zh-CN' | 'en-US';
    /** 自定义文案配置对象，如果提供则覆盖默认的语言文案 */
    messages?: {
        justNow?: string;
        seconds?: string;
        minutes?: string;
        hours?: string;
        days?: string;
        weeks?: string;
        months?: string;
        years?: string;
        future?: string;
        past?: string;
    };
}
/**
 * 相对时间描述工具
 * @public
 *
 * @remarks
 * 智能格式化相对时间，支持以下特性：
 * - 支持多种时间单位（秒、分、时、天、周、月、年）
 * - 支持中英文国际化显示
 * - 支持未来时间和过去时间
 * - 支持自定义文案
 *
 * @param date - 目标日期或时间戳
 * @param options - 格式化配置选项对象
 * @returns 格式化后的相对时间描述字符串
 * @throws {TypeError} 当输入的日期参数无效时抛出
 *
 * @example
 * ```typescript
 * // 基本用法（中文）
 * getRelativeTime(new Date("2024-01-01")); // "x天前"
 *
 * // 英文显示
 * getRelativeTime(date, { locale: "en-US" }); // "x days ago"
 *
 * // 自定义文案（会覆盖默认语言设置）
 * getRelativeTime(date, {
 *   messages: {
 *     minutes: "{count} mins",
 *     past: "{time} before"
 *   }
 * });
 * ```
 */
export declare function getRelativeTime(date: Date | number | string, options?: RelativeTimeOptions): string;
