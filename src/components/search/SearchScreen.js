import React from 'react'
import { heroes } from '../data/heroes'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {

    const heroesFiltered = heroes;
    const  [ formValues, handleInputChange ] = useForm ({
        searchText: '',
    }); 

    const {searchText} = formValues;


    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(searchText);
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
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

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search..
                        </button>    
                    </form>
                </div>

                <div className="col-7">
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