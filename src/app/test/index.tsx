
const a1: {
  readonly name: string
} = {
  name: '1'
}

// a1.name = 2 // 只读


// 传入的泛型类不同 得到返回值不同
type B<T> = T extends string ? '1' : '2'

const a2: B<string> = '1'
const a3: B<number> = '2'


// decaler 和namespace
declare namespace add {
  type name = string
}

const a13: add.name = 'string'


function setSex<T>(sex: T) {
}

setSex<'男'>('女')

const add = {
  name: '1',
  age: 20
}

type a = typeof add

