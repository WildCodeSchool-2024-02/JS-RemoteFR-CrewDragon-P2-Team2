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
      damage: 50,
      isUsed: false,
      isUsedComputer: false,
    },
    {
      id: 3,
      name: "Stupéfix",
      damage: 25,
      isUsed: false,
      isUsedComputer: false,
    },
    {
      id: 4,
      name: "Slugulus Eructo",
      damage: 10,
      isUsed: false,
      isUsedComputer: false,
    },
  ];
  const [spells, setSpells] = useState(defaultSpells); // Par défaut les sorts disponibles les suivants
  const [disableSpell, setDisableSpell] = useState(false); // Par défaut les sorts sont ne sont pas disabled
  const [showSpell, setShowSpell] = useState(false); // N'affiche pas les sorts jetés et le button next par défaut
  const [displaySpell, setDisplaySpell] = useState(""); // Affiche le sort du user
  const [displayRandomSpell, setDisplayRandomSpell] = useState(""); // Affiche le sort du computer
  const [healthComputer, setHealthComputer] = useState(100); // Par défaut santé du computer
  const [healthPlayer, setHealthPlayer] = useState(100); // Par défaut santé du joueur
  const [winner, setWinner] = useState(); // Stocker le gagnant du combat

  const handleSpell = (selectedSpell) => {
    // Au clic du selectedSpell
    setDisableSpell(!disableSpell); // Les sorts sont disabled
    setShowSpell(!showSpell); // Affiche les sorts jetés et le button next round

    const updateSpells = spells.map((spell) =>
      spell.name === selectedSpell ? { ...spell, isUsed: true } : spell
    ); // Dans un nouveau tableau : MAJ du selectedSpell parmi defaultSpells

    const spellsFilter = updateSpells.filter(
      (spell) => spell.isUsedComputer === false
    ); // Dans un nouveau tableau : filtre du tableau pour récupérer les sorts non utilisés par le computer

    const randomSpell =
      spellsFilter[Math.floor(Math.random() * spellsFilter.length)]; // Selection au hasard d'un sort parmi les disponibles
    randomSpell.isUsedComputer = true; // Le sort selectionné au hasard ne devient plus utilisable pour la suite

    const indexSpellPlayer = defaultSpells.findIndex(
      (spell) => selectedSpell === spell.name
    ); // Obtenir l'index du sort jeté pour récuperer le .damage

    if (selectedSpell !== "Protego") {
      if (randomSpell.name !== "Protego") {
        setHealthComputer(
          healthComputer - defaultSpells[indexSpellPlayer].damage
        );
      } else {
        setHealthComputer(healthComputer - 0);
        setHealthPlayer(
          healthPlayer - defaultSpells[indexSpellPlayer].damage / 5
        );
      }
    }

    if (randomSpell.name !== "Protego") {
      if (selectedSpell !== "Protego") {
        setHealthPlayer(healthPlayer - randomSpell.damage);
      } else {
        setHealthPlayer(healthPlayer - 0);
        setHealthComputer(healthComputer - randomSpell.damage / 5);
      }
    } // Inflige des dégats à l'adversaire, SI Protego alors, on renvoit 25% des dégats du lanceur

    setSpells(updateSpells); // MAJ de notre tableau pour y ajouter le sort consommé par le computer
    setDisplayRandomSpell(randomSpell.name);
    setDisplaySpell(selectedSpell);
  };

  const [showModal, setShowModal] = useState(true); // Switch pour trigger la modal
  const [round, setRound] = useState(1); // Count des rounds
  const [gameOver, setGameOver] = useState(false); // State pour conditionner l'affichage du message de victoire/defaite
  const handleModal = () => {
    // Au clic du bouton de la modal
    setShowModal(!showModal); // La modale disparait
  };

  const handleNextRound = () => {
    // Au clic du bouton next Round
    setDisableSpell(!disableSpell); // Les autres sorts ne sont plus disabled
    setShowSpell(!showSpell); // Cache les sorts jetés et le button next round
    if (round < 3) {
      setRound(round + 1); // passe au round suivant
    } else {
      setRound(1); // Reset le round à 1
      setGameOver(true); // Conditionne l'affichage du résultat de la modal
      setShowModal(!showModal); // La modal apparait
      setSpells(defaultSpells); // Les sorts par défauts sont rechargés
      setHealthComputer(100); // Les santés par défaut sont rechargées
      setHealthPlayer(100);

      if (healthComputer < healthPlayer) {
        setWinner(`The Winner is ${playerChoose.name}`);
      } else if (healthComputer > healthPlayer) {
        setWinner(`The Winner is ${computerPlayer.name}`);
      } else {
        setWinner("There is no winner");
      }
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
                  <CharacterCard fighter={playerChoose} health={healthPlayer} />
                </div>
                <div className="player">
                  {showModal ? (
                    <CharacterCard health={healthComputer} />
                  ) : (
                    <CharacterCard
                      fighter={computerPlayer}
                      health={healthComputer}
                    />
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
                    {round === 3 ? "Results" : "Next"}
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
                  {gameOver ? winner : "Here’s your battle ground !"}
                </h3>
                {playerChoose === undefined ? (
                  <button
                    type="button"
                    className="btn-third"
                    onClick={handleModal}
                    disabled
                  >
                    {gameOver ? "Play Again" : "Play"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-third"
                    onClick={handleModal}
                  >
                    {gameOver ? "Play Again" : "Play"}
                  </button>
                )}
                
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
