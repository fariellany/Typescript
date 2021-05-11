
//高级类型与条件类型(Readonly, Partial, Pick, Record)

interface Person {
    name: string;
    age?: number;
}
// -------------------------------  高级类型 ------------------------------------------

// -------------------------------Partial 不完整的,残缺的 ------------------------------

type person2 = Partial<Person>; // 变成所有的参数可选
// person2 === {name?: string; age?: number}
const person21:person2={}  // 可以全部为空

// 源码
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// -------------------------------Required 必需的 --------------------------------------

type person3 = Required<Person>;
// person3 === {name: string; age: number}

// 源码:
// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

// -------------------------------Readonly 只读 --------------------------------------

type person4 = Readonly<Person>;
// person4 === {
//        readonly name: string;
//        readonly age?: number;
//  }

// 源码
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// -------------------------------Pick 挑选 --------------------------------------

type person5 = Pick<Person, "name">;
// person5 === {name: string}

// 源码:
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// -------------------------------Record 改变类型  --------------------------------------

type person6 = Record<'name' | 'age', string>
// person6 === {name: string; age: string}

// 源码
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };

// -------------------------------条件类型 --------------------------------------

// T extends U ? X : Y   条件表达式  TypeScript2.8引入

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" : "object";
type T1 = TypeName<string> //  string
type T2 = TypeName<string[]> //object 类型

// 条件表达式的用法
interface Id { id: number }
interface Name { name: string }
type IdOrName<T extends number | string> = T extends number ? Id : Name;

// 分布式条件类型
// (A|B) extends U ? X : Y   =>(A extends U ? X : Y) | (B extends U ? X : Y)

// Exclude<T,U>  可以从类型T中过滤掉可以赋值给类型U的类型
type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"

// Extract<T,U>  可以从类型T中抽取可以赋值给类型U的类型
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

// NotNullable 不为null  undefined
type T04 = NonNullable<string | number | undefined>;  // string | number

// RetrenType<T> 可以获取一个函数返回值的类型
function f1(s: string) {
    return { a: 1, b: s };
}
type T14 = ReturnType<typeof f1>;  // { a: number, b: string }

// InstanceType 取构造函数类型的实例类型。
class C {
    x = 0;
    y = 0;
}

type T20 = InstanceType<typeof C>;  // C
type T21 = InstanceType<any>;  // any
type T22 = InstanceType<never>;  // any
// type T23 = InstanceType<string>;  // Error
// type T24 = InstanceType<Function>;  // Error

//------------------自定义函数方法--------------------------------------
interface AccountInfo {
    age: number,
    phone: string,
    email: string
}

//------------------------自定义omit方法-------------------------------
// type omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

//----------------------------- 自定义 PartialPick 方法-----------------

// type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// type INFO = omit<AccountInfo, 'age' | 'email'> // {phone:string}

//  typeof 操作符可以用来获取一个变量或对象的类型。

interface PersonTypeOf {
    name: string;
    age: number;
}
const sem112: PersonTypeOf = { name: "semlinker", age: 30 };
type Sem11 = typeof sem112; // type Sem = Person 通过 typeof 操作符获取 sem变量类型
const lolo: Sem11 = { name: "lolo", age: 5 } //

// 也可以针对嵌套的对象 返回对象的类型
const kakuqo = {
    name: "kakuqo",
    age: 30,
    address: {
        province: '福建',
        city: '厦门'
    }
}
type Kakuqo = typeof kakuqo; // 查询对象的类型
/*
 type Kakuqo = {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}
*/

// typeof 也可以获取函数对象的类型
function toArray(x: number): Array<number> {
    return [x];
}
type Func = typeof toArray; // -> (x: number) => number[]


// keyof 操作符可以用于获取某种类型的所有键，其返回类型是联合类型("red" | "blue" )

//------------------ keyof typeof 使用------------------------
const cats = {
    'name': '张三',
    'age': 20,
    'color': 'red',
};

function f(a: keyof typeof cats) {
    console.log(a);
}
f('name') //OK
// f('a') //  ERROR 没有此参数

const COLORS = {
    red: 'red',
    blue: 'blue'
}

// 首先通过typeof操作符获取Colors变量的类型，然后通过keyof操作符获取该类型的所有键，
// 即字符串字面量联合类型 'red' | 'blue'
type Colors = keyof typeof COLORS
let color: Colors; // let color: "red" | "blue"
color = 'red' // Ok
color = 'blue' // Ok

// 元组 转换成联合类型
declare const ButtonTypes: ["default", "primary"];
export declare type ButtonType = (typeof ButtonTypes)[number]; //  "default" | "primary"

// 或者 利用const 断言实现
let y2 = ["default", "primary"] as const
type Data2 = typeof y2[number]; //  "default" | "primary"

// 联合类型 另类写法
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }

type Coord = Record<'x' | 'y', number>;
//   type Coord = {
//     x: number;
//     y: number;
// }

// color = 'yellow' // Error

// -----TypeScript 3.4 引入了一种新的字面量构造方式，也称为 const 断言-------

let x12 = "hello" as const;
type X = typeof x12; // type X = "hello"

let y = [10, 20] as const;
type Y = typeof y; // type Y = readonly [10, 20]
type Data = typeof y[number]; // type Data = 10 | 20

let z = { text: "hello" } as const;
type Z = typeof z; // let z: { readonly text: "hello"; }

const locales = [
    {
        locale: "zh-CN",
        language: "中文"
    },
    {
        locale: "en",
        language: "English"
    }
] as const;

//  number 相当于 下标
type Locale = typeof locales[number]["locale"]; // type Locale = "zh-CN" | "en"

// const 只适用于 enum members,string, number, boolean, array,object 常量

let foo11 = {
    name: "foo",
    contents: arr,
} as const; //转换成只读属性

// foo11.name = "bar";   // error!
// foo11.contents = [];  // error!

foo11.contents.push(5); // 但是 数组 还是可以正常的设置参数



