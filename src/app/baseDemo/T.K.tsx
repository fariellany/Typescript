//定义函数
let mySum = function (x: number | string, y: number | string): number {
  x = Number(x);
  y = Number(y);
  return x + y;
};
console.log(mySum(1, 2), mySum('1', '2')); //3

// 设置泛式  => number 为返回的类型是number类型
let mySum1: (x: number | string, y: number | string) => number = function (x, y) {
  x = Number(x);
  y = Number(y);
  return x + y;
};
console.log('泛型的赋值', mySum1(1, 2)); //3

// 定义接口 设置泛型类型
interface setPlan {
  (x: number, y: number): number; //(参数名:参数类型,参数名:参数类型):函数返回类型

  // 设置只读属性
  // readonly x: number;
  // readonly y: number;
}

//或者  let mySum2: setPlan
let mySum2: setPlan = function (x, y) {
  return x + y;
};
console.log('定义接口 设置泛型', mySum2(1, 2)); //3

// 声明泛型函数
function identity<T>(params: T): T {
  return params;
}
let output = identity<string>('myString');
console.log(output); // myString

// 使用泛型
function genericity<T>(x: T): T {
  return x;
}
genericity(1);
genericity('1');
