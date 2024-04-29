import { useState, useEffect } from "react";
import musique from "./assets/musique/the-magic-tree-150606.mp3";
import NavBar from "./components/NavBar";
import Intro from "./components/Introduction";
import Rules from "./components/Rules";
import CharactersSelection from "./components/CharactersSelection";
import Playground from "./components/Playground";
import ScoreBoard from "./components/ScoreBoard";
import Footer from "./components/Footer";
import SoundButton from "./components/SoundButton";

function App() {
  const [isSoundOn, setIsSoundOn] = useState(true); // État pour suivre si le son est activé ou désactivé
  const [volume, setVolume] = useState(0.5);
  const [playerChoose, setPlayerChoose] = useState();
  const [computerPlayer, setComputerPlayer] = useState({});
  const [lockPlayerChoose, setLockPlayerChoose] = useState(false); // toogle to lock selection player during game
  const [resetPlayer, setResetPlayer] = useState(false); // toogle to force choose another player

  useEffect(() => {
    const audio = document.getElementById("audio");
    audio.volume = volume; // Met à jour le volume de l'audio
    if (isSoundOn) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isSoundOn, volume]);

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };
  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };
  return (
    <>
      <SoundButton
        isSoundOn={isSoundOn}
        toggleSound={toggleSound}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />
      <header>
        <NavBar />
      </header>
      <audio id="audio" autoPlay loop>
        <source src={musique} type="audio/mpeg" />
        <track kind="captions" src="" label="French captions" />
      </audio>
      <main className="flex flex-col items-center gap-y-12 md:gap-y-16">
        <Intro />
        <Rules />
        <CharactersSelection
          setPlayerChoose={setPlayerChoose}
          setComputerPlayer={setComputerPlayer}
          lockPlayerChoose={lockPlayerChoose}
          setResetPlayer={setResetPlayer}
        />
        <Playground
          setLockPlayerChoose={setLockPlayerChoose}
          setResetPlayer={setResetPlayer}
          resetPlayer={resetPlayer}
          playerChoose={playerChoose}
          computerPlayer={computerPlayer}
        />
        <ScoreBoard />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
