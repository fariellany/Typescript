import * as React from 'react';

export interface IHeaderProps {
  name: string;
}

// 定义无状态组件  返回的是 JSX.Element 类型的元素
export const Header: React.SFC<IHeaderProps> = (props: IHeaderProps): JSX.Element => {
  const { name } = props;
  return (
    <div>
      <h5>{name}</h5>
    </div>
  );
};
