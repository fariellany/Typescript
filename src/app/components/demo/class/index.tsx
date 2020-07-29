import React, { Component, Fragment } from 'react';
import { Header } from './../sfc/index';

// 仅代表类型
interface Props {
    time?: string;
}

interface State {
    count: string;
}

interface Fun {
    (time: string): string;
}

let timer: any = null;

// 设置函数参数 使用 interface
const setTimes: Fun = function (x) {
    return x;
};

export class Demo extends Component<Props, State> {
    readonly state: Readonly<State> = {
        count: '11'
    };

    //   readonly state = {
    //     count: '11'
    //   };

    componentDidMount() {
        timer = setInterval((): void => {
            this.setState({
                // count: this.setTime(new Date().getTime().toString())
                count: setTimes(new Date().getTime().toString())
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(timer);
    }

    // 直接在方法内定义函数
    get setTime() {
        return (time: string): string => {
            return time;
        };
    }

    // 直接使用箭头函数
    public setTime2 = (time: string): string => {
        return time;
    };

    public render(): any {
        // 默认是 public 可以添加 也不可以不加 
        return (
            <Fragment>
                <div>{this.state.count}</div>
                <Header name="无状态参数" />
            </Fragment>
        );
    }
}
