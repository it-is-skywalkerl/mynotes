import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem'
import { useState, useEffect } from "react";

const NotesListPage = () => {
  // one extra long task is being formed due to this for loop
  for (let i = 0; i < 100000000; i++) {
    i += 1;
    i -= 1;
  }

  const [src, setSrc] = useState("");

  useEffect(() => {
    getGIF();
  }, []);

  async function getGIF() {
    console.log("entered getGIF function");
    let res = await fetch("https://tenor.googleapis.com/v2/search?q=field&key=AIzaSyDZ2xWGjSJEatVhS2-pxmmOIi7qelFZRJw&limit=1");
    let json = await res.json();
    setSrc(json.results[0].media_formats.gif.url);
  }

  return (
    <div>
        <div>
            {notes.map((note, index) => (
                <ListItem note = {note} key = {index} />
            ))}
        </div>
        <img src={src} alt="random" />
    </div>
  )
}

export default NotesListPage