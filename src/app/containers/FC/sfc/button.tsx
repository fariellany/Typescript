import * as React from 'react';

// https://zhuanlan.zhihu.com/p/42141179

interface IProps {
    onClick(event: React.MouseEvent<HTMLDivElement>): void;
}

//无状态组件 用  React.SFC 定义

//好处:避免我们重复定义 children、 propTypes、 contextTypes、 defaultProps、displayName 

const Button: React.SFC<IProps> = ({ onClick, children }) => {
    return <div onClick={onClick}>{children}</div>;
};

// SFC 源码
/**
 * type SFC<P = {}> = StatelessComponent<P>;
  interface StatelessComponent<P = {}> {
    (props: P & { children?: ReactNode }, context?: any): ReactElement<any> | null;
    propTypes?: ValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}
 */

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
        console.log(result.result) // [1,2,3]
    })


// 在FC 里面写hooks   
export interface UserProps {
    name?: string;
}

// 定义事件类型
export interface EventType {
    input: React.FormEvent<HTMLInputElement>
    onclick: React.MouseEvent
}

const User: React.FC<UserProps> = () => {
    let [count, setCount] = React.useState(0);

    function clickHandle(e: EventType['onclick']) {
        ++count
        setCount(count++);
    };

    function inputHandle(e: React.FormEvent<HTMLInputElement>) {
        console.log('e: ', e);
        // e.persist(); // 将该事件从池中删除合成事件，可以正常使用
        console.log(e.currentTarget.value); // 此时编译器报错，认为没有value属性，需要指定<HTMLInputElement>泛型类型
        // console.log(e.target.value); // 报错
        // e.currentTarget 指向的是给绑定事件监听的那个对象 (事件代理)
    };

    return (
        <React.Fragment>
            <p>点击了{count}次</p>
            <button onClick={clickHandle}>HelloClass</button>
            <input onChange={inputHandle} />
        </React.Fragment>
    )
};

export default User