/**
 * 运行环境类型
 */
export type RuntimeEnvironment = 'browser' | 'node' | 'unknown';
/**
 * 检测当前运行环境
 * @returns 返回当前运行环境类型
 */
export declare function detectEnvironment(): RuntimeEnvironment;
/**
 * 检查是否在浏览器环境中运行
 */
export declare function isBrowser(): boolean;
/**
 * 检查是否在 Node.js 环境中运行
 */
export declare function isNode(): boolean;
/**
 * 确保代码在特定环境中运行
 * @param env 期望的运行环境
 * @param feature 功能名称
 */
export declare function ensureEnvironment(env: RuntimeEnvironment, feature: string): void;
