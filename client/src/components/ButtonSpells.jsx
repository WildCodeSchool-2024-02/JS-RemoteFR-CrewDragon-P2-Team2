import PropTypes from "prop-types";

function ButtonSpells({ spells, handleSpell, disableSpell }) {
  return (
    <>
      {spells.map((spell) => (
        <button
          className={spell.isUsed === false ? "btn-primary" : "btn-secondary"}
          key={spell.id}
          type="button"
          disabled={spell.isUsed || disableSpell}
          onClick={() => handleSpell(spell.name)}
        >
          {spell.name}
        </button>
      ))}
    </>
  );
}

ButtonSpells.propTypes = {
  // eslint-disable-next-line react/require-default-props
  handleSpell: PropTypes.func,
  // eslint-disable-next-line react/require-default-props
  disableSpell: PropTypes.bool,
  spells: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default ButtonSpells;
