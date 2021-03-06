import React from 'react'

export const EmptyComponent = () => {
    return (
        <div className="empty_main-content animate__animated animate__fadeInRight animate__faster">
            <p>
                Select something
                <br/>
                or create an entry
            </p>

            <i className="far fa-star fa-4px mt-5"/>
        </div>
    )
}
