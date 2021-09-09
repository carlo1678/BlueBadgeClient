import React from "react";
import movies from "../components/assets/movies.jpg";
import music from "../components/assets/music.jpg";
import games from "../components/assets/games.jpg";

export default function LandingPage() {
  return (
    <div>
      <h1 className="landingHello">Hello!</h1>
      <h3 className="landingWel">
        Welcome to our site! Make a simple list of your favorite movie, game, or
        song!
      </h3>
      <div className="landingPage">
        <img className="moviesPic" src={movies}></img>
        <img className="musicPic" src={music}></img>
        <img className="gamesPic" src={games}></img>
      </div>
    </div>
  );
}
