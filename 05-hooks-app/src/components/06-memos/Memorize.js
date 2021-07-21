import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

import '../styles.css'

export const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>
            <h2>Counter: <Small value={ counter }/></h2>
            <button className="btn btn-success" onClick={ increment }>+ 1</button>
            <button className="btn btn-outline-primary" onClick={() => { setShow(!show) }} >Toggle show ({ JSON.stringify(show) })</button>
        </div>
    )
}
