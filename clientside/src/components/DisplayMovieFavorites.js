import React from "react";

export default function DisplayMovieFavorites(props) {
  console.log(props.movie);
  const deleteMovieFavorite = (movie) => {
    // e.preventDefault();
    console.log(movie);
    fetch(`http://localhost:3001/movies/delete/${movie.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.addMovieFavorite();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <div>
        <p>{props.movie.title}</p>
        <p>{props.movie.date}</p>
        <button onClick={() => deleteMovieFavorite(props.movie)}>
          Click here to delete this from your favorites!
        </button>
      </div>
    </div>
  );
}
// yeah
