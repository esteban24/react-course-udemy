import React from 'react'
import { JournalEntries } from './JournalEntries'

import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(startLogout());
    }

    const { name } = useSelector( state => state.auth );

    const handleAddEntry = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon" />
                    <span> { name }</span>
                </h3>
                <button
                    className="btn"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>
            <div 
                className="jorunal__new-entry"
                onClick={handleAddEntry}
            >
                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />
        </aside>
    )
}
