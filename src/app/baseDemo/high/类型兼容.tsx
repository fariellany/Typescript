// https://www.bilibili.com/video/BV1F7411c7m5?p=11

// -------------------------------参数个数 --------------------------------------

interface info {
  age: number
}
let infos: info
const info1 = { name: 2 }
const info2 = { age: 1, name: 2, sex: '男' }
infos = info2 //  参数多的可以赋值到少的
// infos = info1 //  name没有 会报错

// -------------------------------函数个数 兼容 --------------------------------------

let x1 = (a: number) => 0
let x2 = (b: number, c: string) => 0
x2 = x1
// x1 = x2  // 报错 必须要参数少的在右边

// -------------------------------函数类型 --------------------------------------

let x11 = (): string | number => '1'
let x22 = (): number => 1
let x33 = (): string => '1'

x11 = x22
// x22 = x11   // 报错  x22没有  string类型
// x22 = x33   // 报错  类型不同

// -------------------------------可选参数 --------------------------------------

const getCount = (arr: number[], callback: (...args: number[]) => number): number => {
  return callback(...arr)
}

getCount([1, 2, 3], (...args: number[]): number => args.reduce((a, b) => a + b, 0)) // 6

// -------------------------------函数双向斜变 (参数类型)------------------------------

let funcA = (arg: number | string): void => { }
let funcB = (arg: number): void => { }
// funcA = funcB  // OK
// funcB = funcA // OK

// -------------------------------返回值类型 --------------------------------------

let x5 = (): string | number => 0
let x6 = (): string => '0'
x5 = x6   // 返回值类型都是  string
// x6 = x5 // 报错 x6 没有  number类型

// -------------------------------函数重载 --------------------------------------

function mergeDate(arg1: number, arg2: number): number
function mergeDate(arg1: string, arg2: string): string //两个重载
function mergeDate(arg1: any, arg2: any): any {
  return arg1 + arg2
}

function mergeDate1(arg1: string, arg2: string): string //一个重载
function mergeDate1(arg1: any, arg2: any): any {
  return arg1 + arg2
}
let sum1 = mergeDate
// sum1 = mergeDate1 // 报错 mergeDate1 缺少个函数重载

// -------------------------------class类比较 --------------------------------------

// class 类的比较 只有实例的成员会被比较 静态成员和构造函数不在比较的范围内。

//  TODO: 类的比较以及兼容性问题

class AnimalDom {
  // age: number
  // name111: string
  constructor(public age: number) {
    // this.name = name
    // this.age = age
  }
}

class Size {
  age: number
  constructor(age: number) {
    this.age = age
  }
}

let s55: Size;
let a55: AnimalDom;
// a55 = s55;  // OK
// s55 = a55;  // OK

// -------------------------------泛型 --------------------------------------

interface Date1<T> {
  data: T //有参数定义
}
let data1: Date1<number>
let data2: Date1<string>
// data1 = data2 //  不能将类型“Date1<string>”分配给类型“Date1<number>”。

interface Date2<T> { };//没有定义参数
let data11: Date2<number>;
let data22: Date2<string>;
// data11 = data22   //ok
