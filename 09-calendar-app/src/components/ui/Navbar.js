import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Calendar App
            </span>
            <button className="btn btn-danger">
                <i className="fas fa-sign-out-alt"/>
                <span> Salir</span>
            </button>
        </div>
    )
}
