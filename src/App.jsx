import React, { useState, useRef } from 'react';
import './App.css';  // Assegura't de tenir un fitxer CSS per estilitzar la pàgina
import backgroundImage from '/background.jpg';
import emailjs from '@emailjs/browser';



const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth', 
      block: 'start', 
    });
  }
};

const Header = () => {
  return (

    <header
    style={{
      position: 'relative',
      width: '100%',
      height: '100vh', 
      backgroundImage: `linear-gradient(to bottom, rgba(30, 30, 30, 0) 77%,rgb(203, 206, 207) 81%, rgb(30, 30, 30) 90%),url(${backgroundImage})`, // Afegeix la imatge importada
      backgroundColor: 'rgba(30, 30, 30, 0.5)', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
       
      
    }}
  
     className="header">
      <nav>
      <ul id='llista'>
    <li><button onClick={() => scrollToSection('about')}>QUI SOM?</button></li>
          <li><button onClick={() => scrollToSection('services')}>SERVEIS</button></li>
          <li><button onClick={() => scrollToSection('works')}>PORTFOLI</button></li>
          <li><button onClick={() => scrollToSection('contact')}>CONTACTE</button></li>
    </ul>
    </nav>
      
      <h1>Lavibra</h1>
      <h2>Disseny sonor</h2>
      
    </header>
  )
};




const About = () => {
  return (
    
    <section id="about" className="about" >
      
      <h2>QUI SOM?</h2>
      <p>
Som un equip apassionat i creatiu format per dissenyadors sonors, músics i compositors amb una visió comuna: transformar l'espai sonor en una experiència única. Ens dediquem a crear atmosferes sonores tant per a espectacles en viu, teatre com per a produccions audiovisuals.

Amb una profunda comprensió de la relació entre so i imatge, treballem de manera col·laborativa per dissenyar paisatges sonors que generin emoció, narrativa i atmosfera. La nostra feina no només consisteix a crear música, sinó a construir una identitat sonora que sigui tan impactant com els visuals amb què es combina.

Des de la conceptualització inicial fins a la creació d'efectes sonors i composicions úniques, el nostre objectiu és aportar una dimensió sonora que millori la percepció de l'espectador, creant una immersió completa en l'experiència, ja sigui en un escenari de teatre, un espectacle en viu o una producció audiovisual.</p>
    </section>
  );
};


 




const Services = () => {
  
  const [activeItem, setActiveItem] = useState(null);

  
  const handleMouseEnter = (index) => {
    setActiveItem(index);
  };

 
  const handleMouseLeave = () => {



    
      setActiveItem(null);
    
      
   
  };

  return (
    <section
      id="services"
      className="services"
      style={{
        
  backgroundImage: `linear-gradient(to top, rgba(30, 30, 30, 0) 95%, rgb(30, 30, 30) 98%),linear-gradient(to bottom, rgba(30, 30, 30, 0) 97%, rgb(30, 30, 30) 99%),url(${backgroundImage})`, // Afegeix la imatge importada
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        
        
      }}
    >
      <h2>SERVEIS</h2>
      <ul>
        <li
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
         
        ><div className='titoll'>
          COMPOSICIÓ MUSICAL<div className='flecha'><i className="fas fa-chevron-down"></i></div></div>
          <p id='p_0'className={`service${activeItem === 0 ? ' active' : ''}`}>
  {activeItem === 0
    ? "Creem música original que acompanya i realça la narrativa de pel·lícules, sèries, anuncis o esdeveniments en directe, adaptant-nos al to i estil de cada projecte."
    : ''
  }
</p>
          
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
         
        ><div className='titoll'>
          DISSENY D'EFECTES SONORS<div className='flecha'><i className="fas fa-chevron-down"></i></div></div>
          <p className={`service${activeItem === 1 ? ' active' : ''}`}>
  {activeItem === 1
    ? "Creem i manipulem sons únics per donar vida a escenes, des d'efectes naturals fins a sons futuristes, millorant l'atmosfera de la producció."
    : ''
  }
</p>
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          
        ><div className='titoll'>
          MESCLA I MASTERITZACIÓ<div className='flecha'><i className="fas fa-chevron-down"></i></div></div>
          <p className={`service${activeItem === 2 ? ' active' : ''}`}>
  {activeItem === 2
    ? 'Ajustem i perfeccionem el so final del teu projecte, assegurant que tots els elements es sentin de manera equilibrada i professional en qualsevol format o dispositiu.'
    : ''
  }
</p>
        </li>
      </ul>
    </section>
  );
};




