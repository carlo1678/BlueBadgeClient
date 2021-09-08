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
    const accessToken = localStorage.getItem('SessionToken');
    e.preventDefault();
    fetch(`http://localhost:3001/games/add`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }),
      body: JSON.stringify(gameInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Successfully added to favorites!');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <p className="title">{props.name}</p>
      <p className="image">{props.image}</p>
      <button onClick={addToFavorites}>Add to Favorites!!</button>
    </div>
  );


// const apiUrl =
//   "https://api.rawg.io/api/games?key=a72ffc12a8ee4b4794a587d33e30142d";

// const getGames = async () => {
//   const response = await fetch(apiUrl);
//   const json = await response.json();
//   json.results.forEach((game) => {
//     console.log(game.name);
//     console.log(game.background_image);
//   });
// };

// getGames();
// return <div></div>;

