import { response } from "express";

import React from "react";
import { useState, useEffect } from "react";




// fetch(`https://shazam.p.rapidapi.com/search?term=${userInput}&locale=en-US&offset=0`, {
//   "method": "GET",
//   "headers": {
//     "x-rapidapi-host": "shazam.p.rapidapi.com",
//     "x-rapidapi-key": "cbba0d517dmsh6bc06cb82cd7cf1p107698jsn59966d2769a4"
//   }
// })
//   .then(response => {
//     return response.json();
//   })
//   .then((json) => {
//     console.log(json)
//   })
//   .catch(err => {
//     console.error(err);
//   });


// export default function Music(props) {
//   return <div>
//     <p className="Title">{props.Title}</p>
//   </div>;


export default function Music(props) {
  let songInfo = {
    music: {
      image: props.Image,
      name: props.Name,
    },
  };

  const addToFavorites = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/music/add`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.sessionToken}`,
      }),
      body: JSON.stringify(songInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Successfully added to favorites!");
      })
      .catch((err) => {
        console.error(err);
      });
  };


  return <div>
    <p className="Title">{props.Title}</p>
    <p className="art">{props.art}</p>
    <button onClick={addToFavorites}>Add to Favorites!</button>
  </div>;


// export default function Music() {
//   return (
//     <div>
//       <h1>Music Page!</h1>
//     </div>
//   );

// }

  return (
    <div>
      <p className="Title">{props.Name}</p>
      <img src={props.Image} className="art" alt=""></img>
      <br></br>
      <button onClick={addToFavorites} className='addToFavButton'>Add to Favorites!</button>
    </div>
  );
}


