import React from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { heroes } from '../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = ({ history }) => {

    //location
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const heroesFiltered = heroes;
    const  [ formValues, handleInputChange ] = useForm ({
        searchText: q,
    }); 

    const {searchText} = formValues;


    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-8 col-sm-8 col-md-6 col-lg-5 mx-auto">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch} >
                        
                        <input 
                            name="searchText"
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            value={searchText}
                            autoComplete="of"
                            onChange={handleInputChange}
                        />


                        <div className="d-grid gap-2">
                            <button className="btn btn-outline-primary mt-2 mb-2" type="submit">Search..</button>
                        </div>

                        
                    </form>
                </div>

                <div className="col-8 col-sm-8 col-md-6 col-lg-7 mx-auto">
                    <div className="row">
                        <h4> Results </h4>
                        <hr />
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard 
                                    key={hero.id}
                                    { ...hero }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
