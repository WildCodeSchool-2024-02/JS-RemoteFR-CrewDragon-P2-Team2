import hogwartsCastle from "../assets/images/Harrypotter.png";

function Intro() {
  return (
    <section className="py-4 w-80 mx-auto flex flex-col items-center gap-4">
      <h1
        id="intro"
        className="pt-2 font-logo text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-dabrown"
      >
        Duels in Hogwarts
      </h1>
      <img
        className="w-80 h-auto rounded-[100px] my-4 md:my-6 lg:my-8 xl:my-10"
        src={hogwartsCastle}
        alt="Hogwards' castle"
      />
      <p className="font-quicksand font-light text-center text-dabrown">
        Welcome to the wizarding arena, where two wizards face off in an epic
        duel of spells and strategies. Choose your character, master your
        incatations and challenge your opponent in an unprecedented magical
        battle. Prepare to demonstrate your supremacy in this legendary clash.
      </p>
      <p className="font-quicksand font-semibold text-center text-dabrown">
        May the best wizard win !
      </p>
    </section>
  );
}

export default Intro;
