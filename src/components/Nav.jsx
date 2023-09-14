import { menu, nike, x } from "../assets/Icons";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="sticky top-0 w-full px-6 py-1 z-10 bg-gray-50">
      <nav
        className="flex justify-between 
      items-center max-container 
      mx-32 max-lg:mx-0"
      >
        <a href="/">
          <img src={nike} alt="Logo" width={60} height={10} />
        </a>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <img src={showMenu ? x : menu} alt="menu" />
        </div>
        <ul
          className={`flex ${
            showMenu
              ? "fixed flex-col items-end p-6 gap-5 inset-y-0 right-0 text-white gradient w-64 py-6 block"
              : "justify-end items-center gap-16 flex-1 max-lg:hidden"
          } `}
        >
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="lg:hover:mb-2 
            max-lg:hover:underline underline-offset-4"
            >
              <a
                href={link.href}
                className="font-montserrat
                cursor-pointer font-bold
                "
              >
                {link.label}
              </a>
            </li>
          ))}
          {showMenu && (
            <li>
              <div
                className="cursor-pointer absolute top-6 left-6"
                onClick={toggleMenu}
              >
                <img src={x} alt="menu" />
              </div>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
