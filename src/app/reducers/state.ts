import { TodoModel } from 'app/models';

export interface RootState {
    todos: RootState.TodoState; //使用 namespace定义的 RootState 中定义的type方法
    router?: any;
}

export namespace RootState {
    export type TodoState = TodoModel[];
}

//定义数组类型是
// [{
//     id: number;
//     text: string;
//     completed: boolean;
// }]
