import NavBar from "./components/NavBar";
import Intro from "./components/Introduction";
import Rules from "./components/Rules";
import CharactersSelection from "./components/CharactersSelection";
import Playground from "./components/Playground";
import ButtonSpells from "./components/ButtonSpells";
import ScoreBoard from "./components/ScoreBoard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex flex-col items-center gap-y-12 md:gap-y-16">
        <Intro />
        <Rules />
        <CharactersSelection characters={characters} />
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
