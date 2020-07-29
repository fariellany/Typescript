
// -------------------------------相同点 --------------------------------------

/**
 * Interface(接口) vs Type alias(类型别名)
 * 相同点-> 都可以描述一个对象或者函数
 *      -> 都允许拓展（extends）
 *      --->> interface extends interface (接口继承接口)
 *      --->> type extends type (类型继承类型)
 *      --->> interface extends type (接口继承类型)
 *      --->> type extends interface (类型继承接口)
 */

// -------------------------------Interface --------------------------------------

interface UserOP {  // 描述一个对象
    name: string;
    email: string;
    isBig: boolean;
    age: number;
}
interface SetUser { // 定义一个函数
    (name: string, email: string, isBig: boolean, age: number): UserOP;
}

let pikaqiu: UserOP; // 创建一个变量是 UserOP的类型
pikaqiu = { name: 'zyn', email: 're', isBig: false, age: 34 }

let mySearchXX: SetUser; // 用来描述一个方法
mySearchXX = function (name: string, email: string, isBig: boolean, age: number): UserOP {
    return pikaqiu;
}

// -------------------------------type----------------------------------------

type UserTy = {
    name: string
    age: number
};

// 定义函数
type SetUserTy = (name: string, age: number) => UserTy;

let pikaqiu1: UserTy;
pikaqiu1 = { name: 'zyn', age: 54 };

let mySearchXXTy: SetUserTy;
mySearchXXTy = function (name: string, age: number) {
    return pikaqiu1
}

// -------------------------------interface extends interface  -----------------------------

interface dudu1 {
    name: string
}

interface dudu2 extends dudu1 {
    age: number  // 不需要写多余参数
}

const duduTest: dudu2 = { name: 'zyb', age: 23 };

// -------------------------------类型继承类型 (&) --------------------------------------

type Nametype = {
    name: string;
}
type UserType = Nametype & { age: number };  // 使用 & 
const valueType: UserType = { name: 'zyb', age: 23 };

// -------------------------------interface extends type -------------------------------

type LulvwaType = {
    name: string
}

interface LulvwaFace extends LulvwaType {
    age: number;
}

const LulvwaValue: LulvwaFace = { name: 'zyb', age: 23 };

// -------------------------------type extends interface -----------------------------

interface shajFace {
    name: string
}

type shajType = shajFace & { // 也是使用&
    age: number;
}
const shajValue: shajType = { name: 'zyb', age: 23 };


// -------------------------------不同点--------------------------------------
/**
 * Interface(接口) vs Type alias(类型别名)
 * 不同点->
 *      -----> 1: type 可以声明基本类型别名，联合类型，元组等类型,而 interface 不行
 *      -----> 2：interface 能够声明合并,type 不行
 */

// 基本类型别名
type DiffName = string;

// interface 定义类型
interface Dog {
    wong(): string;
}
interface Cat {
    miao(): number;
}
// 联合类型 基本写法
let muchtype: Dog | Cat;
// type 联合写法
type Pet = Dog | Cat
// 元祖类型 写法
type PetList = [Dog, Pet]


// interface 能够声明合并
interface DiffLx {
    name: string
}
interface DiffLx {
    age: number
}
interface DiffLx {
    sex: string
}
// 合并后的结果
const DiffLxValue: DiffLx = { name: '34', age: 34, sex: 'nv' }


