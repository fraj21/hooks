import React from 'react';
import MovieCard from './MovieCard';

function MovieList({movies, search,rating}) {
  return (<div style={{display:"flex",flexWrap:"wrap", justifyContent:"space-around"}}>
      {movies
      ?.filter((movies)=>
      movies.title.toUpperCase().includes(search.toUpperCase()) &&
      movies.rate >= rating)
      
      .map((el)=>
      (<MovieCard title={el.title} description={el.description} posterUrl={el.posterUrl} trailer={el.trailer} rate={el.rate} id={el.id}/>)
      )}
      
  </div>);
}

export default MovieList;
