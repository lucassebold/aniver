import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Main from "./Main";
import music1 from './musica.mp3'

function App() {

  var audio = new Audio(music1);
  audio.play();

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      <button style={{ zIndex: '10', position: 'absolute', top: '10px' }} onClick={() => window.location.reload(false)}>Música</button>
      <Main />
    </div>
  );
}

export default App;