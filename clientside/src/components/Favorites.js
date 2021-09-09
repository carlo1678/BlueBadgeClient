import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DisplayGameFavorites from "./DisplayGameFavorites";
import DisplayMovieFavorites from "./DisplayMovieFavorites";
import DisplayMusicFavorites from "./DisplayMusicFavorites";

export default function Favorites(props) {
  const [gameFavorites, setGameFavorites] = useState([]);
  const [movieFavorites, setMovieFavorites] = useState([]);
  const [songsFavorites, setSongFavorites] = useState([]);
  useEffect(() => {
    addGameFavorite();
    addMovieFavorite();
    addMusicFavorite();
  }, []);

  const addGameFavorite = () => {
    fetch(`http://localhost:3001/games/mine`, {
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

  const deleteGameFavorite = (game) => {
    console.log(game);
    fetch(`http://localhost:3001/games/delete/${game.id}`, {
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

  const addMovieFavorite = () => {
    fetch(`http://localhost:3001/movies/mine`, {
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

  const addMusicFavorite = () => {
    fetch(`http://localhost:3001/music/mine`, {
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
      {gameFavorites.map((game) => (
        <DisplayGameFavorites
          sessionToken={props.sessionToken}
          game={game}
          addGameFavorite={addGameFavorite}
        />
      ))}
      {movieFavorites.map((movie) => (
        <DisplayMovieFavorites
          sessionToken={props.sessionToken}
          movie={movie}
          addMovieFavorite={addMovieFavorite}
        />
      ))}
      {songsFavorites.map((song) => (
        <DisplayMusicFavorites
          sessionToken={props.sessionToken}
          song={song}
          addMusicFavorite={addMusicFavorite}
        />
      ))}
      {/* <p>Click here to grab your favorite Games!</p>
      <button onClick={addGameFavorite}>Click Me!</button>
      {gameFavorites.map((game) => {
        return (
          <div>
            <p>{game.name}</p>
            <img src={game.image} alt="" />
            <button onClick={() => deleteGameFavorite(game)}>
              Click here to delete this from your favorites!
            </button>
          </div>
        );
      })}
      <p>Click here to grab your favorite Movies!</p>
      <button onClick={addMovieFavorite}>Click Me!</button>
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
      <button onClick={addMusicFavorite}>Click Me!</button>
      {songFavorites.map((song) => {
        console.log(song);
        return (
          <div>
            <p>{song.name}</p>
            <img src={song.image}></img>
          </div>
        );
      })} */}
    </div>
  );
}