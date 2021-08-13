import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://pm1.narvii.com/5791/5f5f30f2557584ffd7c0f7015ea310e2976bd162_hq.jpg)'
                }}
            />
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>
                <p className="journal__entry-content">
                    Hello there! Welcome to the world of POKEMON! My name is OAK! People call me the POKEMON PROF!
                </p>
            </div>
            <div className="journal__entry-date">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
