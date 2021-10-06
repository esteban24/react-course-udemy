import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }

            setIsChecked(false);
        });
    }, [dispatch, setIsChecked, setIsLoggedIn]);

    // Condition to wait firebase response which define is an user us authenticated, if not, a Loading... message is displayed
    if (isChecked) {
        return <h1>Loading...</h1>;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        isAuthenticated={isLoggedIn}
                        path="/auth"
                        component={ AuthRouter }
                    />
                    <PrivateRoute
                        isAuthenticated={isLoggedIn}
                        path="/"
                        exact
                        component={ JournalScreen }
                    />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
        </Router>
    )
}
