// * 使用函数重载
function shallowClone(ori: Object): Object;
function shallowClone(ori: any[]): any[];

function shallowClone(ori) {
  if (Array.isArray(ori)) {
    return [...ori];
  } else if (typeof ori === 'object') {
    return { ...ori };
  }
}

// 基类 "人"
interface People {
  name: string;
  age: number;
  gender: '男' | '女';
}

// 子类 "男人"
// ? Omit 忽略
interface Man extends Omit<People, 'gender'> {
  gender: '男';
}

interface User {
  id: number;
  name: string;
  age: number;
  gender: number;
  email: string;
}

// 表示忽略掉User接口中的age和email属性
type OmitUser = Omit<User, "age" | "email">;
// 等价于
type OmitUser1 = {
  id: number;
  name: string;
  gender: number;
};

