import React from "react";
import { useState, useEffect } from 'react';
import Music from './Music';

export default function Search() {
    const [music, setMusic] = useState([]);
    const [userInput, setUserInput] = useState('');

    const getMusic = async () => {
        const response = await fetch(
            `https://shazam.p.rapidapi.com/search?term=${userInput}&locale=en-US&offset=0`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "shazam.p.rapidapi.com",
                "x-rapidapi-key": "cbba0d517dmsh6bc06cb82cd7cf1p107698jsn59966d2769a4"
            }
        });
        const json = await response.json();

        setMusic(json.Search);
    };

    const changeInput = (event) => {
        setUserInput(event.target.value);
    };

    const resetForm = (e) => {
        setMusic([]);
    };

    return (
        <div className="search">
            <h3 className="searchHeading">Search by song Title!</h3>
            <input
                className="initialSearch"
                placeholder='Song Title'
                type='text'
                value={userInput}
                onChange={changeInput}
            ></input>
            <button onClick={() => getMusic()}>Search</button>
            <button onClick={resetForm}>Clear</button>
            <div className="songs">
                {songs.map((music) => (
                    <Music Title={music.title} />
                ))}
            </div>
        </div>
    );
}