import CharacterCard from "./CharacterCard";

function Playground() {

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
                  <img
                    src="https://placehold.co/200x360/EEE/31343C"
                    alt="placeholder"
                  />
                  <p className="btn-primary">Protego</p>
                </div>
                <div className="player">
                  <img
                    src="https://placehold.co/200x360/EEE/31343C"
                    alt="placeholder"
                  />
                  <p className="btn-primary">Protego</p>
                </div>
                <div className="nextButton">
                  <button type="submit" className="btn-primary">
                    Next
                  </button>
                </div>
              </article>
              <article className="spellsSelection">
                <button type="submit" className="btn-primary">
                  Protego
                </button>
                <button type="submit" className="btn-primary">
                  Confringo
                </button>
                <button type="submit" className="btn-primary">
                  Stupefix
                </button>
                <button type="submit" className="btn-secondary">
                  Slugulus Eructo
                </button>
              </article>
            </section>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Playground;
