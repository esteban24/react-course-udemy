import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({
        email: 'sarini@gmail.com',
        password: '123456'
    });

    const { email, password } = formValues;
    const { loading } = useSelector( state => state.ui );

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    value={ email }
                    onChange={ handleInputChange }
                    name="email"
                    autoComplete="off"
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ handleInputChange }
                    name="password"
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={ loading }
                >
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
            </form>
        </>
    )
}
