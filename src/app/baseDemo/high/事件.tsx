import React from 'react';

//基本的事件

// ClipboardEvent<T = Element> 剪贴板事件对象
// DragEvent<T = Element> 拖拽事件对象
// ChangeEvent<T = Element> Change 事件对象
// KeyboardEvent<T = Element> 键盘事件对象
// MouseEvent<T = Element> 鼠标事件对象  =>常用于按钮
// TouchEvent<T = Element> 触摸事件对象
// WheelEvent<T = Element> 滚轮事件对象
// AnimationEvent<T = Element> 动画事件对象
// TransitionEvent<T = Element> 过渡事件对象
// HTMLDivElement<T = Element> div点击事件 =>给div绑定点击事件

// react原生事件

// React.FormEvent<HTMLInputElement> => input 输入事件
//  React.MouseEvent => button 点击事件

interface IProps {
  onClick(event: React.MouseEvent<HTMLDivElement>): void;
}

// 无状态组件 用  React.FC 定义
const Button: React.FC<IProps> = ({ onClick, children }) => {
  return <div onClick={onClick}>{children}</div>;
};
