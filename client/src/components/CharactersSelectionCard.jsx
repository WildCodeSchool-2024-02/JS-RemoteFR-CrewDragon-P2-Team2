import PropTypes from "prop-types";

function CharactersSelectionCard({ characters }) {
  return (
    <article className="containerNeumorphism">
      {characters.map((character, index) => (
        <>
          <input type="radio" name="slide" id={`c${index + 1}`} />
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
              <p>{character.house}</p>
              <button type="button">Choose</button>
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
  }).isRequired,
};

export default CharactersSelectionCard;
