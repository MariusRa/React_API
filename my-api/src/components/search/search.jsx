import React, {useState} from "react";


function Search() {

    const [movie, setMovie] = useState();
    const [userInput, setUserInput] = useState()

    const titleHandler = (event)=> {
        setUserInput(event.target.value)
    }

    const searchHandler = ()=>{
        fetch(`http://www.omdbapi.com/?t=${userInput}&plot=full&apikey=e4db3ced`)
            .then(response => response.json())
            .then(data=>setMovie(data))
    }

    const listInfoMovie = movie.map((info)=> title={info.title} )

    console.log(movie)

    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Film Title" onChange={titleHandler}/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={searchHandler}>Search</button>
            </div>
            <div>
                <ul className=" list-group list-group-flush">

                </ul>
            </div>
        </div>
       )
}

export default Search;