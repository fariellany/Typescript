
// 定义的局部模块

declare module "url!*" { // 使用import 引入
    export interface Url {
        nameModule: string;
        ageModule: number;
    }
    export type moduleAdd = (x: number, y: number) => number
}

// 定义 namesapce
namespace FactoryNamesapce { // 使用  reference 引入命名空间
    export type Namesapce = (x: number, y: number) => number
}
