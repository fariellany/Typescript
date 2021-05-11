

// -------------------------------声明泛型函数 --------------------------------------

function identity<T>(params: T): T {
    return params;
}

let output = identity<string>('myString');
console.log(output); // myString

// 两种泛型类型写法
function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity1: <T>(arg: T) => T = identity;

// -------------------------------使用泛型 --------------------------------------

function genericity<T>(x: T): T {
    return x;
}
genericity(1);
genericity('1');

// -------------------------------泛型类 --------------------------------------

class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

// -------------------------------泛型约束 --------------------------------------

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x111 = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x111, "a"); // okay
// getProperty(x111, "m"); // error:


// -------------------------------使用类类型 --------------------------------------

class BeeKeeper {
    hasMask!: boolean;
}

class ZooKeeper {
    nametag!: string;
}

class Animal {
    numLegs!: number;
}

class Bee extends Animal {
    keeper!: BeeKeeper; // numLegs: number; Animal 上面的
}

class Lion extends Animal {
    keeper!: ZooKeeper; // numLegs: number; Animal 上面的
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!
// createInstance(ZooKeeper).keeper.hasMask;   // 错误


// -------------------------------声明 propmise 类型 --------------------------------------
interface IResponse<T> {
    message: string,
    result: T, //  number[]
    success: boolean,
}
// 定义是个promise
async function getResult(): Promise<IResponse<number[]>> {
    return {
        message: '获取成功',
        result: [1, 2, 3],
        success: true,
    }
}
getResult()
    .then(result => {
        console.log(result.result) // [1,2,3]
    })
