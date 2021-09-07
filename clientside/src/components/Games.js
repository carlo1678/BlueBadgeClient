import React from "react";

export default function Games() {
  const apiUrl =
    "https://api.rawg.io/api/games?key=a72ffc12a8ee4b4794a587d33e30142d";

  const getGames = async () => {
    const response = await fetch(apiUrl);
    const json = await response.json();
    json.results.forEach((game) => {
      console.log(game.name);
      console.log(game.background_image);
    });
  };

  getGames();
  return <div></div>;
}
