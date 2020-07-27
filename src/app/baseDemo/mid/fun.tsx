
// TODO: 函数类型

// never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式
// 或箭头函数表达式的返回值类型
function error1(message: string): never {
    throw new Error(message);
}
// error1('1')

//返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) { }
}
// infiniteLoop()

// 规定传入的参数 和返回的参数的类型
function search(name: string): string {
    // 后面的string 定义 返回类型
    return `找到了${name}的东西`; // 只能返回 string 类型
}
let value: string = '张三';
console.log(search(value)); //找到了漂亮的东西

// 可选参数
function search1(age: number = 18, fun?: string): string {
    return `找到了朋友,${age}岁,长得像${fun ? fun : '凤姐'}`;
}

// 设置默认参数
function search2(age: number = 18, fun = '凤姐'): string {
    return `找到了朋友,${age}岁,长得像${fun ? fun : '凤姐'}`;
}

console.log(search1(18)); //找到了朋友,18岁,长得像凤姐
console.log(search1(18, '刘亦菲')); //找到了朋友,18岁,长得像刘亦菲
console.log(search2(18)); //找到了朋友,18岁,长得像凤姐

// 设置 any[] 获取所有参数
function push(array: any[], ...items: any[]) {
    //...items表示后面接收到的所有参数 设置为 数组类型
    items.forEach((item) => {
        array.push(item);
    });
}
let arr: Array<any> = [];
push(arr, 1, 2, 3, 4, 5, undefined, '5', true);
console.log(arr); //[ 1, 2, 3, 4, 5, undefined, '5', true ]

// 函数重载

function reverse1(x: number | string): number | string {
    // 联合声明 返回的number 或者  string
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join());
    } else {
        return x.toString().split('').reverse().join();
    }
}
//但如果我们想在声明时就明确入参number对应返回number，入参string对应返回string

// 函数的重载 可以声明多次
function reverse(x: number): number;
function reverse(x: string): string; //提前声明两个同名函数，确定入参和返回值。
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join());
    } else {
        return x.toString().split('').reverse().join();
    }
}
