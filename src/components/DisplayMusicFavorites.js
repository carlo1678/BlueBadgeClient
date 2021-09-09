import React from "react";

export default function DisplayMusicFavorites(props) {
  const deleteMusicFavorite = (music) => {
    console.log(music);
    fetch(`http://localhost:3001/music/delete/${music.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.addMusicFavorite();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <p>{props.song.name}</p>
      <img src={props.song.image} alt=""></img>
      <button onClick={() => deleteMusicFavorite(props.song)}>Delete!</button>
    </div>
  );
}
