import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToogle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo) => {
                    return <TodoListItem key={ todo.id } todo={ todo } handleDelete={ handleDelete } handleToogle={ handleToogle }/>
                })
            }
        </ul>
    )
}
