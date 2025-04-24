import React, { useState } from 'react';

const Works = () => {
  const [play, setPlay] = useState({});
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = id => {
    const audio = document.getElementById(id);

    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      setPlay(prevState => ({
        ...prevState,
        [currentAudio.id]: false,
      }));
    }

    if (audio.paused) {
      audio.currentTime = 0;
      audio.play();
      setCurrentAudio(audio);
      setPlay(prevState => ({
        ...prevState,
        [id]: true,
      }));
    } else {
      audio.pause();
      setCurrentAudio(null);
      setPlay(prevState => ({
        ...prevState,
        [id]: false,
      }));
    }
  };

  return (
    <section id="works">
      <h2 className="titleworks">PORTFOLI</h2>
      <div className="container">
        <div>
          <button className="play-btn" onClick={() => playAudio('audio1')}>
            <i
              className={play['audio1'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">PAD ATMOSFÈRIC</span>
          <audio id="audio1" src="/Pad.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio1.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio2')}>
            <i
              className={play['audio2'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">ESTRÉS A LA CIUTAT</span>
          <audio id="audio2" src="/Ciutat.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio2.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio3')}>
            <i
              className={play['audio3'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">ENTRANT A LA FESTA</span>
          <audio id="audio3" src="/festa.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio3.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio4')}>
            <i
              className={play['audio4'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">INFORMATIUS</span>
          <audio id="audio4" src="/Informatius.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio4.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio5')}>
            <i
              className={play['audio5'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">MISTERI AL BOSC</span>
          <audio id="audio5" src="/Misteri.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio5.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio6')}>
            <i
              className={play['audio6'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">FLOTANT AL MULTIVERS</span>
          <audio id="audio6" src="/Multivers.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio6.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio7')}>
            <i
              className={play['audio7'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">ANUNCI POTENT</span>
          <audio id="audio7" src="/Potencia.mp3"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio7.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio8')}>
            <i
              className={play['audio8'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">RELAX AL SPA</span>
          <audio id="audio8" src="/Relax.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio8.vtt"
    label="English captions"
  /></audio>
        </div>

        <div>
          <button className="play-btn" onClick={() => playAudio('audio9')}>
            <i
              className={play['audio9'] ? 'fas fa-pause' : 'fas fa-play'}
            ></i>
          </button>
          <span className="title">A LA NAU ESPACIAL</span>
          <audio id="audio9" src="/Space.wav"> <track
    kind="captions"
    srcLang="en"
    src="/captions/audio9.vtt"
    label="English captions"
  /></audio>
        </div>
        {/* Afegeix més treballs aquí */}
      </div>
    </section>
  );
};

export default Works;