import { useState } from "react";
import ButtonSpells from "./ButtonSpells";
import CharacterCard from "./CharacterCard";
import field1 from "../assets/images/laboratory.webp";

function Playground() {
  const defaultSpells = [
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
  ];
  const [spells, setSpells] = useState(defaultSpells);
  // On toogle les sorts desable à chaque round
  const [disableSpell, setDisableSpell] = useState(false);
  // On affiche les sorts et le button next à chaque round
  const [hide, setHide] = useState(false);
  // On affiche le sort du user et du computer
  const [style, setStyle] = useState("");
  const [displaySpell, setDisplaySpell] = useState("");
  const [displayRandomSpell, setDisplayRandomSpell] = useState("");

  const handleSpell = (selectedSpell) => {
    setDisableSpell(!disableSpell);
    setHide(!hide);
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
  const [showModal, setshowModal] = useState(true);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const handleModal = () => {
    setshowModal(!showModal);
  };

  const handleNextRound = () => {
    setDisableSpell(!disableSpell); // re-rends les sorts cliquables au round
    setHide(!hide); // Cache le button de next round
    if (round < 3) {
      setRound(round + 1); // passe au round suivant
    } else {
      setRound(1); // on reset le round à 1
      setGameOver(true); // On conditionne l'affichage du résultat de la modal
      setshowModal(!showModal); // On réaffiche la modal
      setSpells(defaultSpells); // On reset les sorts
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
                  {hide === true && (
                    <p className={`btn-third ${style}`}>{displaySpell}</p>
                  )}
                  <CharacterCard />
                </div>
                <div className="player">
                  <CharacterCard />
                  {hide && <p className="btn-third">{displayRandomSpell}</p>}
                </div>
                <div className="nextButton">
                  {hide === true && (
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={handleNextRound}
                    >
                      Next
                    </button>
                  )}
                </div>
              </article>
              <article className="spellsSelection">
                <ButtonSpells
                  spells={spells}
                  setSpells={setSpells}
                  handleSpell={handleSpell}
                  disableSpell={disableSpell}
                />
              </article>
            </section>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modalText">
                <h3 className="title-playground">
                  {gameOver ? "Game Over !" : "Here’s your battle ground !"}
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
