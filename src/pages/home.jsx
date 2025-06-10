import { useState } from "react";
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
function Home(){

    const [searchQuery,setSearchQuery]=useState("");

    const movies = [
        {id:1,title:"John Wick",release_date:"2020"},
        {id:2,title:"man down",release_date:"2023"},
        {id:3,title:"Himano",release_date:"2024"},

    ];
    const handleSearch = (e) =>{
        alert(searchQuery)
        e.preventDefault()
    }; 

    return (
        <div className="home">
            <form onSubmit={handleSearch}>
                <input type="text" 
                placeholder="Search for movies.."
                 className="Search-input"
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movie-grid">
            {movies.map(
                (movies) => 
                 (
                <MovieCard movie={movies} key={movies.id}/>
            ))}
            </div>
        </div>
    );
}
export default Home