import { useState } from "react";

function ButtonSpells() {
  const [spells, setSpells] = useState([
    "Protego",
    "Confringo",
    "Stupéfix",
    "Slugulus Eructo",
  ]);

  const handleClick = (selectedSpell) => {
    // on filtre le sort selectionné
    const updateSpells = spells.filter((spell) => spell !== selectedSpell);
    setSpells(updateSpells);
  };

  return (
    <div className="ButtonSpellMap">
      {spells.map((spell) => (
        <button key={spell} type="button" onClick={() => handleClick(spell)}>
          {spell}
        </button>
      ))}
    </div>
  );
}

export default ButtonSpells;
