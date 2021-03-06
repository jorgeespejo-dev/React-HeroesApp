import React, { useMemo } from 'react'
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    //location
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const  [ formValues, handleInputChange ] = useForm ({
        searchText: q,
    }); 
    
    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);


    const handleSearch = (e) =>{
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-6 mx-auto">
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

                <div className="col-12 mx-auto">
                    <div className="row">
                        <h4> Results </h4>
                        <hr />

                        { 
                            (q==='') && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                        }

                        { 
                            (q !=='' && heroesFiltered.length === 0) && 
                            <div className="alert alert-danger">
                                There is no a hero with {q}
                            </div>
                        }

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
