import PropTypes from "prop-types";
import CharactersSelectionCard from "./CharactersSelectionCard";

function CharactersSelection({ characters }) {
  return (
    <section className="containerChooseCharacter">
      <h2>Choose your Character ...</h2>
      <article className="containerChooseCharacterCard">
        <CharactersSelectionCard characters={characters} />
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
