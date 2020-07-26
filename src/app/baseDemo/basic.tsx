//any  任意类型
let any1: any;
any1 = 1;
any1 = ['张三'];
console.log(any1); // ["张三"]

// Tuple 元组 两种声明
let x: [string, number]; // 设置参数
let a: (number | string)[]; // 混合传参
x = ['hello', 10]; // OK
a = ['张三'];
console.log({ x }); // ["hello", 10]
console.log({ a }); // ["张三"]

// 声明 数组 两个方式
let arr3: number[] = [1, 2];
let arr1: Array<number> = [1, 2];
let arr2: Array<boolean> = new Array(false, true);
console.log(arr3, arr1, arr2); // [1, 2]

// enum 枚举
enum Color {
  Red = 2,
  Green,
  Blue = 'bule'
} //不设置参数就是获取下标
let c: Color = Color.Green;
console.log({ c }); // {c: 3}
console.log(Color.Blue); // 'bule'

// void 使用 赋值 u'nd
let unusable: void = undefined;
let unusable1: undefined = undefined;
let unusable2: null = null;
let unusable3: any = undefined;
console.log(unusable, unusable1, unusable2, unusable3); // 'undefined'
