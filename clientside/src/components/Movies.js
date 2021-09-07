import React from "react";

export default function Movies(props) {
  return (
    <div>
      <p className="title">{props.Title}</p>
      <img src={props.Poster} alt=""></img>
    </div>
  );
}
