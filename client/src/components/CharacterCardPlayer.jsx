import PropTypes from "prop-types";
import backCard from "../assets/images/HummingBird.png";

function CharacterCardPlayer({ fighter }) {
  return (
    <figure className="characterCard">
      <img
        src={fighter?.image !== undefined ? fighter.image : backCard}
        alt="Personnage"
      />
      <figcaption className="font-bold text-dabrown">
        {fighter?.name !== undefined ? fighter.name : "Wizards Coders"}
      </figcaption>
      <div className="healthBar">
        <div className="health"> </div>
      </div>
    </figure>
  );
}
CharacterCardPlayer.propTypes = {
  fighter: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCardPlayer;
