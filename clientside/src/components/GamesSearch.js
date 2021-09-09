import React from "react";
import { useState, useEffect } from "react";
import Games from "./Games";

export default function GamesSearch(props) {
  const [games, setGames] = useState([]);
  const [userInput, setUserInput] = useState("");

  const getGames = async () => {
    const apiUrl = `https://api.rawg.io/api/games?key=a72ffc12a8ee4b4794a587d33e30142d&search=${userInput}`;
    const response = await fetch(apiUrl);
    const json = await response.json();
    console.log(json.results);
    // json.results.forEach((game) => {
    //   console.log(game);
    // });
    setGames(json.results);
  };

  const changeInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <div className="search">
        <h3 className="searchHeading">Search by Game Title!</h3>
        <input
          className="initialSearch"
          placeholder="Game Title"
          type="text"
          value={userInput}
          onChange={changeInput}
        ></input>
        <button onClick={() => getGames()} className="searchButton">Search</button>
        <div className="gameCards">
          {games.map((game) => (
            <Games
              sessionToken={props.sessionToken}
              Image={game.background_image}
              Name={game.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
