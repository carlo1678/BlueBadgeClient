import React from "react";
import { useState, useEffect } from "react";
import Movies from "./Movies";

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [userInput, setUserInput] = useState("");

  const getMovies = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?&apikey=86a33ed3&s=${userInput}`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const json = await response.json();

    setMovies(json.Search);
  };

  const changeInput = (event) => {
    setUserInput(event.target.value);
  };

  const resetForm = (e) => {
    setMovies([]);
  };

  return (
    <div className="search">
      <h3 className="searchHeading">Search for your Movie of choice!</h3>
      <input
        className="initialSearch"
        placeholder="Movie Name"
        type="text"
        value={userInput}
        onChange={changeInput}
      ></input>
      <button onClick={() => getMovies()}>Search!</button>
      <button onClick={resetForm}>Clear!</button>
      <div className="movieCards">
        {movies.map((movie) => (
          <Movies Title={movie.Title} Poster={movie.Poster} />
        ))}
      </div>
    </div>
  );
}
