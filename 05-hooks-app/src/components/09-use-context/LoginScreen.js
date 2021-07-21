import React, { useContext } from 'react'

import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>
            <button type="submit" className="btn btn-primary" onClick={ () => setUser({ id: new Date().getTime(), name: "Lolito Fdez" }) }>Login</button>
        </div>
    )
}
