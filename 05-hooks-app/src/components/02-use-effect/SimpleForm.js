import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log("salu2");
    }, []);

    useEffect(() => {
        // console.log("formState changed");
    }, [formState]);

    useEffect(() => {
        // console.log("email changed");
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>Use Effect Form</h1>
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
            { (name === '123') && <Message /> }
        </>
    );
};
