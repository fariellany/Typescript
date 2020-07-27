import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
import { TodoModel } from 'app/models';

// 定义redux-actions 类型
export namespace TodoActions {
    export enum Type {
        ADD_TODO = 'ADD_TODO',
        EDIT_TODO = 'EDIT_TODO',
        DELETE_TODO = 'DELETE_TODO',
        COMPLETE_TODO = 'COMPLETE_TODO',
        COMPLETE_ALL = 'COMPLETE_ALL',
        CLEAR_COMPLETED = 'CLEAR_COMPLETED'
    }

    export const addTodo = createAction<PartialPick<TodoModel, 'text'>>(Type.ADD_TODO);
    export const editTodo = createAction<PartialPick<TodoModel, 'id'>>(Type.EDIT_TODO);
    export const deleteTodo = createAction<TodoModel['id']>(Type.DELETE_TODO);
    export const completeTodo = createAction<TodoModel['id']>(Type.COMPLETE_TODO);
    export const completeAll = createAction(Type.COMPLETE_ALL);
    export const clearCompleted = createAction(Type.CLEAR_COMPLETED);
}


export type TodoActions = Omit<typeof TodoActions, 'Type'>;
export const useTodoActions = (dispatch: Dispatch) => {
    const { Type, ...actions } = TodoActions;
    return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as TodoActions;
};


// TODO: bindActionCreators

//   {
//     addTodo : text => 
//      { 
//        type: 'ADD_TODO',
//        text
//      },
//     removeTodo : id => {
//        type: 'REMOVE_TODO',
//        id
//      }
//  }

// 转换后========>

//  {
//     addTodo : text => dispatch(addTodo('text'));
//     removeTodo : id => dispatch(removeTodo('id'));
//  }
