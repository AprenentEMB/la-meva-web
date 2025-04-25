import React, { useState } from 'react';
import backgroundImage from '/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleMouseEnter = index => {
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    setActiveItem(null);
  };

  return (
    <section
      id="services"
      className="services"
      
    >
      <h2>SERVEIS</h2>
      <ul>
        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="titoll"> 
            <span>DISSENY SONOR PER AUDIOVISUALS</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`flecha ${activeItem === 0 ? 'active' : ''}`}
            />
            </div>
          <p className={`service${activeItem === 0 ? ' active' : ''}`}>
            {activeItem === 0
              ? 'Creació i edició de sons per pel·lícules, curtmetratges, documentals i vídeos promocionals. Donem vida a les imatges amb sons ambientals, efectes i textures que milloren l’experiència de l’espectador.'
              : ''}
          </p>
        </li>

        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="titoll">
            <span>CREACIÓ DE PAISATGES SONORS</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`flecha ${activeItem === 0 ? 'active' : ''}`}
            />
            </div>
          <p className={`service${activeItem === 0 ? ' active' : ''}`}>
            {activeItem === 0
              ? 'Elaboració d’entorns sonors immersius per exposicions, videojocs, experiències VR/AR i instal·lacions artístiques. Utilitzem sons naturals, sintètics i processaments avançats per crear atmosferes úniques.'
              : ''}
          </p>
        </li>

        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="titoll"><span>PRODUCCIÓ DE FOLEY</span>
          <FontAwesomeIcon
              icon={faChevronDown}
              className={`flecha ${activeItem === 0 ? 'active' : ''}`}
            />
          </div>
          <p className={`service${activeItem === 0 ? ' active' : ''}`}>
            {activeItem === 0
              ? 'Gravació i edició de sons Foley (passos, objectes, roba, etc.) per complementar accions visuals amb realisme i detall. Un servei essencial per a produccions cinematogràfiques i televisives.'
              : ''}
          </p>
        </li>

        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="titoll"><span>AUDIO BRANDING</span>
          <FontAwesomeIcon
              icon={faChevronDown}
              className={`flecha ${activeItem === 0 ? 'active' : ''}`}
            />
          </div>
          <p className={`service${activeItem === 0 ? ' active' : ''}`}>
            {activeItem === 0
              ? 'Creació de logotips sonors, melodies corporatives i paquets d’àudio personalitzats per marques. L’objectiu és establir una identitat sonora reconeixible que reforci la imatge de marca.'
              : ''}
          </p>
        </li>

        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="titoll"><span>MESCLA I MASTERING</span>
          <FontAwesomeIcon
              icon={faChevronDown}
              className={`flecha ${activeItem === 0 ? 'active' : ''}`}
            />
          </div>
          <p className={`service${activeItem === 0 ? ' active' : ''}`}>
            {activeItem === 0
              ? 'Servei professional de mescla i mastering per peces musicals, podcasts, vídeos o projectes multimèdia. Ens assegurem que el teu so sigui clar, equilibrat i preparat per qualsevol plataforma.'
              : ''}
          </p>
        </li>

        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="titoll"><span>COMPOSICIÓ MUSICAL</span>
          <FontAwesomeIcon
              icon={faChevronDown}
              className={`flecha ${activeItem === 0 ? 'active' : ''}`}
            />
          </div>
          <p className={`service${activeItem === 0 ? ' active' : ''}`}>
            {activeItem === 0
              ? 'Composició de música original per projectes audiovisuals, videojocs, publicitat o espectacles en viu. Ens adaptem a l’estil i les emocions que vols transmetre.'
              : ''}
          </p>
        </li>

        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="titoll"><span>RESTAURACIÓ I NETEJA D&#39;AUDIO</span>
           <FontAwesomeIcon
              icon={faChevronDown}
              className={`flecha ${activeItem === 0 ? 'active' : ''}`}
            />
          </div>
          <p className={`service${activeItem === 0 ? ' active' : ''}`}>
            {activeItem === 0
              ? 'Millora de la qualitat sonora de gravacions antigues o defectuoses mitjançant tècniques de neteja digital, reducció de soroll i correcció de freqüències.'
              : ''}
          </p>
        </li>

       
        {/* Afegeix més serveis aquí */}
      </ul>
    </section>
  );
};

export default Services;