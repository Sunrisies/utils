import { describe, expect, test, vi, afterEach } from 'vitest';
import { getContentDimensions, conversionTime, genRandStr } from '../index';

// describe('getContentDimensions 工具函数', () => {
//     // 模拟 DOM 环境
//     const mockElement = document.createElement('div');
//     mockElement.id = 'test-element';
//     document.body.appendChild(mockElement);

//     // 清理 DOM
//     afterEach(() => {
//         document.body.innerHTML = '';
//     });

//     test('正常获取带 padding 的元素尺寸', () => {
//         // 模拟元素尺寸和样式
//         vi.spyOn(mockElement, 'getBoundingClientRect').mockImplementation(() => ({
//             width: 200,
//             height: 100,
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             x: 0,
//             y: 0,
//             toJSON: () => { }
//         }));

//         Object.defineProperty(window, 'getComputedStyle', {
//             value: () => ({
//                 paddingTop: '10px',
//                 paddingRight: '20px',
//                 paddingBottom: '30px',
//                 paddingLeft: '40px'
//             })
//         });

//         const result = getContentDimensions('test-element');
//         expect(result).toEqual({ width: 140, height: 60 }); // 200-(40+20)=140, 100-(10+30)=60
//     });

//     test('元素不存在时返回错误', () => {
//         const result = getContentDimensions('non-existent-element');
//         expect(result).toBeInstanceOf(Error);
//         expect((result as Error).message).toContain('找不到id为');
//     });

//     test('无法获取计算样式时返回错误', () => {
//         // 模拟无法获取计算样式的情况
//         // 修改为返回一个空的 CSSStyleDeclaration 对象
//         vi.spyOn(window, 'getComputedStyle').mockImplementation(() => ({
//             paddingTop: '0px',
//             paddingRight: '0px',
//             paddingBottom: '0px',
//             paddingLeft: '0px',
//             // 这里可以根据需要添加更多 CSSStyleDeclaration 接口的属性
//             getPropertyValue: () => '',
//             item: () => '',
//             length: 0,
//             parentRule: null,
//             cssText: '',
//             setProperty: () => { },
//             removeProperty: () => '',
//             // 这里需要满足 CSSStyleDeclaration 接口的所有属性和方法，可根据实际情况补充
//         } as unknown as CSSStyleDeclaration));

//         const result = getContentDimensions('test-element');
//         expect(result).toBeInstanceOf(Error);
//         expect((result as Error).message).toContain('Element has no computed style');
//     });
// });


// ... 已有getContentDimensions测试用例 ...

describe('conversionTime 工具函数', () => {
    // 设置测试时区为北京时间
    process.env.TZ = 'Asia/Shanghai';

    test('转换常规时间戳', () => {
        // 2021-10-01 08:00:00 UTC+8 (时间戳1633046400)
        expect(conversionTime(1633046400)).toBe('2021年10月1日8时0分');
    });

    test('处理跨日时间', () => {
        // 2023-12-31 23:59:59 UTC+8 → 2024-01-01 07:59:59 UTC
        expect(conversionTime(1704038399)).toBe('2023年12月31日23时59分');
    });

    test('处理闰年日期', () => {
        // 2020-2-29 12:30:00 UTC+8 (时间戳1582943445)
        expect(conversionTime(1582950645)).toBe('2020年2月29日12时30分');
    });

    test('处理个位数时间单位', () => {
        // 2023-03-05 09:05:08 UTC+8
        expect(conversionTime(1677978308)).toBe('2023年3月5日9时5分');
    });

    test('处理零值时间戳', () => {
        // 1970-01-01 08:00:00 UTC+8
        expect(conversionTime(0)).toBe('1970年1月1日8时0分');
    });
});

// ... 已有其他测试用例 ...

describe('genRandStr 工具函数', () => {
    test('生成指定长度的随机字符串', () => {
        const result = genRandStr(10);
        expect(result).toHaveLength(10);
        expect(result).toMatch(/^[A-Za-z0-9]{10}$/);
    });

    test('处理零值输入', () => {
        const result = genRandStr(0);
        expect(result).toBeInstanceOf(Error);
        expect((result as unknown as Error).message).toBe('Length must be a positive number');
    });

    test('处理负数输入', () => {
        const result = genRandStr(-5);
        expect(result).toBeInstanceOf(Error);
    });

    test('处理非数字输入', () => {
        const result = genRandStr('invalid');
        expect(result).toBeInstanceOf(Error);
    });

    test('验证字符集完整性', () => {
        const result = genRandStr(1000);
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // 验证生成的字符串只包含指定字符集的字符
        expect([...result].every(c => charset.includes(c))).toBe(true);
    });
});