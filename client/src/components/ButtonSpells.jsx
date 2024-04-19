import { useState } from "react";

function ButtonSpells() {
  const [spells, setSpells] = useState([
    {
      id: 1,
      name: "Protego",
      isUsed: false,
    },
    {
      id: 2,
      name: "Confringo",
      isUsed: false,
    },
    {
      id: 3,
      name: "Stupéfix",
      isUsed: false,
    },
    {
      id: 4,
      name: "Slugulus Eructo",
      isUsed: false,
    },
  ]);
  const handleClick = (selectedSpell) => {
    // on filtre le sort selectionné
    const updateSpells = spells.map((spell) =>
      spell.name === selectedSpell ? { ...spell, isUsed: true } : spell
    );
    setSpells(updateSpells);
  };

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

export default ButtonSpells;