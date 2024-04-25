import PropTypes from "prop-types";

function CharactersSelectionCard({
  characters,
  setPlayerChoose,
  setComputerPlayer,
}) {
  const handleClick = (playerChoose) => {
    setPlayerChoose({ ...playerChoose, character: playerChoose.name });

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
            <div className="modalCharacterSelection">
              <p className="font-bold">{character.name}</p>
              <p className={houseClasses[character.house]}>{character.house}</p>
              <button onClick={() => handleClick(character)} type="button">
                Choose
              </button>
            </div>
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
};

export default CharactersSelectionCard;
