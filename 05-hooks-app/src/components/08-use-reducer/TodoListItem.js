import React from 'react'

export const TodoListItem = ({ todo, handleDelete, handleToogle }) => {
    return (
        <li
            className="list-group-item"
        >
            <p
                className={ `text-center ${ todo.done && 'completed' }` }
                onClick={ () => handleToogle(todo.id) }
            >{ todo.desc }
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete(todo.id) }
            >
                Delete
            </button>
        </li>
    )
}
