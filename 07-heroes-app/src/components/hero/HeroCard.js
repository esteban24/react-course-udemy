import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <img src={ `./assets/heroes/${id}.jpg` } className="card-img-top" alt={ superhero } />
                <div className="card-body">
                    <h5 className="card-title">{ superhero }</h5>
                    <p className="card-text">Publisher: <strong>{ publisher }</strong></p>
                    <p className="card-text">Alter Ego: <strong>{ alter_ego }</strong></p>
                    <p className="card-text">Characters: <strong>{ characters }</strong></p>
                    <p className="card-text">
                        <small className="text-muted">First Appearance: <strong>{ first_appearance }</strong></small>
                    </p>
                    <Link className="btn btn-primary" to={ `./hero/${id}` }>Details</Link>
                </div>
            </div>
        </div>
    )
}
