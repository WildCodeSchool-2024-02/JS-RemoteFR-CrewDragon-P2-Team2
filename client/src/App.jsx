import { useState } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Introduction";
import Rules from "./components/Rules";
import CharactersSelection from "./components/CharactersSelection";
import Playground from "./components/Playground";
import ScoreBoard from "./components/ScoreBoard";
import Footer from "./components/Footer";

function App() {
  const [playerChoose, setPlayerChoose] = useState();
  const [computerPlayer, setComputerPlayer] = useState({});
  const [lockPlayerChoose, setLockPlayerChoose] = useState(false); // toogle to lock selection player during game
  const [resetPlayer, setResetPlayer] = useState(false); // toogle to force choose another player

  
  return (
    <>
      
      <header>
        <NavBar />
      </header>
     
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
