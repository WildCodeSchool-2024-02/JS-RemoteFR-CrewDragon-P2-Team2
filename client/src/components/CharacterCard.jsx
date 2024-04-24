function CharacterCard() {
  return (
    <figure className="characterCard relative z-10">
      <img src="https://ik.imagekit.io/hpapi/harry.jpg" alt="Personnage" />
      <figcaption className="font-bold text-dabrown"> Harry Potter </figcaption>
      <div className="healthBar">
        <div className="health"> </div>
      </div>
    </figure>
  );
}

export default CharacterCard;
