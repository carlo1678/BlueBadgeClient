import React from "react";
import { useState, useEffect } from "react";
import APIURL from "../environment";

export default function Movies(props) {
  let movieInfo = {
    movie: {
      title: props.Title,
      date: props.Year,
    },
  };

  const addToFavorites = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/movies/add`, {
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
      <p className="year">{props.Year}</p>
      <img className='movieImg' src={props.Poster} alt=""></img>
      <br></br>
      <button onClick={addToFavorites} className='addToFavButton'>Add to Favorites!</button>
    </div>
  );
}
