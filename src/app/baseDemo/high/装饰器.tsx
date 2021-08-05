
// https://www.jianshu.com/p/afef44d449bd

// -------------------------------类装饰器 --------------------------------------

function addAge(name: string, age: number) {
  return function (target: Function) {
    console.log('target: ', target);//  方法
    target.prototype.age = age; //
    target.prototype.name = name;
  };
}

@addAge('张三', 20)
class Hello {
  name?: string;
  age?: number;
  constructor(age?: number, name?: string) {
    // this.name = name;
    // this.age = age;   // 不注释的化 不传值的话，为undefined
  }
}

console.log(Hello.prototype.age);//20
let hello = new Hello();
console.log('hello: ', hello);

console.log(hello.age, hello.name);// 20 张三

// -------------------------------方法装饰器 --------------------------------------

// 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
// 方法装饰会在运行时传入下列3个参数：

// 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2、成员的名字。
// 3、成员的属性描述符{value: any, writable: boolean, enumerable: boolean, configurable: boolean}。

function addAge1(constructor: Function) {
  constructor.prototype.age = 18;
}

function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target, '方法装饰器'); //fun 函数
  console.log("prop 方法装饰器 " + propertyKey); // 函数名称 'hello'
  console.log("desc  方法装饰器" + JSON.stringify(descriptor) + "\n\n"); // {"writable":true,"enumerable":true,"configurable":true}

};

@addAge1
class Hello1 {
  name: string;
  age?: number;
  constructor() {
    console.log('hello');
    this.name = 'yugo';
  }

  @method
  hello() {
    return 'instance method'; // 返回的是hello 和 constructor 构造方法等
  }

  @method
  static shello() { //对于static 修饰的方法 返回的target 是类本身
    return 'static method';
  }
}

// -------------------------------访问器装饰器 --------------------------------------

//访问器装饰器应用于访问器的属性描述符，可用于观察，修改或替换访问者的定义。
// 访问器装饰器`不能在声明文件中使用`，也不能在任何其他环境上下文中使用（例如在`声明类`中）

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() { return this._x; }

  @configurable(false)
  get y() { return this._y; }
}

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value; //不可编辑
  };
}

// -------------------------------方法参数装饰器 --------------------------------------

const parseConf: any = [];
class Modal {
  @parseFunc
  public addOne(@parse('number') num: any) { //当成参数传入
    console.log('num:', num);
    return num + 1;
  }
}

// 在函数调用前执行格式化操作
function parseFunc(target: any, name: any, descriptor: any) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    for (let index = 0; index < parseConf.length; index++) {
      const type = parseConf[index];
      console.log(type);
      switch (type) {
        case 'number':
          args[index] = Number(args[index]);
          break;
        case 'string':
          args[index] = String(args[index]);
          break;
        case 'boolean':
          args[index] = String(args[index]) === 'true';
          break;
      }
      return originalMethod.apply(this, args);
    }
  };
  return descriptor;
}

// 向全局对象中添加对应的格式化信息
function parse(type: any) {
  return function (target: any, name: any, index: number) {
    parseConf[index] = type;
    console.log('parseConf[index]:', type); // number
  };
}
let modal = new Modal();
console.log(modal.addOne('10')); // 11 number类型

// -------------------------------属性装饰器 --------------------------------------

function log(target: any, propertyKey: string) {
  let value = target[propertyKey];
  // 用来替换的getter
  const getter = function () {
    console.log(`Getter for ${propertyKey} returned ${value}`); // Getter for num returned 2
    return value;
  }
  // 用来替换的setter
  const setter = function (newVal: any) {
    console.log(`Set ${propertyKey} to ${newVal}`);// Set num to 2
    value = newVal;
  };
  // 替换属性，先删除原先的属性，再重新定义属性
  if (delete target[propertyKey]) {
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
class Calculator {
  @log
  public num!: number;
  square() {
    return this.num * this.num;
  }
}
let cal = new Calculator();
cal.num = 2;
console.log(cal.square()); // 4
// Set num to 2
// Getter for num returned 2
// Getter for num returned 2
// 4


// -------------------------------加载器执行顺序 --------------------------------------

//类装饰器
function ClassDecorator() {
  return function (target: any) {
    console.log("类装饰器");
  }
}

//方法装饰器
function MethodDecorator() {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    console.log("方法装饰器");
  }
}
// 参数装饰器1
function Param1Decorator() {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log("参数装饰器1");
  }
}
// 参数装饰器2
function Param2Decorator() {
  return function (target: any, methodName: string, paramIndex: number) {
    console.log("参数装饰器2");
  }
}

//属性装饰器
function PropertyDecorator() {
  return function (target: any, propertyName: string) {
    console.log("属性装饰器");
  }
}

@ClassDecorator() // 类装饰器
class Hello2 {
  @PropertyDecorator() // 属性装饰器
  greeting?: string;


  @MethodDecorator() // 方法装饰器
  greet(@Param1Decorator() p1: string, @Param2Decorator() p2: string) {
    // 参数装饰器1 参数装饰器2
  }
}

// 属性装饰器
//  参数装饰器2
//  参数装饰器1
// 方法装饰器
// 类装饰器

// 装饰器 加载顺序
// => 跟类的执行顺序一样
