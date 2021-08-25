
import React from 'react';
import MovieCard from './MovieCard';


const MovieList = ({movies,search,rating})=>{

   
    return (
        <div >
            
            <div >
            
            <div className="List"  > 
            {movies
        .filter(
          (el) =>
            el.title.toLowerCase().includes(search.toLowerCase().trim()) && el.rate >= rating
        )
                .map((movie,i)=> <MovieCard key ={i} movie={movie} />)}
            </div>
            </div>
            
        </div>
    
    
    )}

export default MovieList