import React from "react";
import { useState, useEffect } from "react";

export default function Movies(props) {
  let movieInfo = {
    movie: {
      title: props.Title,
      date: props.Year,
    },
  };

  const addToFavorites = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/movies/add`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
      body: JSON.stringify(movieInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Succesfully added to favorites!");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <p className="title">{props.Title}</p>

      <img src={props.Poster} id="" alt=""></img>
      <p className="year">{props.Year}</p>
      {/* <img src={props.Poster} alt=""></img> */}
      <button onClick={addToFavorites}>Add to Favorites!</button>

    </div>
  );
}
