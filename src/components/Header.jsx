import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ scrollToSection }) => {
  return (
    <header className="header">
      <nav>
        <ul id="llista">
          <li>
            <button onClick={() => scrollToSection('about')}>QUI SOM?</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')}>SERVEIS</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('works')}>PORTFOLI</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>CONTACTE</button>
          </li>
        </ul>
      </nav>
      <h1>Lavibra</h1>
      <h2>Disseny sonor</h2>
    </header>
  );
};

// Validación de las props con PropTypes
Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired, // Define que scrollToSection es una función requerida
};

export default Header;