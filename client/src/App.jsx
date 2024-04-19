import NavBar from "./components/NavBar";
import Intro from "./components/Introduction";
import ArrowButton from "./components/Rules";
import Playground from "./components/Playground";
import Footer from "./components/Footer";
import ButtonSpells from "./components/ButtonSpells";

import ScoreBoard from "./components/ScoreBoard";

import CharactersSelection from "./components/CharactersSelection";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col items-center">
        <Intro />
        <ArrowButton />
        <CharactersSelection />
        <ButtonSpells />
        <Playground />
        <ScoreBoard />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
