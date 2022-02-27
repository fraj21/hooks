import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { useState }from 'react';
import { moviesData } from './Data';
import MovieList from './Components/MovieList';
import AddNMovie from './Components/AddNMovie';
import FilterByRate from './Components/FilterByRate';
import {Routes,Route} from 'react-router-dom'  
import TrailerPage from './Components/TrailerPage';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(1);
  const addNewMovies=(x)=>{
    return setMovies([...movies,x])
  }
  return (
    <div className="App">
     
      <NavBar search={search} setSearch={setSearch} /> 
      <FilterByRate isRating={false} rate={rate} setRate={setRate} />
      <h1 id='title'> Movie App </h1>
      <Routes>
        <Route path='/' element={<> <AddNMovie addNewMovie={addNewMovies} /> <MovieList movies={movies} search={search} rating={rate}/></>} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/:Id' element={<TrailerPage />} />
      
      </Routes>
      
     
    </div>
  );
}

export default App;
