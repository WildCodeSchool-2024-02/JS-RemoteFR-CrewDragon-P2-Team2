import { useState, useEffect } from "react";
import CharactersSelectionCard from "./CharactersSelectionCard";

function CharactersSelection() {
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
        const charactersWithImage = data.filter((character) => character.image);
        setCharactersData(charactersWithImage);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <section className="containerChooseCharacter">
      <h2>Choose your character</h2>
      {!isLoading ? (
        <CharactersSelectionCard characters={charactersData} />
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default CharactersSelection;
