import React from "react";
import { useState, useEffect } from "react";

export default function Games(props) {
  let gameInfo = {
    game: {
      image: props.image,
      name: props.name,
    },
  };

  const addToFavorites = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/games/add`, {
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
      <button onClick={addToFavorites}>Add to Favorites!!</button>
    </div>
  );
}
