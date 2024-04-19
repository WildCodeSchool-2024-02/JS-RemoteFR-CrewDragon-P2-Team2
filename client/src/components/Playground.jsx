
import { useState } from "react";
import ButtonSpells from "./ButtonSpells";
import CharacterCard from "./CharacterCard";


function Playground() {
  const [show, setShow] = useState(true);
  const handleModal = () => {
    setShow(!show);
  };

  return (
    <section className="containerChooseCharacter">
      <h2>... And cast your spells !</h2>
      <article className="containerChooseCharacterCard">
        <div
          className="playground"
          style={{
            background: `url('../src/assets/images/In the livingroom.webp')`,
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
                  <CharacterCard />
                  <p className="btn-primary">Protego</p>
                </div>
                <div className="player">
                  <CharacterCard />
                  <p className="btn-primary">Protego</p>
                </div>
                <div className="nextButton">
                  <button type="submit" className="btn-primary">
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
                <h3>Here’s your battle ground !</h3>
                <button
                  type="button"
                  className="btn-primary"
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
