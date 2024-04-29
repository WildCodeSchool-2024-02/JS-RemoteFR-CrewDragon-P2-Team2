import PropTypes from "prop-types";
import backCard from "../assets/images/HummingBird.png";

function CharacterCardPlayer({ fighter, health }) {
  return (
    <figure className="characterCard">
      <img
        src={fighter?.image !== undefined ? fighter.image : backCard}
        alt="Personnage"
      />
      <figcaption className="font-bold text-dabrown leading-5">
        {fighter?.name !== undefined ? fighter.name : "Wizards Coders"} |{" "}
        {health}
      </figcaption>
      <div className="healthBar">
        <div className="health" style={{ width: `${health}%` }}>
          {" "}
        </div>
      </div>
    </figure>
  );
}
CharacterCardPlayer.propTypes = {
  health: PropTypes.number.isRequired,
  fighter: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterCardPlayer;
