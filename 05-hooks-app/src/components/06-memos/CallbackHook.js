import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import '../styles.css';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const setIncrement = () => {
    //     setCounter(counter + 1);
    // }

    const setIncrement = useCallback((index) => {
        setCounter(c => c + index);
    }, [ setCounter ]);

    return (
        <div>
            <h1>Callback Hook</h1>
            <h3>Count: { counter }</h3>
            <hr/>
            <ShowIncrement increment={ setIncrement }/>
        </div>
    )
}
