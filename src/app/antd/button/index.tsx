
import React, { Component } from 'react'
import classNames from 'classnames';
import './index.scss'

export interface Props {
    text?: string;
    icon?: string;
    onClick?: () => void;
    type?: 'normal' | 'default' | 'danger';
    size?: 'sm' | 'xm' | 'lg';
    href?: string;
    target?: string;
    defalutCls?: string;
    loading?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

export interface State {
    loading?: boolean
}

export const isAny: any = {};

export default class button extends Component<Props, State> {

    static defaultProps = {
        defalutCls: 'keep-btn',
        loading: false,
        type: 'default',
        size: 'xm'
    }
    constructor(props: Props) {
        super(props);
    }

    render() {
        const {
            defalutCls, className, size, type, onClick, text
        } = this.props;

        const classes = classNames(className, {
            [`${defalutCls}`]: defalutCls,
            [`${defalutCls}-${size}`]: size,
            [`${defalutCls}-${type}`]: type,
            '': isAny
        })
        return (
            <button className={classes} type='button' onClick={onClick}>{text}</button>
        )
    }
}


// https://www.cnblogs.com/V587Chinese/p/11520674.html
