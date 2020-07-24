
import React from 'react';

export interface Props {

}

export interface State {

}

export default class extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { data: [] };
    }

    name(): void {
        console.log('方法的执行 无返回值')
    }

    // 定义函数
    setFunction() {

        // never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
        function error1(message: string): never {
            throw new Error(message);
        }
        // error1('1')

        //返回never的函数必须存在无法达到的终点
        function infiniteLoop(): never {
            while (true) {
            }
        }
        // infiniteLoop()

        // 规定传入的参数 和返回的参数的类型
        function search(name: string): string { // 后面的string 定义 返回类型
            return `找到了${name}的东西`; // 只能返回 string 类型
        }
        let name: string = '张三';
        console.log(search(name));//找到了漂亮的东西

        // 可选参数
        function search1(age: number = 18, fun?: string): string {
            return `找到了朋友,${age}岁,长得像${fun ? fun : '凤姐'}`;
        }

        // 设置默认参数
        function search2(age: number = 18, fun = '凤姐'): string {
            return `找到了朋友,${age}岁,长得像${fun ? fun : '凤姐'}`;
        }

        console.log(search1(18));//找到了朋友,18岁,长得像凤姐
        console.log(search1(18, '刘亦菲'));//找到了朋友,18岁,长得像刘亦菲
        console.log(search2(18)); //找到了朋友,18岁,长得像凤姐

        // 设置 any[] 获取所有参数
        function push(array: any[], ...items: any[]) { //...items表示后面接收到的所有参数 设置为 数组类型
            items.forEach(item => {
                array.push(item)
            })
        }
        let arr: Array<any> = [];
        push(arr, 1, 2, 3, 4, 5, undefined, '5', true)
        console.log(arr) //[ 1, 2, 3, 4, 5, undefined, '5', true ]

    }

    //函数 重载
    setheavyLoad() {

        function reverse1(x: number | string): number | string { // 联合声明 返回的number 或者  string
            if (typeof x === 'number') {
                return Number(x.toString().split('').reverse().join())
            } else {
                return x.toString().split('').reverse().join()
            }
        }
        //但如果我们想在声明时就明确入参number对应返回number，入参string对应返回string

        // 函数的重载
        function reverse(x: number): number;
        function reverse(x: string): string; //提前声明两个同名函数，确定入参和返回值。
        function reverse(x: number | string): number | string {
            if (typeof x === 'number') {
                return Number(x.toString().split('').reverse().join())
            } else {
                return x.toString().split('').reverse().join()
            }
        }
    }

    // 基本类型 赋值
    setObject() {

        //any  任意类型
        let any1: any
        any1 = 1;
        any1 = ['张三']
        console.log(any1) // ["张三"]

        // Tuple 元组 两种声明 
        let x: [string, number]; // 设置参数 
        let a: (number | string)[] // 混合传参
        x = ['hello', 10]; // OK
        a = ['张三']
        console.log({ x }) // ["hello", 10]
        console.log({ a })// ["张三"]

        // 声明 数组 两个方式
        let arr: number[] = [1, 2]
        let arr1: Array<number> = [1, 2]
        let arr2: Array<boolean> = new Array(false, true);
        console.log(arr, arr1, arr2) // [1, 2]

        // enum 枚举
        enum Color { Red = 2, Green, Blue = 'bule' } //不设置参数就是获取下标 
        let c: Color = Color.Green;
        console.log({ c }) // {c: 3}
        console.log(Color.Blue) // 'bule'

        // void 使用 赋值 u'nd
        let unusable: void = undefined
        let unusable1: undefined = undefined
        let unusable2: null = null
        let unusable3: any = undefined
        console.log(unusable, unusable1, unusable2, unusable3) // 'undefined'
    }

    // 设置泛式定义
    setPantype() {

        //定义函数
        let mySum = function (x: number | string, y: number | string): number {
            x = Number(x);
            y = Number(y);
            return x + y
        }
        console.log(mySum(1, 2), mySum('1', '2')) //3 

        // 设置泛式  => number 为返回的类型是number类型
        let mySum1: (x: number | string, y: number | string) => number = function (x, y) {
            x = Number(x);
            y = Number(y);
            return x + y
        }
        console.log('泛型的赋值', mySum1(1, 2)) //3 

        // 定义接口 设置泛型类型
        interface setPlan {
            (x: number, y: number): number //(参数名:参数类型,参数名:参数类型):函数返回类型

            // 设置只读属性
            // readonly x: number;
            // readonly y: number;
        }

        //或者  let mySum2: setPlan
        let mySum2: setPlan = function (x, y) {
            return x + y
        }
        console.log('定义接口 设置泛型', mySum2(1, 2)) //3 
    }

    // 泛型 函数
    funPantype() {

        // 声明泛型函数
        function identity<T>(params: T): T {
            return params
        }
        let output = identity<string>("myString")
        console.log(output) // myString
    }

    componentDidMount() {
        this.name()
        this.setObject()
        this.setFunction()
        this.setPantype()
        this.funPantype()
    }

    render() {
        return (
            <div>
                demo
            </div>
        );
    }
}
