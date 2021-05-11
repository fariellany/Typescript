
// https://segmentfault.com/a/1190000023800536
// 类型索引 keyof 类似于 Object.keys ，用于获取一个接口中 Key 的联合类型。

interface Button {
    type: string
    text: string
}

type ButtonKeys = keyof Button
const types:ButtonKeys='type'

// 等效于
type ButtonKeys1 = "type" | "text"
