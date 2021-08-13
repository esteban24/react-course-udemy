import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui'

export const RegisterScreen = () => {
    const [ { name, email, password, confirm }, handleInputChange ] = useForm({
        name: 'Sarini',
        email: 'sarini@gmail.com',
        password: 123456,
        confirm: 123456
    });

    const dispatch = useDispatch();
    const { errorMsg } = useSelector( state => state.ui );
    console.log(errorMsg);

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            console.log('Valid form');
        }
    }

    const isFormValid = () => {
        let isValid = true;
        if ( name.trim().length === 0 ) {
            dispatch(setError('Name is required'));
            isValid = false;
        }

        if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'));
            isValid = false;
        }

        if (password !== confirm || password.length < 5) {
            dispatch(setError('Password should be 6 characters length and match each other'));
            isValid = false;
        }

        if (isValid) {
            dispatch(removeError());
        }

        return isValid;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={ handleRegister }>
                {
                    errorMsg &&
                    (
                        <div className="auth__alert-error">
                            {errorMsg}
                        </div>
                    )
                }
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ handleInputChange }
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm password"
                    name="confirm"
                    value={ confirm }
                    onChange={ handleInputChange }
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>
                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered? Login
                </Link>
            </form>
        </>
    )
}
