import { useState } from "react";

function Rules() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <section
      id="rules"
      className={`py-8 w-80 border-y-2 border-brown flex flex-col ${showContent ? "transition-all duration-700 ease-in-out gap-y-8" : "transition-all duration-500 ease-in-out gap-y-0"}`}
    >
      <h2 className="title-sections flex justify-center gap-[5vw]">
        If you want to know more about the Rules
        <button type="button" onClick={toggleContent}>
          <div
            className={`bg-dabrown h-0.5 w-6 rounded flex justify-center items-center ${
              showContent
                ? "transition duration-700 ease-in_out rotate-180"
                : "transition duration-500 ease-in_out"
            }`}
          >
            <div
              className={`bg-dabrown h-6 w-0.5 rounded text-beige/0 ${
                showContent
                  ? "transitions duration-700 ease-in_out opacity-0"
                  : "transitions duration-500 ease-in_out"
              }`}
            >
              -
            </div>
          </div>
        </button>
      </h2>

      <div
        className={`grid overflow-y-hidden ${showContent ? "transition-all duration-700 ease-in-out grid-rows-[1fr] opacity-100 pt-6" : "transition-all duration-500 ease-in-out grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-y-hidden">
          <article>
            <h3 className="rules-title">Goal :</h3>
            <p className="rules-text">
              Win over your opponent using 3 of your 4 spells.
            </p>
          </article>
          <article>
            <h3 className="rules-title">Presentation :</h3>
            <p className="rules-text">
              Choose a character on the list below and click on "play" to start
              the game.
            </p>
          </article>
          <article>
            <h3 className="rules-title">Procedure :</h3>
            <p className="rules-text">
              The game takes place in 3 rounds. You can only use each spell
              once. <br />
              To fight your opponent, you have the choice between:
            </p>
            <ul className="py-2 font-quicksand text-dabrown">
              <li>Protego: 25% of with own spell to opponent</li>
              <li>Confringo: 50 pt</li>
              <li> Stupefix: 25 pt</li>
              <li> Slugulus Eructo: 10 pt</li>
            </ul>
            <p className="rules-text">
              With each hit, you reduce your opponent's life. The shield allows
              you to protect yourself from a spell. At the end of the third
              round, you win if your life gauge is greater than that of your
              opponent.
            </p>
          </article>
          <article>
            <h3 className="rules-title">Enjoy your game</h3>
            <p className="rules-text">
              Replay as many times as you want.
              <br />{" "}
              <span className="font-quicksand font-semibold text-dabrown">
                Good luck !
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Rules;
