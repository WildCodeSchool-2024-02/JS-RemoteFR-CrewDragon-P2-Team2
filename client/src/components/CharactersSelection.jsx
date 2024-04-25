import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import CharactersSelectionCard from "./CharactersSelectionCard";

function CharactersSelection({
  setPlayerChoose,
  setComputerPlayer,
  lockPlayerChoose,
  setResetPlayer,
}) {
  const [charactersData, setCharactersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        const charactersWithImage = data
          .filter((character) => character.image)
          .slice(0, 20);
        setCharactersData(charactersWithImage);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <section className="py-4 w-80 mx-auto flex flex-col items-center">
      <h2 className="title-sections">Choose your character</h2>
      {!isLoading ? (
        <CharactersSelectionCard
          characters={charactersData}
          setPlayerChoose={setPlayerChoose}
          setComputerPlayer={setComputerPlayer}
          lockPlayerChoose={lockPlayerChoose}
          setResetPlayer={setResetPlayer}
        />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
CharactersSelection.propTypes = {
  setPlayerChoose: PropTypes.func.isRequired,
  setComputerPlayer: PropTypes.func.isRequired,
  lockPlayerChoose: PropTypes.bool.isRequired,
  setResetPlayer: PropTypes.func.isRequired,
};

export default CharactersSelection;
