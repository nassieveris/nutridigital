import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('open-burger');
    } else {
      document.body.classList.remove('open-burger');
    }
  }, [isOpen]);

  return (
    <header className="header">
      <div className="contenedor">
        <Logo />
        <button
          className="burger"
          aria-label="Menú"
          onClick={toggleBurger}
        >
          <span>☰</span>
          <span>X</span>
        </button>
        <Menu />
      </div>
    </header>
  )
}

export default Header;
