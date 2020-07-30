import React from 'react';

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


// 定义 函数 方法
interface Props {
    count: number
}

export const Custom = ({
    text
}: Props): JSX.Element => {
    // 定义 self 函数方法
    const fun = React.useCallback((text: string): JSX.Element => {
        return (
            <div>自定义useCallback方法</div>
        );
    }, []);

    return (
        <div>自定义函数方法</div>
    );
};




