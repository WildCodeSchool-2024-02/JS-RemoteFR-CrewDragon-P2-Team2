import { useState } from "react";

function Rules() {
  return (
    <div>
      <h2>Goal of the game :</h2>
      <p>Win over your opponent using spells.</p>

      <h2>Presentation :</h2>
      <p>Choose a character and personalize their name.</p>
      <p> Click “play” to start a game.</p>

      <h2>Procedure:</h2>
      <p>
        The game takes place in 3 moves. <br />
        You can only use each spell once. <br />
        To fight your opponent, you have the choice between:
      </p>

      <p>
        <ul>
          <li>Protego: shield</li>
          <li>Conference: 50 pt</li>
          <li> Stupefix: 25 pt</li>
          <li> Slugulus Eructo: 10 pt</li>
        </ul>
      </p>

      <p>
        With each hit, you reduce your opponent's life. <br />
        The shield allows you to protect yourself from a spell.
      </p>
      <p>Well done, it’s won,</p>
      <p>if your life gauge is greater than that of your opponent.</p>

      <h2>Little bonus:</h2>
      <p>
        In the event of a tie, a wild card is offered to you to try to win by
        chance.
      </p>

      <p>Replay as many times as you want. </p>
      <p>Good luck.</p>
    </div>
  );
}
function ArrowButton() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h1>
        If you want to kwon more about the Rules
        <button type="button" onClick={toggleContent}>
          {showContent ? "▲" : "▼"}
        </button>
      </h1>
      {showContent && <Rules />}
    </div>
  );
}

export default ArrowButton;
