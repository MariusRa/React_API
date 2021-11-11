import React, {useState} from "react";
import Output from "../output/output";
import {Form} from "react-bootstrap";

const Search =()=> {

    const [movie, setMovie] = useState(
        []
    );
    const [userInput, setUserInput] = useState();

    const titleHandler = (event)=> {
        setUserInput(event.target.value)
    }

    const searchHandler = ()=>{
        fetch(`http://www.omdbapi.com/?t=${userInput}&plot=full&apikey=e4db3ced`)
            .then(response => response.json())
            .then(data=>setMovie(data))
             }

    const movieInfo = <Output object={movie.Title} year={movie.Year} genre={movie.Genre} imdb={movie.imdbRating}
                              runtime={movie.Runtime} plot={movie.Plot} director={movie.Director} actors={movie.Actors}
                              country={movie.Country} season={movie.totalSeasons} img={movie.Poster}/>


    const show = Object.keys(movie)
    console.log(show.length)
    return (
        <Form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Film Title" onChange={titleHandler}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={searchHandler}>Search</button>
            </div>
            <div>
                { show.length > 0 ? movieInfo : ""}
            </div>
        </Form>
       )
}

export default Search;
