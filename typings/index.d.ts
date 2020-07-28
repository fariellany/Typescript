
// 定义参数
declare var globalCount: number;

//-------------------type interface function 定义函数--------------------------
// 定义函数
declare type globalCountFun = (a: number) => number;

//用 interface 定义 函数
declare interface globalCountString {
    (s: string): string
}

//通过 function定义函数
declare function globalFunctionString(a: string): string;

//--------------------declare namespace  class----------------------------------

// 利用  namespace interface  class
declare namespace Mynamespace {
    export interface globalMynamespace {
        (s: string): string
    }
    //导出class
    export class MyClass {
        getNums(a: number): number
    }
}

// 声明一个全局类 
declare class PersonGlobal {

    static maxAge: number //静态变量

    static getMaxAge(): number //静态方法

    constructor(name: string, age: number)  //构造函数

    getName(id: number): string
}
