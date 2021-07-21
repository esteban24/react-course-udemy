import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { heavyProcess } from '../../services/heavyProcess';

import '../styles.css'

export const MemoHook = () => {
    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [ counter ]);

    return (
        <div>
            <h1>Memo Hook</h1>
            <hr/>
            <p>{ memoHeavyProcess }</p>
            <h3>Counter: <small>{ counter }</small></h3>
            <button className="btn btn-success" onClick={ increment }>+ 1</button>
            <button className="btn btn-outline-primary" onClick={() => { setShow(!show) }} >Toggle show ({ JSON.stringify(show) })</button>
        </div>
    )
}
