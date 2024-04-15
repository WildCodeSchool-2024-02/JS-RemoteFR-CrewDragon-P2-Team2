import PropTypes from "prop-types"; // ES6

function CharactersSelection({ characters }) {
  return (
    <section className="containerChooseCharacter">
      <h2>Choose your Character ...</h2>
      <article className="containerChooseCharacterCard">
        {characters.map((character, index) => (
          <>
            <input type="radio" name="slide" id={`c${index + 1}`} />

            <label htmlFor={`c${index + 1}`} className="ChooseCharacterCard">
              <span>label</span>
              <div className="ChooseCharacterCardDescription">
                <p>{character.name}</p>
                <p>{character.house}</p>
              </div>
            </label>
          </>
        ))}
      </article>
    </section>
  );
}

CharactersSelection.propTypes = {
  characters: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default CharactersSelection;
