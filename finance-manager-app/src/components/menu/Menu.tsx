import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOptionClick = () => {
    setMenuOpen(false); // Fechar o menu ao selecionar uma opção
  };

  return (
    <div>
      <FiMenu onClick={toggleMenu} />
      {menuOpen && (
        <div>
          <p onClick={handleOptionClick}>Saldo Atual</p>
          <p onClick={handleOptionClick}>Entradas de hoje</p>
          <p onClick={handleOptionClick}>Saidas de hoje</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
