import React, { useRef } from 'react';
import './hooks.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = (e) => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input
                className="form-control"
                placeholder="Name"
                ref={ inputRef }
            ></input>
            <button
                className="btn btn-outline-primary"
                onClick={ handleClick }
            >Focus</button>
        </div>
    )
}
