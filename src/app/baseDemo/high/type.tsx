
//高级类型与条件类型(Readonly, Partial, Pick, Record)

interface Person {
    name: string;
    age?: number;
}

// TODO: 高级类型

// Partial 不完整的,残缺的
type person2 = Partial<Person>; // 变成所有的参数可选
// person2 === {name?: string; age?: number}

// 源码
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// Required 必需的
type person3 = Required<Person>;
// person3 === {name: string; age: number}

// 源码:
// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

// Readonly 只读
type person4 = Readonly<Person>;
// person4 === {
//        readonly name: string;
//        readonly age?: number;
//  }

// 源码
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// Pick 挑选
type person5 = Pick<Person, "name">;
// person5 === {name: string}

// 源码:
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

//  Record 改变类型 
type person6 = Record<'name' | 'age', string>
// person6 === {name: string; age: string}

// 源码
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };

// TODO: 条件类型

// T extends U ? X : Y   条件表达式

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";
type T1 = TypeName<string> //  string
type T2 = TypeName<string[]> //object 类型

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

// TODO: 自定义函数方法
interface AccountInfo {
    age: number,
    phone: string,
    email: string
}

// 自定义omit方法
// type omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

// // 自定义 PartialPick 方法

// type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// type INFO = omit<AccountInfo, 'age' | 'email'> // {phone:string}