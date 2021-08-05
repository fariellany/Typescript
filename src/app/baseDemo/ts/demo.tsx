

export type A = (() => true) extends Record<string, any> ? true : false; // => true

export type B = (() => true) extends Record<string, unknown> ? true : false; // false

//  Record<string, any>  Record<string, unknown>
type add = Record<string, any>
type add1 = Record<string, unknown>

const td: add = null
const td11: add = {}
const td111: add = undefined
const td1111: add = 1

const td2: add1 = {}
const td22: add1 = null
const td222: add1 = undefined
const td2222: add1 = 1

// 报错
// https://stackoverflow.com/questions/65799316/why-cant-an-interface-be-assigned-to-recordstring-unknown
interface Foo {
  foo: number
  // [key: string]: unknown
}
const foo: Foo = { foo: 1 }
const bar: Record<string, unknown> = foo

// type
type Foo1 = {
  foo: number
}
const foo1: Foo1 = { foo: 1 }
const bar1: Record<string, unknown> = foo1

// 使用 interface 属性的格式时 可以正常使用
interface Foo2 {
  [foo: string]: number
}
const foo2 = { foo: 1 }
const bar2: Record<string, unknown> = foo2


// Interface 和 Type 多个使用
interface A2 { x: number; }
interface B2 { y: string; }

interface C extends A2, B2 { b: boolean; }

var x: C = { b: true, x: 1, y: "" };

// Type
type TA = { x: number; };
type TB = { y: string; };

type TC = TA & TB & { b: boolean; };

var tx: TC = { b: true, x: 1, y: "" };

// unknown
// 任何东西都可以分配给 unknown，但 unknown 不能分配给任何东西，
// 但它本身和任何没有类型断言或基于控制流的缩小

let vAny: any = 10;
let vUnknown: unknown = 10;  // 不确定的类型

let s1: string = vAny;     // Any is assignable to anything
let s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)

vAny.method();     // Ok; anything goes with any
vUnknown.method(); // Not ok; we don't know anything about this variable

// ? interface
interface MyInterface {
  a: number
  b: number
}

const doesNotWork: { [key: string]: number } = {} as MyInterface

const doesWork: { [key: string]: number } = {} as { a: number, b: number }
