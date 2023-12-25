import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from './nav';
import Header from './header';
import Footer from './footer';
import card_1 from '../Images/memory_game_images/card_1.PNG';
import card_2 from '../Images/memory_game_images/card_2.PNG';
import card_3 from '../Images/memory_game_images/card_3.PNG';
import card_4 from '../Images/memory_game_images/card_4.PNG';
import card_5 from '../Images/memory_game_images/card_5.PNG';
import card_6 from '../Images/memory_game_images/card_6.PNG';
import card_8 from '../Images/memory_game_images/card_8.PNG';

const Memorygame = () => {
  const [cards] = useState([
    { id: 1, src: card_1 },
    { id: 2, src: card_2 },
    { id: 3, src: card_3 },
    { id: 4, src: card_4 },
    { id: 5, src: card_5 },
    { id: 6, src: card_6 },
    { id: 7, src: card_1 },
    { id: 8, src: card_2 },
    { id: 9, src: card_3 },
    { id: 10, src: card_4 },
    { id: 11, src: card_5 },
    { id: 12, src: card_6 }
  ]);

  const [shuffledCards, setShuffledCards] = useState(cards);
  const [minute, setMinute] = useState(2);
  const [second, setSecond] = useState(0);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const clickSayiRef = useRef(0);
  const birinciKlikSrc = useRef('');
  const ikinciKlikSrc = useRef('');
  const qalanCehdSayi = useRef(10);
  const eyniKartCutununSayi = useRef(0);
  const [isGameStarted, setGameStarted] = useState(false);

  const start = () => {
    if (!isGameStarted) {
      setGameStarted(true);
      document.querySelectorAll(".memoryMain .section2 .images .two_images>img:last-child").forEach((f) => {
        f.classList.add("z_index");
      });
      setTimeout(() => {
        document.querySelectorAll(".memoryMain .section2 .images .two_images>img:last-child").forEach((f) => {
          f.classList.remove("z_index");
        });
        setTimerRunning(true);
      }, 2000);
    }
  };

  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond > 0) {
            return prevSecond - 1;
          } else if (minute > 0) {
            setMinute((prevMinute) => prevMinute - 1);
            return 59;
          } else {
            setTimerRunning(false);
            clearInterval(interval);
            document.querySelector(".modal").classList.remove("none");
            document.querySelector(".modal h5").innerText = "Siz meglub oldunuz"
            document.querySelector(".result p span").innerText = qalanCehdSayi.current
            return 0;
          }
        });
      }, 10);
      return () => clearInterval(interval);
    }
  }, [isTimerRunning, minute]);

  const change = (e) => {
    if (!isGameStarted) {
      return;
    }
    e.target.classList.add("z_index");
    clickSayiRef.current += 1;
    if (clickSayiRef.current == 1) {
      birinciKlikSrc.current = e.target.previousElementSibling.src.replace('http://localhost:3000/static/media/', '').slice(0, 6)
    }
    if (clickSayiRef.current == 2) {
      if (qalanCehdSayi.current > 0) {
        qalanCehdSayi.current = qalanCehdSayi.current - 1;
      }
      document.querySelector(".qalanCehdSayi").innerText = qalanCehdSayi.current
      if (qalanCehdSayi.current == 0) {
        qalanCehdSayi.current = 0
        document.querySelector(".modal").classList.remove("none")
        document.querySelector(".modal .result p:last-child span").innerText = qalanCehdSayi.current
      }
      ikinciKlikSrc.current = e.target.previousElementSibling.src.replace('http://localhost:3000/static/media/', '').slice(0, 6)
      document.querySelectorAll(".memoryMain .section2 .images .two_images>img:last-child").forEach(f => {
        setTimeout(() => {
          f.classList.remove("z_index");
        }, 1000);
      })
      if (birinciKlikSrc.current == ikinciKlikSrc.current) {
        document.querySelectorAll(".memoryMain .section2 .images .two_images>img:first-child").forEach(z => {
          if (birinciKlikSrc.current == z.src.replace('http://localhost:3000/static/media/', '').slice(0, 6)) {
            z.classList.add("z_index3")
          }
        })
        eyniKartCutununSayi.current = eyniKartCutununSayi.current + 1
        document.querySelector(".eyniKartCutununSayi").innerText = eyniKartCutununSayi.current
      }
      birinciKlikSrc.current = ''
      ikinciKlikSrc.current = ''
      clickSayiRef.current = 0
    }
    if (eyniKartCutununSayi.current == 6) {
      document.querySelector(".modal h5").innerText = "Siz qalib oldunuz"
      document.querySelector(".modal").classList.remove("none")
      document.querySelector(".result p span").innerText = qalanCehdSayi.current
    }
    else if (eyniKartCutununSayi.current != 6) {
      document.querySelector(".modal h5").innerText = "Siz meglub oldunuz"
    }
  };

  useEffect(() => {
    setShuffledCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  }, []);

  const again = () => {
    document.querySelector(".modal").classList.add("none")
    qalanCehdSayi.current = 10
    document.querySelector(".qalanCehdSayi").innerText = qalanCehdSayi.current
    eyniKartCutununSayi.current = 0
    document.querySelector(".eyniKartCutununSayi").innerText = eyniKartCutununSayi.current
    document.querySelectorAll(".memoryMain .section2 .images .two_images>img:first-child").forEach(z => {
      z.classList.remove("z_index3")
    })
    setMinute(2);
    setSecond(0);
    setGameStarted(false)
  }

  return (
    <>
      <Header />
      <Nav />
      <main className='memoryMain'>
        <section>
          <div className="left">
            <h1>MEMORY GAME</h1>
            <h2>Xoş gəldiniz! Bu əyləncəli Yaddaş Oyununa hazırsınız? Oyunun qaydaları olduqca sadədir. Budur necə oynamaq olar</h2>
            <ul>
              <li>Oyuna başlamaq üçün "Start" düyməsinə basın.</li>
              <li>12 kart 2 saniyə müddətinə açılacaq və sonra bağlanacaq.</li>
              <li>Kartlar geri dönəndən sonra iki dəqiqəlik bir taymer başlayacaq.</li>
              <li>Bu müddət ərzində eyni şekillərə sahib kartları tapmağa çalışın.</li>
              <li>Toplamda 10 şansınız var. Hər iki kartı düzgün birləşdirmədiyinizdə bir şansınız itəcək.</li>
              <li>Şansınız bitdikdə və ya vaxt bitdikdə oyun sona çatacaq.</li>
              <li>Oyunu uğurla başa çatmaq üçün bütün kartları eşləşdirənə qədər cəhd edin.</li>
            </ul>
          </div>
        </section>
        <section className='section2'>
          <div className="images">
            {shuffledCards.map((c) => (
              <div className="two_images" key={c.id}>
                <img className='alma' src={c.src} alt="card" />
                <img onClick={change} src={card_8} alt="card" />
              </div>
            ))}
          </div>
        </section>
        <section className='play'>
          <div>
            <p >Remaining attempts available <span className='qalanCehdSayi'>{qalanCehdSayi.current}</span> </p>
            <p>Count of paired cards <span className='eyniKartCutununSayi'>{eyniKartCutununSayi.current}</span> </p>
          </div>
          <div>
            <span>{String(minute).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(second).padStart(2, '0')}</span>
          </div>
          <div className="buttons">
            <button onClick={start} >Start</button>
          </div>
        </section>
      </main>
      <section className='modal none'>
        <div>
          <h4>Game Over</h4>
          <h5>aefvk ebkjvbqelrbgvqerbvae ae qe</h5>
          <div className="result">
            <p>Qalan cehd sayı: <span>111111111111</span></p>
          </div>
          <div className="question">
            <Link to="/">
              <button><i className="fa-solid fa-right-from-bracket"></i>Exit Game</button>
            </Link>
            <button onClick={again}>Play Again<i className="fa-solid fa-rotate-right"></i></button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );

};

export default Memorygame;