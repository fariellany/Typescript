let result = [{ total: 1 }, false]
const _result = result.map((
  // 使用typeof类型保护
  // item: { total: number } | boolean) => typeof item === 'boolean' ? 0 : item.total)
  item: { total: number } | boolean) => item ? item.total : 0)
console.log(_result, '_result');

// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

const fly = () => {

}

interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // error

// as foo 与 <foo>
//  然而，当你在 JSX 中使用 <foo> 的断言语法时，这会与 JSX 的语法存在歧义：
// 为了一致性，我们建议你使用 as foo 的语
let foo: any;
let bar = <string>foo

