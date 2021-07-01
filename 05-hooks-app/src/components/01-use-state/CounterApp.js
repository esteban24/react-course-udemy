import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {
    const [ state, setState] = useState({
        counterPrimary: 1,
        counterSecundary: 10,
    });

    const count = () => {
        setState({ ...state, counterPrimary: state.counterPrimary + 1 })
    }

    return (
        <>
            <h1>Counter Primary { state.counterPrimary }</h1>
            <h1>Counter Secundary { state.counterSecundary }</h1>
            <hr />
            <button onClick={ count } className="btn btn-primary"> +1 </button>
        </>
    )
}
