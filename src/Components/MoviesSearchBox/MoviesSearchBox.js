import React, { Component } from "react";
import "./MoviesSearchBox.css";

const initialState = {
  title: "",
  titleError: "",
  year: ""
};
export default class MoviesSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeInput = e => {
    if (this.state.titleError !== null) {
      this.setState({ titleError: null });
    }
    this.setState({ [e.target.name]: e.target.value });
  };

  validation = () => {
    let isError = false;

    let titleError = "";

    if (this.state.title.length === 0) {
      isError = true;
      titleError = "Title is required";
    }

    this.setState({
      ...this.state,
      titleError
    });

    return isError;
  };

  handleSubmit = e => {
    e.preventDefault();

    const error = this.validation();
    if (!error) {
      this.props.fetchMovie(this.state.title, this.state.year);
    }
  };
  handleReset = e => {
    e.preventDefault();
    this.setState(initialState)
    this.props.resetData()
  }
  render() {
    return (
      <div >
        <form
          className="form-inline justify-content-center"
          onSubmit={this.handleSubmit}
        >
            <input
              className={this.state.titleError !== "" ? "error" : ""}
              name="title"
              type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.onChangeInput}
            />
            <input
              name="year"
              placeholder="Year"
              type="number"
              value={this.state.year}
              onChange={this.onChangeInput}
            />
            <div>
            <button type="Submit">Submit</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
          </form>
        {this.state.titleError && <div class="">{this.state.titleError}</div>}
      </div>
    );
  }
}
