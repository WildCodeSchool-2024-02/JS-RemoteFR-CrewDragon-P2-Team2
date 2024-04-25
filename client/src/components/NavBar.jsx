import { useState } from "react";
import logo from "../assets/images/HummingBird1.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="py-4 px-6 flex justify-between items-center">
        <img
          className="h-20 lg:h-24 w-auto"
          src={logo}
          alt="Wizards Coder's logo"
        />

        <button
          className="bg-dabrown rounded-4xl shadow-crd border-4 border-beige "
          type="button"
          onClick={menuOpen}
        >
          <div className="h-16 w-16 flex flex-col justify-center items-center gap-y-2">
            <span
              className={`bg-beige h-1 w-8 rounded text-beige/0 ${
                isMenuOpen
                  ? "absolute transform transitions duration-700 ease-in_out rotate-45 -translate-y-0"
                  : "transform transitions duration-500 ease-in_out"
              }`}
            >
              -
            </span>
            <span
              className={`bg-beige h-0.5 w-6 rounded text-beige/0 ${
                isMenuOpen
                  ? "transitions duration-500 ease-in_out opacity-0"
                  : "transitions duration-500 ease-in_out"
              }`}
            >
              -
            </span>
            <span
              className={`bg-beige h-1 w-8 rounded text-beige/0 ${
                isMenuOpen
                  ? "absolute transform transitions duration-700 ease-in_out -rotate-45 translate-y-0"
                  : "transform transitions duration-500 ease-in_out"
              }`}
            >
              -
            </span>
          </div>
        </button>

        <ul
          className={
            isMenuOpen
              ? "absolute burger-menu duration-700 ease-in-out translate-x-0"
              : "fixed burger-menu duration-500 ease-in-out translate-x-full"
          }
        >
          <li className="burger-title">
            <a className="burger-link" href="#intro" onClick={menuOpen}>
              Duels in Hogwarts
            </a>
          </li>
          <li className="burger-list">
            <a className="burger-link" href="#rules" onClick={menuOpen}>
              Rules
            </a>
          </li>
          <li className="burger-list">
            <a className="burger-link" href="#chara_select" onClick={menuOpen}>
              Choose your Character
            </a>
          </li>
          <li className="burger-list">
            <a className="burger-link" href="#play_game" onClick={menuOpen}>
              Play Game
            </a>
          </li>
          <li className="burger-list">
            <a className="burger-link" href="#score_board" onClick={menuOpen}>
              ScoreBoard
            </a>
          </li>
        </ul>
      </nav>
      <hr className="w-90 h-[3px] rounded bg-brown mx-auto mb-12 md:mb-14 lg:mb-20 border-none" />
    </>
  );
}

export default NavBar;
