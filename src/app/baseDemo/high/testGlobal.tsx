
//  <reference path = "./../../../../types/module.d.ts" />
// 测试 全局定义的Global

globalCount = 1

//-------------------type interface function 定义函数--------------------------

// 获取全局定义的函数
let Funs: globalCountFun = (x) => {
    return 1 // 只能返回 number
}
console.log(Funs(1)) // 1

// 接口定义的全局函数 
let Funs1: globalCountString
Funs1('1')

// 直接function 定义的函数
globalFunctionString('1') // string类型


//--------------------declare namespace----------------------------------------------------

// namespace定义的函数
let Funs2: Mynamespace.globalMynamespace
Funs2('1')

//class 中getNums里面的方法
let obj = new Mynamespace.MyClass()
obj.getNums(2)

// 生成class 类
let personGlobal = new PersonGlobal('张三', 18) // 


// ----------------------------module 定义的局部模块 非全局模块 -------------------
// 生成module

import * as URL from "url!通配符的使用"; // 使用通配符 别名
// import URL = require("url") // 2: 这种方法下 系统不允许

let Funs3: URL.moduleAdd
Funs3(1, 1)

// namespace refence 导入  
/// <reference path = "./module.tsx" />  
import create = FactoryNamesapce.Namesapce // 不借助reference 也可以?
let Funs4: create
Funs4(1, 1)

// ===================定义全局 golabl=======
// // declare global {
//     function SetGlobal(s: string): void
// }
SetGlobal('1')


