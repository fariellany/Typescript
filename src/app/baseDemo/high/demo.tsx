
// * 1: 声明数组对象格式
let data=[
  {name:'张三',age:11},
  {name:'李四',age:12}
]

interface obj{
   name:string,
   age:number,
}
// 声明数组对象 (两种方式都行)
const lists:Array<obj>=data
const list2:obj[]=data
const list3:Partial<obj[]>=data // 或者没有

// 只取对象的值
const adds=function name(objs:typeof data) {
   return objs[0].name
}
console.log(adds(data));

// * 2: 声明一个函数只能取 string | number | boolean

type BaseType = string | number | boolean

// 这里表示 copy 的参数
// 只能是字符串、数字、布尔这几种基础类型
// extends 继承之前的
function copy<T extends BaseType>(arg: T): T {
  return arg
}
copy(true)
copy(1)
copy('1111')

// * 3:extends 经常与 keyof 一起使用，例如我们有一个方法专门用来获取对象的值，但是这个对象并不确定，
// 我们就可以使用 extends 和 keyof 进行约束。

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

const obj = { a: 1 }
const a111 = getValue(obj, 'a')
