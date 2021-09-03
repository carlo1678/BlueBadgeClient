import React from "react";

fetch(`https://shazam.p.rapidapi.com/search?term=stairway&locale=en-US&offset=0`, {
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "cbba0d517dmsh6bc06cb82cd7cf1p107698jsn59966d2769a4"
  }
})
  .then(response => {
    return response.json();
  })
  .then((json) => {
    console.log(json)
  })
  .catch(err => {
    console.error(err);
  });

// displayMusic(songs) {
//   songs.forEach(element => {
//     console.log(element.tracks.hits)
//   });
// }

export default function Music() {
  return <div></div>;
}
