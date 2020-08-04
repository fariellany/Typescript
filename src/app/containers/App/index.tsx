import React from 'react';
import style from './style.css';
import { RouteComponentProps } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useTodoActions } from 'app/actions';
import { RootState } from 'app/reducers';
import { TodoModel } from 'app/models';
import { Header, TodoList, Footer } from 'app/components';

const FILTER_VALUES = (Object.keys(TodoModel.Filter) as (keyof typeof TodoModel.Filter)[]).map(
    (key) => TodoModel.Filter[key]
);

const FILTER_FUNCTIONS: Record<TodoModel.Filter, (todo: TodoModel) => boolean> = {
    [TodoModel.Filter.SHOW_ALL]: () => true,
    [TodoModel.Filter.SHOW_ACTIVE]: (todo) => !todo.completed,
    [TodoModel.Filter.SHOW_COMPLETED]: (todo) => todo.completed
};

//  需要 Props 继承上 React-Router RouteComponentProps 才能使用 location push等

export namespace App {
    export interface Props extends RouteComponentProps<void> { }
}

// react-redux 7.1 版本

// useSelector: 从redux的store对象中提取数据(state)  纯函数
// useDispatch: 返回Redux store中对dispatch函数的引用

export const App = ({ history, location }: App.Props) => {
    const dispatch = useDispatch();
    const todoActions = useTodoActions(dispatch);
    const { todos, filter } = useSelector((state: RootState) => {
        const hash = location?.hash?.replace('#', '');
        return {
            todos: state.todos,
            filter: FILTER_VALUES.find((value) => value === hash) ?? TodoModel.Filter.SHOW_ALL
        };
    });

    const handleClearCompleted = React.useCallback((): void => {
        todoActions.clearCompleted();
    }, [todoActions]);

    const handleFilterChange = React.useCallback(
        (filter: TodoModel.Filter): void => {
            history.push(`#${filter}`);
        },
        [history]
    );

    const filteredTodos = React.useMemo(() => (filter ? todos.filter(FILTER_FUNCTIONS[filter]) : todos), [todos, filter]);
    const activeCount = React.useMemo(() => todos.filter((todo) => !todo.completed).length, [todos]);
    const completedCount = React.useMemo(() => todos.filter((todo) => todo.completed).length, [todos]);

    return (
        <div className={style.normal}>
            <Header addTodo={todoActions.addTodo} />
            <TodoList todos={filteredTodos} actions={todoActions} />
            <Footer
                filter={filter}
                activeCount={activeCount}
                completedCount={completedCount}
                onClickClearCompleted={handleClearCompleted}
                onClickFilter={handleFilterChange}
            />
            {/* <Demo time="初始化props类型" /> */}
        </div>
    );
};
