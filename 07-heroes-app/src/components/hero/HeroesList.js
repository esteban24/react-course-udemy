import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    
    return ( 
        <div className="row row-cols-4 row-cols-md-4 g-4">
            {
                heroes.map( hero => {
                    return (
                        <HeroCard key={hero.id} { ...hero } />
                    );
                })
            }
        </div>
    )
}
