
//TODO: 类型断言 值 as 类型

interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') { // 类型断言
        return true;
    }
    return false;
}

// 如果是类的话 可以使用  instanceof来判断 类型
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}

// 如果是接口的话，不能使用  instanceof 

// interface ApiError extends Error {
//     code: number;
// }
// interface HttpError extends baocError {
//     statusCode: number;
// }

// function isApiError(error: Error) { // bao'c
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }


// 若 A 兼容 B，那么 A 能够被断言为 B，B 也能被断言为 A

/**
 * 1.联合类型可以被断言为其中一个类型
   2. 父类可以被断言为子类 
   3. 任何类型都可以被断言为 any
   4. any 可以被断言为任何类型
 */

interface Animal {
    name: string;
}

interface Cat {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Cat); // 父类可以被断言为子类
}

function testCat(cat: Cat) {
    return (cat as Animal); // 子类可以被断言为父类
}

// TODO: 双重断言 除非迫不得已，千万别用双重断言！

interface Cat {
    run(): void;
}

interface Fish {
    swim(): void;
}

function doubleCat(cat: Cat) {
    return (cat as any as Fish);
}

// 类型断言 vs 类型声明
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData('tom') as Cat;  // 相关于 any as Cat
// 或者
const tom1: Cat = getCacheData('tom') //  可以直接类型声明 因为是any类型
tom.run();

// 类型声明 区别
interface Animal {
    name: string;
}
interface Cat {
    name: string;
    run(): void;
}

const animal: Animal = {
    name: 'tom'
};
let tom2 = animal as Cat;
// 不可以  let tom2: Cat = animal;  这是类型直接声明 
// animal 赋值给 tom，需要满足 Cat 兼容 Animal 才行
tom2.run()

// 使用泛型解决 最优的解决方法
function getCacheData1<T>(key: string): T {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom4 = getCacheData1<Cat>('tom');
tom.run();