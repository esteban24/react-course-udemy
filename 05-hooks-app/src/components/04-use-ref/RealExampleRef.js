import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import './hooks.css'

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            { show &&  <MultipleCustomHooks/> }
            <button className="btn btn-primary" onClick={ (e) => setShow(!show) }>Toggle Quotes</button>
        </div>
    )
}
