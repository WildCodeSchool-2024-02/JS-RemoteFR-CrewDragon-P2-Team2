function ScoreBoard() {
  const results = JSON.parse(localStorage.getItem("results"));

  return (
    <section
      className="py-4 w-80 mx-auto flex flex-col items-center"
      id="score_board"
    >
      <h2 className="title-sections">ScoreBoard</h2>
      <p>Find your result here !</p>
      <article className="containerNeumorphism">
        <p>
          {results[0].player.name} {results[0].score < 0 ? "Lost " : "Win "}
          again {results[0].computer.name}
        </p>
      </article>
    </section>
  );
}

export default ScoreBoard;
