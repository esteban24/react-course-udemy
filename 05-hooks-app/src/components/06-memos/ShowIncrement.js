import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('Already mounted');
    return (
        <button
            className="btn btn-outline-primary"
            onClick={ () => increment(5) }
        >
            Increment
        </button>
    )
})
