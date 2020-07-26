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
