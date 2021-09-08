import React from "react";
import { useState, useEffect } from "react";
import Music from "./Music";

export default function MusicSearch() {
  const [songs, setSongs] = useState([]);
  const [userInput, setUserInput] = useState("");

  const getMusic = async () => {
    const response = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${userInput}&locale=en-US&offset=0`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "shazam.p.rapidapi.com",
          "x-rapidapi-key":
            "cbba0d517dmsh6bc06cb82cd7cf1p107698jsn59966d2769a4",
        },
      }
    );
    const json = await response.json();
    console.log(json.artists.hits);
    setSongs(
      json.artists.hits.forEach((element) => {
        console.log(element.artist.name);
        let div = document.createElement("div");
        let songPic = document.createElement("img");
        songPic.src = element.artist.avatar;
        let artistName = document.createElement("p");
        artistName.innerHTML = element.artist.name;
        let body = document.querySelector("body");
        body.append(div);
        div.appendChild(songPic);
        div.appendChild(artistName);
      })
    );
    // setSongs(json.Search);
  };

  const changeInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="search">
      <h3 className="searchHeading">Search by song Title!</h3>
      <input
        className="initialSearch"
        placeholder="Song Title"
        type="text"
        value={userInput}
        onChange={changeInput}
      ></input>
      <button onClick={() => getMusic()}>Search</button>
      {/* <div className="musicCards">
        {songs.map((song) => (
          <Music Image={song.artist.avatar} Name={song.artist.name} />
        ))}
      </div> */}
    </div>
  );
}
