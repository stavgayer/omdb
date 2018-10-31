import React from "react";
import "./Movie.css";
const Movie = props => {
  return (
    <div className="card mx-auto res-card" >
        {props.movie.Poster !== "N/A" && <img class="card-img-top" src={props.movie.Poster} alt="movie image"  />}
        <div class="card-body">
            <h5 class="card-title">{props.movie.Title}</h5>
            <span>{`(${props.movie.Year} , ${props.movie.Runtime} , ${props.movie.Country})`}</span>
            <p class="card-text">{props.movie.Plot}</p>
            <p className="card-text">{`IMDB Rate :${props.movie.imdbRating}/10 (${props.movie.imdbVotes} Votes) `}</p>
            <p className="card-text">{`Actors : ${props.movie.Actors}`}</p>
            <p className="card-text">{`Director : ${props.movie.Director}`}</p>
            {props.movie.Website !== "N/A" && <a href={props.movie.Website} class="btn btn-primary">Movie Site</a> }
        </div>
    </div>
  );
};

export default Movie;
