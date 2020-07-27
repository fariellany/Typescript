/** 全局环境定义区域 **/

// css module的配置
declare module '*.css' {
  const styles: any;
  export = styles;
}

// 定义全局的高级类型
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;


