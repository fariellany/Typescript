import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';

export { RootState };

export const rootReducer = combineReducers<RootState>({
    todos: todoReducer
});

//  RootState 表示
//   interface RootState {
//     todos:[{
//     id: number;
//      text: string;
//      completed: boolean;
//  }]
//     router?: any;
// }
