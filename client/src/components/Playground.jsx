import PropTypes from "prop-types";
import { useState } from "react";
import ButtonSpells from "./ButtonSpells";
import CharacterCard from "./CharacterCardPlayer";
import field1 from "../assets/images/laboratory.webp";

function Playground({ playerChoose, computerPlayer }) {
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
                  <p className="btn-third">Protego</p>
                  <CharacterCard fighter={playerChoose} />
                </div>
                <div className="player">
                  {show ? (
                    <CharacterCard />
                  ) : (
                    <CharacterCard fighter={computerPlayer} />
                  )}
                  <p className="btn-third">Protego</p>
                </div>
                <div className="nextButton">
                  <button type="button" className="btn-primary">
                    Next
                  </button>
                </div>
              </article>
              <article className="spellsSelection">
                <ButtonSpells />
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
Playground.propTypes = {
  playerChoose: PropTypes.func.isRequired,
  computerPlayer: PropTypes.func.isRequired,
};

export default Playground;
