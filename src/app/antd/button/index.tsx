
import React, {
    Component,
    FC,
    ButtonHTMLAttributes, //react 内置类型
    AnchorHTMLAttributes
} from 'react'
import classNames from 'classnames';
import './index.scss'


export interface Props {
    text?: string;
    icon?: string;
    // onClick?: () => void;
    styleType?: 'normal' | 'default' | 'danger';
    size?: 'sm' | 'xm' | 'lg';
    href?: string;
    target?: string;
    defalutCls?: string;
    loading?: boolean;
    style?: React.CSSProperties;
    className?: string;
}

// button的原生属性
export type NativeButtonProps = Props & ButtonHTMLAttributes<HTMLElement>
export type AnchorButtonProps = Props & AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export interface State {
    loading?: boolean
}

export const isAny: any = {};

export default class button extends Component<ButtonProps, State> {

    static defaultProps = {
        defalutCls: 'keep-btn',
        loading: false,
        styleType: 'default',
        size: 'xm'
    }
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        const {
            defalutCls, className, size, styleType, onClick, text
        } = this.props;

        const classes = classNames(className, {
            [`${defalutCls}`]: defalutCls,
            [`${defalutCls}-${size}`]: size,
            [`${defalutCls}-${styleType}`]: styleType,
            '': isAny
        })
        return (
            <button className={classes} type='button' onClick={onClick}>{text}</button>
        )
    }
}

// https://www.cnblogs.com/V587Chinese/p/11520674.html
