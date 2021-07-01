import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form With Custom</h1>
            <hr/>
            <div className="form-group">
                <input
                    autoComplete="off"
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={ name }
                    onChange={ handleInputChange }
                ></input>
            </div>
            <div className="form-group">
                <input
                    autoComplete="off"
                    className="form-control"
                    type="email" name="email"
                    placeholder="Email"
                    value={ email }
                    onChange={ handleInputChange }
                ></input>
            </div>
            <div className="form-group">
                <input
                    autoComplete="off"
                    className="form-control"
                    type="password" name="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ handleInputChange }
                ></input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </form>
    );
};
