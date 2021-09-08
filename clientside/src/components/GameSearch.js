import React from "react";
import { useState, useEffect } from "react";
import Games from './Games';

export default function Search() {
    const [games, setGames] = useState([]);
    const [userInput, setUserInput] = useState('');

    const getGames = async () => {
        const response = await fetch(
            `https://api.rawg.io/api/games?key=a72ffc12a8ee4b4794a587d33e30142d&search=${userInput}`,
            {
                headers: { Accept: "application/json" },
            }
        );
        const json = await response.json();
        console.log(json);
        setGames(json.Search);
    };

    const changeInput = (event) => {
        setUserInput(event.target.value);
    };

    const resetForm = (e) => {
        setGames([]);
    };

    return (
        <div className="search">
            <h3 className="searchHeading">Search for your Game of choice!</h3>
            <input
                className="initialSearch"
                placeholder="Game Name"
                type='text'
                value={userInput}
                onChange={changeInput}
            ></input>
            <button onClick={() => getGames()}>Search!</button>
            <button onClick={resetForm}>Clear!</button>
            <div className='gameCards'>
                {games.map((game) => (
                    <Games Title={game.name} Poster={game.image}
                ))}
            </div>
        </div>
    );
}
