import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 0) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Add TODO</h4>
            <hr/>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    name="description"
                    placeholder="Description..."
                    autoComplete="off"
                    className="form-control"
                    onChange={ handleInputChange }
                    value={ description }
                ></input>
                <button
                    className="btn btn-outline-primary form-control"
                    type="submit"
                >
                    Add
                </button>
            </form>
        </>
    )
}
