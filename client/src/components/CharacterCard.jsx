function CharacterCard() {
  return (
    <div className="CharacterCard">
      <figure className="Card">
        <img src="https://ik.imagekit.io/hpapi/harry.jpg" alt="Personnage" />
        <figcaption> Harry Potter </figcaption>
        <div className="barreHp"> </div>
      </figure>
    </div>
  );
}

export default CharacterCard;
