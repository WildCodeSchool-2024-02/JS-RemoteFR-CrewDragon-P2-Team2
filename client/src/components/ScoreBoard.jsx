import CharacterCardPlayer from "./CharacterCardPlayer";

function ScoreBoard() {
  const results = JSON.parse(localStorage.getItem("results"));
  return (
    <section
      className="py-4 w-80 mx-auto flex flex-col items-center"
      id="score_board"
    >
      <h2 className="title-sections">ScoreBoard</h2>
      <p>Find your last battle here</p>
      <article className="containerNeumorphism">
        {results !== null && (
          <div className="w-full flex lg:flex-row flex-col justify-around items-center gap-4 lg:justify-center">
            <CharacterCardPlayer
              fighter={results[0].player}
              health={results[0].player.health}
            />
            <p>VS</p>
            <CharacterCardPlayer
              fighter={results[0].computer}
              health={results[0].computer.health}
            />
          </div>
        )}
      </article>
    </section>
  );
}

export default ScoreBoard;
