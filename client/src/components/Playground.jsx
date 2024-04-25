import PropTypes from "prop-types";
import { useState } from "react";
import ButtonSpells from "./ButtonSpells";
import CharacterCard from "./CharacterCardPlayer";
import field1 from "../assets/images/laboratory.webp";

function Playground({ playerChoose, computerPlayer }) {
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
  const [showSpell, setShowSpell] = useState(false);
  // On affiche le sort du user et du computer
  const [displaySpell, setDisplaySpell] = useState("");
  const [displayRandomSpell, setDisplayRandomSpell] = useState("");

  const handleSpell = (selectedSpell) => {
    setDisableSpell(!disableSpell);
    setShowSpell(!showSpell);
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
  };

  // On affiche la modal par défaut
  const [showModal, setShowModal] = useState(true);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleNextRound = () => {
    setDisableSpell(!disableSpell); // re-rends les sorts cliquables au round
    setShowSpell(!showSpell); // Cache le button de next round
    if (round < 3) {
      setRound(round + 1); // passe au round suivant
    } else {
      setRound(1); // on reset le round à 1
      setGameOver(true); // On conditionne l'affichage du résultat de la modal
      setShowModal(!showModal); // On réaffiche la modal
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
              <p
                className={`btn-third absolute max-[991px]:left-[10%] top-[52%] min-[992px]:top-[35%] z-0 ${showSpell ? "transform transitions-all duration-700 ease-in_out max-[991px]:translate-y-full opacity-100" : "transform transitions-all duration-500 ease-in_out min-[992px]:-translate-x-full opacity-0"}`}
              >
                {displaySpell}
              </p>
              <p
                className={`btn-third absolute max-[991px]:left-[55%] max-[991px]:top-[52%] z-0 ${showSpell ? "transform transitions-all duration-700 ease-in_out max-[991px]:translate-y-full opacity-100" : "transform transitions-all duration-500 ease-in_out min-[992px]:translate-x-full opacity-0"}`}
              >
                {displayRandomSpell}
              </p>
              <h3 className="titleRound">Round {round}</h3>
              <article className="layoutPlayers">
                <div className="player">
                  <CharacterCard fighter={playerChoose} />
                </div>
                <div className="player">
                  {showModal ? (
                    <CharacterCard />
                  ) : (
                    <CharacterCard fighter={computerPlayer} />
                  )}
                </div>
                <div className="nextButton">
                  <button
                    type="button"
                    className={
                      showSpell
                        ? "btn-primary"
                        : "bg-grey font-quicksand rounded-4xl px-4 py-4 shadow-btnshadow"
                    }
                    disabled={!showSpell}
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
                  handleSpell={handleSpell}
                  disableSpell={disableSpell}
                />
              </article>
            </section>
          </div>
          {showModal && (
            <div className="modal z-20">
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
Playground.propTypes = {
  playerChoose: PropTypes.func.isRequired,
  computerPlayer: PropTypes.func.isRequired,
};

export default Playground;
