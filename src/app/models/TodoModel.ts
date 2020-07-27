
// 定义函数类型
export interface TodoModel {
    id: number;
    text: string;
    completed: boolean;
}

// todos 类型
export namespace TodoModel {
    export enum Filter {
        SHOW_ALL = 'all',
        SHOW_ACTIVE = 'active',
        SHOW_COMPLETED = 'completed'
    }
}
