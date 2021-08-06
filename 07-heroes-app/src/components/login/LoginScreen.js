import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const handleLogin = () => {
        // Login to last path in the app if stored in localStorage
        const lastPath = localStorage.getItem('lastPathname') || '/';

        dispatch({
            payload: {
                name: 'Esteban'
            },
            type: types.login
        });

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-primary" onClick={ handleLogin }>Login</button>
        </div>
    )
}
