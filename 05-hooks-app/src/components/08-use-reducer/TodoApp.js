import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'

import '../styles.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ]);

    const handleDelete = (id) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }

    const handleToogle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>Todo App ( { todos.length } )</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } handleDelete={ handleDelete } handleToogle={ handleToogle }/>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={ handleAddTodo }/>
                </div>
            </div>
        </div>
    )
}
