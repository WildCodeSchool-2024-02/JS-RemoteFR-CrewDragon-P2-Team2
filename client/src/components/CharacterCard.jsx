function CharacterCard() {
  return (
    <figure className="Card">
      <img src="https://ik.imagekit.io/hpapi/harry.jpg" alt="Personnage" />
      <figcaption> Harry Potter </figcaption>
      <div className="barreHp">
        <div className="health"> </div>
      </div>
    </figure>
  );
}

export default CharacterCard;
