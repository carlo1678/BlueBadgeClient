import React from "react";

export default function DisplayGameFavorites(props) {
  const deleteGameFavorite = (game) => {
    // e.preventDefault();
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
        console.log(data);
        props.addGameFavorite();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <p>Click here to grab your favorite Games!</p>
      <button onClick={() => props.addGameFavorite}>Click Me!</button>
      <div>
        <p>{props.game.name}</p>
        <img src={props.game.image} alt="" />
        <button onClick={() => deleteGameFavorite(props.game)}>
          Click here to delete this from your favorites!
        </button>
        <button onClick={() => console.log(props.game)}>Click Me</button>
      </div>

      {/* <p>Click here to grab your favorite Movies!</p>
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
