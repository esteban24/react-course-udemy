import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');
        dispatch({ type: types.logout });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link
                className="navbar-brand"
                to="/"
            >
                Companies
            </Link>
            <div className="navbar-collapse collapse">
                <div className="navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                exact
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                exact
                                to="/dc"
                            >
                                DC
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className="nav-link"
                                exact
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <span className="nav-link navbar-text text-info">
                    { user?.name }
                </span>

                <button
                    className="btn nav-link"
                    onClick={handleLogout}
                >
                    Logout
                </button>
        </nav>
    )
}