import React, { useMemo } from 'react';
import queryString from "query-string";

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = ({ history }) => {
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ { hero }, handleInputChange ] =  useForm({ hero: q });
    const filteredHeroes = useMemo(() => getHeroesByName(q), [q])
    
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${hero}`);
    }

    return (
        <div>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Hero..."
                            name="hero"
                            value={ hero }
                            autoComplete="off"
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn mt-3 btn-block btn-outline-primary"
                        >Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        filteredHeroes.map((heroDetail) => {
                            return <HeroCard key={heroDetail.id} {...heroDetail}/>;
                        })
                    }
                </div>
            </div>
        </div>
    )
}
