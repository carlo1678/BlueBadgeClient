import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIURL from "../environment";

export default function Favorites(props) {
    const [gameFavorites, setGameFavorites] = useState([]);
    const [movieFavorites, setMovieFavorites] = useState([]);
    const [songFavorites, setSongFavorites] = useState([]);

    const addGameFavorite = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/games/mine`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.sessionToken}`,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setGameFavorites(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const deleteGameFavorite = (e, game) => {
        // e.preventDefault();
        console.log(game);
        fetch(`${APIURL}/games/delete/${game.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.sessionToken}`,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                addGameFavorite();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const addMovieFavorite = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/movies/mine`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.sessionToken}`,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setMovieFavorites(data);
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const addMusicFavorite = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/music/mine`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.sessionToken}`,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setSongFavorites(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div>
            <p>Click here to grab your favorite Games!</p>
            <button onClick={addGameFavorite} className="gameFavButton">Click Me!</button>
            {gameFavorites.map((game) => {
                return (
                    <div>
                        <p>{game.name}</p>
                        <img src={game.image} alt="" className="gameFavImg" />
                        <button onClick={() => deleteGameFavorite(game)} className='deleteButton'>
                            Click here to delete this from your favorites!
                        </button>
                    </div>
                );
            })}
            <p>Click here to grab your favorite Movies!</p>
            <button onClick={addMovieFavorite} className='movieFavButton'>Click Me!</button>
            {movieFavorites.map((movie) => {
                console.log(movie);
                return (
                    <div>
                        <p>{movie.title}</p>
                        <p>{movie.date}</p>
                    </div>
                );
            })}
            <p>Click here to grab your favorite Songs!</p>
            <button onClick={addMusicFavorite} className='musicFavButton'>Click Me!</button>
            {songFavorites.map((song) => {
                console.log(song);
                return (
                    <div>
                        <p>{song.name}</p>
                        <img src={song.image} className='musicFavImg'></img>
                    </div>
                );
            })}
        </div>
    );
}
