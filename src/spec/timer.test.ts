import { describe, test, expect } from 'vitest';
import { formatChineseDateTime } from '../utils/timer';

describe('日期时间格式化工具', () => {
    test('正确解析ISO格式字符串', () => {
        const isoDate = '2025-03-25T08:32:11.469Z';
        // 预期结果根据北京时间（UTC+8）计算
        expect(formatChineseDateTime(isoDate)).toBe('2025年03月25日 16:32:11');
    });

    test('正确格式化常规日期时间', () => {
        const date = new Date(2024, 2, 15, 10, 5, 30); // 注意：月份从0开始，2表示3月
        expect(formatChineseDateTime(date)).toBe('2024年03月15日 10:05:30');
    });

    test('处理个位数月份和日期', () => {
        const date = new Date(2023, 0, 5, 9, 3, 2); // 2023-01-05 09:03:02
        expect(formatChineseDateTime(date)).toBe('2023年01月05日 09:03:02');
    });

    test('处理午夜时间', () => {
        const date = new Date(2024, 11, 31, 0, 0, 0); // 2024-12-31 00:00:00
        expect(formatChineseDateTime(date)).toBe('2024年12月31日 00:00:00');
    });

    test('处理闰年日期', () => {
        const date = new Date(2024, 1, 29, 15, 30, 0); // 2024-02-29 15:30:00
        expect(formatChineseDateTime(date)).toBe('2024年02月29日 15:30:00');
    });
});