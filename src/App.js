import React, { Component } from "react";
import MoviesSearchBox from "./Components/MoviesSearchBox/MoviesSearchBox";
import "./App.css";
import Movie from "./Components/Movie/Movie";
//OMDB api key
const OMDBKEY = "e395b11e";

//initialState : resetState
const initialState = {
  movie: null,
  loading: null,
  error: null
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  fetchMovie = (title, year) => {
    this.setState({ ...initialState, loading: true });
    fetch(`http://www.omdbapi.com/?t=${title}&y=${year}&apikey=${OMDBKEY}`)
      .then(res => res.json())
      .then(movie => {
        console.log(movie);
        if (movie.Response === "False") {
          this.setState({ error: movie.Error });
        } else {
          this.setState({ movie });
        }
        this.setState({ loading: false });
      });
  };

  resetData = () => {
    this.setState(initialState);
  }
  render() {
    return (
      <div className="container-fluid">
        <h1 className="display-4 text-center">OMDB Movie Searching</h1>

        <div className="row">
          <div className="col-sm-10 offset-sm-1 text-center">
            <div>
              <MoviesSearchBox fetchMovie={this.fetchMovie} resetData={this.resetData} />
              {this.state.error && <div>{this.state.error}</div>}
            </div>
          </div>
        </div>

        <div className="row" >
          <div className="align-content-center">
            {this.state.movie && <Movie movie={this.state.movie} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
