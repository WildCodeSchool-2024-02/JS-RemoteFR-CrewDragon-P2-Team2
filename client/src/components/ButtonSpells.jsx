import PropTypes from "prop-types";

function ButtonSpells({ spells, handleClick }) {
  return (
    <>
      {spells.map((spell) => (
        <button
          className={spell.isUsed === false ? "btn-primary" : "btn-secondary"}
          key={spell.id}
          type="button"
          disabled={spell.isUsed}
          onClick={() => handleClick(spell.name)}
        >
          {spell.name}
        </button>
      ))}
    </>
  );
}

ButtonSpells.propTypes = {
  // eslint-disable-next-line react/require-default-props
  handleClick: PropTypes.func,
  spells: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default ButtonSpells;
