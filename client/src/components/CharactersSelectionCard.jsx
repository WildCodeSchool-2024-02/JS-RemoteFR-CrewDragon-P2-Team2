import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function CharactersSelectionCard({
  characters,
  setPlayerChoose,
  setComputerPlayer,
  lockPlayerChoose,
  setResetPlayer,
}) {
  const location = useLocation();

  const handleClick = (playerChoose) => {
    setPlayerChoose({ ...playerChoose, character: playerChoose.name });
    setResetPlayer(false);
    window.location.href = `${location.pathname}#play_game`;

    const computers = characters.filter(
      (character) => character !== playerChoose
    );

    const rand = Math.floor(Math.random() * computers.length);

    setComputerPlayer({
      ...computers[rand],
      character: computers[rand].name,
    });
  };
  const houseClasses = {
    Gryffindor: "text-gryffindor",
    Slytherin: "text-slytherin",
    Hufflepuff: "text-hufflepuff",
    Ravenclaw: "text-ravenclaw",
  };
  return (
    <article className="containerNeumorphism">
      {characters.map((character, index) => (
        <>
          <input
            type="radio"
            name="slide"
            key={`input ${index + 1}`}
            id={`c${index + 1}`}
          />
          <label
            htmlFor={`c${index + 1}`}
            className="characterCardSelection"
            style={{
              background: `url(${character.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "noRepeat",
              backgroundSize: "cover",
            }}
          >
            <span>label</span>
            {lockPlayerChoose === false && (
              <div className="modalCharacterSelection">
                <p className="font-bold">{character.name}</p>
                <p className={houseClasses[character.house]}>
                  {character.house}
                </p>
                <button onClick={() => handleClick(character)} type="button">
                  Choose
                </button>
              </div>
            )}
          </label>
        </>
      ))}
    </article>
  );
}

CharactersSelectionCard.propTypes = {
  characters: PropTypes.shape({
    map: PropTypes.func,
    filter: PropTypes.func,
  }).isRequired,
  setPlayerChoose: PropTypes.string.isRequired,
  setComputerPlayer: PropTypes.func.isRequired,
  lockPlayerChoose: PropTypes.bool.isRequired,
  setResetPlayer: PropTypes.func.isRequired,
};

export default CharactersSelectionCard;
