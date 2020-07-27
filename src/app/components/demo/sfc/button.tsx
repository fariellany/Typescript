import { SFC } from 'react';
import { MouseEvent } from 'react';
import * as React from 'react';

// https://zhuanlan.zhihu.com/p/42141179

interface IProps {
    onClick(event: MouseEvent<HTMLDivElement>): void;
}

const Button: SFC<IProps> = ({ onClick, children }) => {
    return <div onClick={onClick}>{children}</div>;
};
export default Button;

//基本的事件

// ClipboardEvent<T = Element> 剪贴板事件对象
// DragEvent<T = Element> 拖拽事件对象
// ChangeEvent<T = Element> Change 事件对象
// KeyboardEvent<T = Element> 键盘事件对象
// MouseEvent<T = Element> 鼠标事件对象
// TouchEvent<T = Element> 触摸事件对象
// WheelEvent<T = Element> 滚轮事件对象
// AnimationEvent<T = Element> 动画事件对象
// TransitionEvent<T = Element> 过渡事件对象


// 声明 propmise 类型
interface IResponse<T> {
    message: string,
    result: T, //  number[]
    success: boolean,
}
async function getResult(): Promise<IResponse<number[]>> {
    return {
        message: '获取成功',
        result: [1, 2, 3],
        success: true,
    }
}
getResult()
    .then(result => {
        console.log(result.result)
    })

