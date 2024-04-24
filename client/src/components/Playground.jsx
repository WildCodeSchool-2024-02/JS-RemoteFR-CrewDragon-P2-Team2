import { useState } from "react";
import ButtonSpells from "./ButtonSpells";
import CharacterCard from "./CharacterCard";
import field1 from "../assets/images/laboratory.webp";

function Playground() {
  const [spells, setSpells] = useState([
    {
      id: 1,
      name: "Protego",
      damage: 0,
      isUsed: false,
      isUsedComputer: false,
    },
    {
      id: 2,
      name: "Confringo",
      damage: -50,
      isUsed: false,
      isUsedComputer: false,
    },
    {
      id: 3,
      name: "Stupéfix",
      damage: -25,
      isUsed: false,
      isUsedComputer: false,
    },
    {
      id: 4,
      name: "Slugulus Eructo",
      damage: -10,
      isUsed: false,
      isUsedComputer: false,
    },
  ]);
  // On affiche le sort du user et du computer
  const [style, setStyle] = useState("");
  const [displaySpell, setDisplaySpell] = useState("");
  const [displayRandomSpell, setDisplayRandomSpell] = useState("");

  const handleClick = (selectedSpell) => {
    // on filtre le sort selectionné
    const updateSpells = spells.map((spell) =>
      spell.name === selectedSpell ? { ...spell, isUsed: true } : spell
    );

    // on crée un tableau filtré pour choisir un random de l'adversaire
    const spellsFilter = updateSpells.filter(
      (spell) => spell.isUsedComputer === false
    );
    // On trouve un sort random parmi les disponibles
    const randomSpell =
      spellsFilter[Math.floor(Math.random() * spellsFilter.length)];
    // On rends le sort selectionné au hasard, plus utilisable
    randomSpell.isUsedComputer = true;

    setDisplayRandomSpell(randomSpell.name);
    setSpells(updateSpells);
    setDisplaySpell(selectedSpell);
    setStyle("bg-dabrown");
  };

  // On affiche la modal par défaut
  const [show, setShow] = useState(true);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };

  const handleNextRound = () => {
    if (round < 3) {
      setRound(round + 1); // passe au round suivant
    } else {
      setRound(1);
      setGameOver(true);
      setShow(!show);
    }
  };

  return (
    <section className="py-4 sm:w-80 w-full mx-auto flex flex-col items-center">
      <h2 className="title-sections">... And cast your spells !</h2>
      <article className="containerPlayground">
        <div
          className="playground"
          style={{
            background: `url('${field1}')`,
            backgroundPosition: "center",
            backgroundRepeat: "noRepeat",
            backgroundSize: "cover",
          }}
        >
          <div className="playgroundBackground">
            <section className="playgroundContent">
              <h3 className="titleRound">Round {round}</h3>
              <article className="layoutPlayers">
                <div className="player">
                  {displaySpell !== "" && (
                    <p className={`btn-third ${style}`}>{displaySpell}</p>
                  )}
                  <CharacterCard />
                </div>
                <div className="player">
                  <CharacterCard />
                  {displayRandomSpell !== "" && (
                    <p className="btn-third">{displayRandomSpell}</p>
                  )}
                </div>
                <div className="nextButton">
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleNextRound}
                  >
                    Next
                  </button>
                </div>
              </article>
              <article className="spellsSelection">
                <ButtonSpells
                  spells={spells}
                  setSpells={setSpells}
                  handleClick={handleClick}
                />
              </article>
            </section>
          </div>
          {show && (
            <div className="modal">
              <div className="modalText">
                <h3 className="title-playground">
                  {gameOver ? "Game Over" : "Here’s your battle ground !"}
                </h3>
                <button
                  type="button"
                  className="btn-third"
                  onClick={handleModal}
                >
                  {gameOver ? "Play Again" : "Play"}
                </button>
              </div>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}

export default Playground;