const Works = () => {
  
  const [play, setPlay] = useState({});
  const [currentAudio, setCurrentAudio] = useState(null);

const playAudio = (id) => {

  
    const audio = document.getElementById(id);

    
    

   
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        setPlay(prevState => ({
          ...prevState,
          [currentAudio.id]: false 
        }));
        
    }


    // Reproducir o aturar l'àudio seleccionat
    if (audio.paused) {
      audio.currentTime = 0;
        audio.play();
        setCurrentAudio(audio); 
        setPlay(prevState => ({
          ...prevState,
          [id] : true
        })); // Actualitzar la referència al nou àudio
    } else {
        audio.pause();
        setCurrentAudio(null);
        setPlay(prevState => ({
          ...prevState,
          [id] : false
        }));  // Si l'àudio estava pausat, netegem la referència
    }
};


  

return (
  
    <section id="works"  >
      <h2 className='titleworks'>PORTFOLI</h2>
      <div className="container">
        <div>
            <button className="play-btn" onClick={() => playAudio('audio1')}><i className={play['audio1'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title">PAD ATMOSFÈRIC</span>
            <audio id="audio1" src="/Pad.wav"></audio>
            <span className="category">Disseny d'efectes</span>
        </div>
        
        <div>
            <button className="play-btn" onClick={() => playAudio('audio2')}><i className={play['audio2'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title">ESTRÉS A LA CIUTAT</span>
            <audio id="audio2" src="/Ciutat.wav"></audio>
            <span className="category">Audiovisual</span>
        </div>
        
        <div>
            <button className="play-btn" id='anunci' onClick={() => playAudio('audio3')}><i className={play['audio3'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title" >ANUNCI POTENT</span>
            <audio id="audio3" src="/Potencia.mp3"></audio>
            <span className="category">Publicitat</span>
        </div>

        <div>
            <button className="play-btn" onClick={() => playAudio('audio4')}><i className={play['audio4'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title">A LA NAU ESPECIAL</span>
            <audio id="audio4" src="/Space.wav"></audio>
            <span className="category">Audiovisual o espectacle</span>
        </div>

        <div>
            <button className="play-btn" onClick={() => playAudio('audio5')}><i className={play['audio5'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title">MISTERI AL BOSC</span>
            <audio id="audio5" src="/Misteri.wav"></audio>
            <span className="category">Ambient audiovisual</span>
        </div>

         <div>
            <button className="play-btn" onClick={() => playAudio('audio6')}><i className={play['audio6'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title">LES NOTICIES DEL DIA</span>
            <audio id="audio6" src="/Informatius.wav"></audio>
            <span className="category">Podcast</span>
        </div>

        <div>
            <button className="play-btn" onClick={() => playAudio('audio7')}><i className={play['audio7'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title"> FLOTANT AL MULTIVERS</span>
            <audio id="audio7" src="/Multivers.wav"></audio>
            <span className="category">Disseny d'efectes</span>
        </div>

         <div>
            <button className="play-btn" onClick={() => playAudio('audio8')}><i className={play['audio8'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title">ENTRANT A LA FESTA</span>
            <audio id="audio8" src="/festa.wav"></audio>
            <span className="category">Audiovisual</span>
        </div>

         <div>
            <button className="play-btn" onClick={() => playAudio('audio9')}><i className={play['audio9'] ? "fas fa-pause" : "fas fa-play"} ></i> </button>
            <span className="title">RELAX AL SPA</span>
            <audio id="audio9" src="/Relax.wav"></audio>
            <span className="category">Audiovisual o espectacle</span>
        </div>
    </div>
    </section>
  );
};

// Component Contact
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hygre9a', 
        'template_q46i833', 
        form.current, 
        'yC0pUFC1hdOKFi7Lv' 
      )
      .then((result) => {
        alert('Mensaje enviado exitosamente!');
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        console.error('Error de EmailJS:', error);
        alert('Hubo un error, por favor inténtalo de nuevo.');
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>CONTACTE</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Correu electrònic:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Missatge:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        <button type="submit" value="Send">
          Envia'm un missatge
        </button>
      </form>
    </section>
  );
};


const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <Works />
      <Contact />
    </div>
  );
};

export default App;

