

// 导入模块 
// https://www.bilibili.com/video/BV1F7411c7m5?p=15

// 1: require 和 import
// import name from './a' =import name = require('./a') 

// 导入全部
// import * as moment from 'moment'  // 会导入所有的js 还有默认moudle

// import moment from 'moment'  // 只是默认moudle
// import moment = require('moment')  //  只是默认moudle

// 先导入其他文件的js 然后在导出去

// export * as name  form './a'

// 定义
namespace Shapes {
    export namespace ShapesChild {
        export class Animal { }
        export class Child { }
    }
}

// 使用
import planme = Shapes.ShapesChild
let chlid = new planme.Child() //创建  chlid
