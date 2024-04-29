function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <hr className="w-90 h-[3px] rounded bg-brown mx-auto mt-12 md:mt-14 lg:mt-20 border-none" />
      <div className="py-16 px-6 flex flex-col items-center font-quicksand font-light leading-7 text-center">
        <p>Harry Potter belongs to J.K. Rowling</p>
        <p>Names and images are the property of their authors</p>
        <p>Developers: Wizards Coders</p>
        <p>Game created in React JS</p>
        <p className="font-normal">
          <span className="font-logo">Duels in Hogwarts</span> © 2024
        </p>
        <button onClick={scrollToTop} className="myBtn pt-4" type="button">
          <img
            src="https://cdn-icons-png.freepik.com/512/44/44603.png"
            alt="Pied"
          />
        </button>
      </div>
    </>
  );
}

export default Footer;
