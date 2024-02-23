import logo from './logo.svg';
import './App.css';
import Content from './Content';
import { useState } from 'react';

function App() {
  const playSound = (note) => {
    const audio = new Audio(note);
    
    audio.addEventListener('canplay', () => {
      audio.play();
    });

    // Start loading the audio
    audio.load();
  };
  return (
    <div className="App">
        <Content
        playSound={playSound}/>
    </div>
  );
}

export default App;
