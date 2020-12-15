import React, { useMemo, useState } from 'react'
import Pagination from "react-js-pagination";
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    
    const heroes =  useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);
    
    //statePage
    const todosPerPage = 8;
    const [ activePage, setCurrentPage ] = useState( 1 );

     // Logic for displaying current heroes Page
    const indexOfLastTodo  = activePage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentHeroes  = heroes.slice( indexOfFirstTodo, indexOfLastTodo );
  
     const handlePageChange = ( pageNumber ) => {
        setCurrentPage( pageNumber )
     };


    return (
        <div className="row animate__animated animate__fadeIn">
            {
                currentHeroes.map( hero => (
                    <HeroCard 
                        key={hero.id}
                        { ...hero }
                    />
                ))
            } 

            <Pagination
                itemClass="page-item"
                linkClass="page-link"
                activePage={ activePage }
                itemsCountPerPage={ 8 }
                totalItemsCount={ heroes.length }
                pageRangeDisplayed={ 8 }
                onChange={ handlePageChange }
            />
        </div>
        
        

        
    )
}
