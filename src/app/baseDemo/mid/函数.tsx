

// ------------------------规定传入的参数 和返回的参数的类型 -------------------------------

function search(name: string): string {
    // 后面的string 定义 返回类型
    return `找到了${name}的东西`; // 只能返回 string 类型
}
let value: string = '张三';
console.log(search(value)); //找到了漂亮的东西

// -------------------------------可选参数 --------------------------------------

// 可选参数必须跟在必须参数后面。
function search1(age: number = 18, fun?: string): string {
    return `找到了朋友,${age}岁,长得像${fun ? fun : '凤姐'}`;
}

// -------------------------------设置默认参数--------------------------------------

function search2(age: number = 18, fun = '凤姐'): string {
    return `找到了朋友,${age}岁,长得像${fun ? fun : '凤姐'}`;
}

console.log(search1(18)); //找到了朋友,18岁,长得像凤姐
console.log(search1(18, '刘亦菲')); //找到了朋友,18岁,长得像刘亦菲
console.log(search2(18)); //找到了朋友,18岁,长得像凤姐

// -------------------------------设置 any[] 获取所有参数 ----------------------------

function push(array: any[], ...items: any[]) {
    //...items表示后面接收到的所有参数 设置为 数组类型
    items.forEach((item) => {
        array.push(item);
    });
}
let arr: Array<any> = [];
push(arr, 1, 2, 3, 4, 5, undefined, '5', true);
console.log(arr); //[ 1, 2, 3, 4, 5, undefined, '5', true ]


// -------------------------------书写完整函数类型 --------------------------------------
let myAdd: (x: number, y: number) => number =
    function (x: number, y: number): number { return x + y; };
myAdd(1, 1) // 参数类型和返回值类型

let myAdd1 = function (x: number, y: number): number { return x + y; }; // 简化版本
myAdd1(1, 1)

// -------------------------------函数重载 ----------------------------------

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

// 附加 ：类 和接口 还有函数 都可以重复声明多次  然后 聚合获取所有的参数

// -------------------------------this函数 --------------------------------------
 TODO: