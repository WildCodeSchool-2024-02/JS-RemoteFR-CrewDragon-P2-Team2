import CharacterCardPlayer from "./CharacterCardPlayer";

function ScoreBoard() {
  const results =
    JSON.parse(localStorage.getItem("results")) === null
      ? [
          {
            score: 0,
            player: {
              name: "",
              image: "",
              health: 100,
            },
            computer: {
              name: "",
              image: "",
              health: 100,
            },
          },
        ]
      : JSON.parse(localStorage.getItem("results"));
  return (
    <section
      className="py-4 w-80 mx-auto flex flex-col items-center"
      id="score_board"
    >
      <h2 className="title-sections">ScoreBoard</h2>
      <p>Find your result here !</p>
      <article className="containerNeumorphism">
        {results[0].player.name !== "" && (
          <>
            <CharacterCardPlayer
              fighter={results[0].player}
              health={results[0].player.health}
            />
            <CharacterCardPlayer
              fighter={results[0].computer}
              health={results[0].computer.health}
            />
          </>
        )}
      </article>
    </section>
  );
}

export default ScoreBoard;
