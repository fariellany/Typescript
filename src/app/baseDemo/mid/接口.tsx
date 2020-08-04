

// -------------------------------定义接口 --------------------------------------
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

let at1: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = at1; //设置为只读
//  at1 = ro as readonly number[]; 或者利用断言重写
// ro[0] = 12; // error!

// -------------------------------额外属性检查 ------------------------------------

interface Config {
    width?: number;
    [propName: string]: any;  // 方法2 添加字符串索引签名：
}

function CalculateAreas(config: Config): { area: number } {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square }
}

// 会认为传入的参数是widdth，并不是width。 其实是错误的
// let mySquare = CalculateAreas({ widdth: 5 });

// 方法1
let mySquare1 = CalculateAreas({ widdth: 5 } as Config)
// 方法2 添加字符串索引签名：

// -------------------------------数字索引 字符串索引--------------------------------------

//数字索引
interface StringArray {
    readonly [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
// myArray[2] = "Mallory"; // error!  索引签名是只读的

//字符串索引
interface ObjectString {
    readonly [index: string]: string | number; //元组
}

let myObject: ObjectString

myObject = {
    name: '张三',
    age: 12
};


// -------------------------------类类型--------------------------------------

// 实现接口

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void; //在接口定义一个方法
}

class Clock implements ClockInterface {
    currentTime!: Date;
    constructor(h: number, m: number) { }

    setTime(d: Date) { //必须要在类中实现
        this.currentTime = d;
    }
}

// -------------------------------类静态部分与实例部分 --------------------------------
TODO:

// -------------------------------继承接口 --------------------------------------

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square!: Square
square.color = "blue";  // OK
square.sideLength = 10; // OK
square.penWidth = 5.0; // OK

// -------------------------------混合类型 --------------------------------------

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = (function (start: number) { }) as Counter;
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let ct = getCounter();
ct(10);
ct.reset();
ct.interval = 5.0;

// -------------------------------接口继承类 --------------------------------------

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void; // 包含 Control中 state  私有称源
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// 错误：“Image”类型缺少“state”属性。
// class ImageT implements SelectableControl  {
//     select() { } //需要继承 Control 类里面的 state 属性
// }

// -------------------------------附加 --------------------------------------

// 接口 可以extends(继承) 接口 或者类

// 类 可以  implements(实现) 接口



