
// TODO: 命名空间

// 使用命名空间的验证器
// 1： 如果需要在命名空间外也可访问 ，需要使用  export 导出
// 2: 接口声明参数的类型，如果有类 implements (实现的化) 必须在类里面也声明
namespace Validation {
    // 接口声明格式类型
    export interface StringValidator {
        isAcceptable(s: string): boolean; // 声明函数方法
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s); // 长度还有等于5 101 不匹配
        }
    }
}

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use

// 先声明格式类型
let validators: { [s: string]: Validation.StringValidator } = {};
validators['数字匹配'] = new Validation.ZipCodeValidator();
validators['字母匹配'] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? '匹配' : '不匹配'} ${name}`);
    }
}
