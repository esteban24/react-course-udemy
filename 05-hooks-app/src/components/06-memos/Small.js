import React, { memo } from 'react'

export const Small = memo(({ value }) => {
    console.log('Already called :(')
    return (
        <small>
            { value }
        </small>
    )
})
