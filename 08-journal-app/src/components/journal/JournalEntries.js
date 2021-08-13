import React from 'react'
import { JournalEntry } from './JournalEntry'

export const JournalEntries = () => {
    const entries = [1, 2, 3]


    return (
        <div className="jorunal__entries">
            {
                entries.map(value => {
                    return <JournalEntry key={value}/>;
                }) 
            }
        </div>
    )
}
