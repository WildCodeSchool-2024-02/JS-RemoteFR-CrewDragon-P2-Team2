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

  const [displaySpell, setDisplaySpell] = useState("toto");
  const [displayRandomSpell, setDisplayRandomSpell] = useState("tata");

  const handleClick = (selectedSpell) => {
    // on filtre le sort selectionné
    const updateSpells = spells.map((spell) =>
      spell.name === selectedSpell ? { ...spell, isUsed: true } : spell
    );

    // on choisi un random pour l'adversaire
    const spellsFilter = updateSpells.filter(
      (spell) => spell.isUsedComputer === false
    );
    const randomSpell =
      spellsFilter[Math.floor(Math.random() * spellsFilter.length)];
    randomSpell.isUsedComputer = true;

    setDisplayRandomSpell(randomSpell.name);
    setSpells(updateSpells);
    setDisplaySpell(selectedSpell);
  };

  const [show, setShow] = useState(true);
  const handleModal = () => {
    setShow(!show);
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
              <h3 className="titleRound">Round 1</h3>
              <article className="layoutPlayers">
                <div className="player">
                  <p className="btn-third">{displaySpell}</p>
                  <CharacterCard />
                </div>
                <div className="player">
                  <CharacterCard />
                  <p className="btn-third">{displayRandomSpell}</p>
                </div>
                <div className="nextButton">
                  <button type="button" className="btn-primary">
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
                  Here’s your battle ground !
                </h3>
                <button
                  type="button"
                  className="btn-third"
                  onClick={handleModal}
                >
                  Play
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
