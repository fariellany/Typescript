
// css module的配置
// declare module '*.css' {
//     const styles: any;
//     export = styles;
// }

// // 定义全局的高级类型
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
// type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// 定义juqery
declare var jQuery: (selector: string) => any;

// 声明文件有两种写法

// 1:第一种，模块导出声明写法
declare interface funcAbcSign {
    (s: string): string
}

export declare let abc: funcAbcSign;

// 2：第二种，全局类型声明写法
declare module "abc" {
    interface funcAbcSign {
        (s: string): string
    }

    export let abc: funcAbcSign;
}

// 定义全局  global 参数
declare global {
    function SetGlobal(s: string): void
}

// TODO:  全局类型声明和 模块导出声明区别?

// 1. 全局类型声明里的名称将被引入整个 TypeScript 全局命名空间中，从引用这个 声明文件起就可以自由使用。
// 2. 模块导出声明里的名称必须通过 import/require 才能使用。

