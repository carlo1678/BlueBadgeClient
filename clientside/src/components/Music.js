import React from "react";
import { useState, useEffect } from "react";

export default function Music(props) {
  let songInfo = {
    music: {
      image: props.Image,
      name: props.Name,
    },
  };

  const addToFavorites = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/music/add`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
      body: JSON.stringify(songInfo),
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
      <p className="Title">{props.Name}</p>
      <img src={props.Image} className="art" alt=""></img>
      <button onClick={addToFavorites}>Add to Favorites!</button>
    </div>
  );
}
