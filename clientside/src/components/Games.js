import React from "react";
import { useState, useEffect } from "react";
import APIURL from "../environment";

export default function Games(props) {
  let gameInfo = {
    game: {
      image: props.Image,
      name: props.Name,
    },
  };

  const addToFavorites = (e) => {
    e.preventDefault();
    fetch(`${APIURL}/games/add`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
      body: JSON.stringify(gameInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Successfully added to favorites!");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <p className="title">{props.Name}</p>
      <img className="image" src={props.Image} alt=""></img>
      <br></br>
      <button onClick={addToFavorites} className='addToFavButton'>Add to Favorites!!</button>
    </div>
  );
}
