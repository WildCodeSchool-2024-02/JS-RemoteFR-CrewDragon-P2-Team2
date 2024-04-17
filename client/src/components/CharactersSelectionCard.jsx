import PropTypes from "prop-types";

function CharactersSelectionCard({ characters }) {
  return (
    <>
      {characters.map((character, index) => (
        <>
          <input type="radio" name="slide" id={`c${index + 1}`} />
          <label
            htmlFor={`c${index + 1}`}
            className="ChooseCharacterCard"
            style={{
              background: `url(${character.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "noRepeat",
              backgroundSize: "cover",
            }}
          >
            <span>label</span>
            <div className="modaleChooseCharacter">
              <p className="font-bold">{character.name}</p>
              <p>{character.house}</p>
              <button type="submit">Choose</button>
            </div>
          </label>
        </>
      ))}
    </>
  );
}

CharactersSelectionCard.propTypes = {
  characters: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default CharactersSelectionCard;
