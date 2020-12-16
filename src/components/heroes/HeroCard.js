import React from 'react'
import { Link } from 'react-router-dom'

import './HeroCard.css';

export const HeroCard = ({ 
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
 }) => {
    return (

        <div className="col-12 col-sm-12 col-md-6 col-lg-3">
            <div className="card bg-dark text-white mb-3">
                <img src={ `./assets/heroes/${ id }.jpg` } className="card-img-top" alt={ superhero } />
                <div className="card-img-overlay" style={ {backgroundColor: 'rgba(52, 52, 52, 0.5)'} }>
                    <h4 className="card-title">{superhero}</h4>
                    <h6 className="card-text">{alter_ego}</h6>
                    
                    {
                        (alter_ego !== characters)
                        && <p className="card-text">{ characters }</p>
                    }
                    <p className="card-text">
                        <small>{first_appearance}</small>
                    </p>
                    <Link to={`./hero/${id}`} className="btn btn-dark">
                        Mas..
                    </Link>
                </div>
            </div>
        </div>
    )
}
