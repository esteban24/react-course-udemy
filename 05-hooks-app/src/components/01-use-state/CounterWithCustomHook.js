import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter(100);
    const factor = 2;

    return (
        <>
            <h1>Counter With Hook: { state }</h1>
            <hr />
            <button onClick={ () => increment(factor) } className="btn btn-success">+ { factor }</button>
            <button onClick={ () => decrement(factor) } className="btn btn-danger">- { factor }</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
        </>
    )
}
