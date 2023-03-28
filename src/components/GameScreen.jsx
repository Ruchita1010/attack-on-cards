import React, { useState, useEffect } from 'react';
import Card from './Card';
import Modal from './Modal';
import getCards from '../utils/cards';
import styles from '../styles/GameScreen.module.css';

const GameScreen = () => {
  const cards = getCards();
  // to keep track of the cards clicked by the user
  const [clickedCards, setClickedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetGame = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    setClickedCards([]);
  };

  const handleCardClick = (e) => {
    const cardName = e.target.alt;
    if (clickedCards.includes(cardName)) {
      resetGame();
      return;
    }
    setCurrentScore((prevState) => prevState + 1);
    setClickedCards((prevState) => [...prevState, cardName]);
  };

  const handleModalCloseAndReset = () => {
    resetGame();
    setShowModal(false);
  };

  useEffect(() => {
    if (currentScore === 15) {
      setShowModal(true);
    }
  }, [currentScore]);

  return (
    <div className={styles.game_screen}>
      <div className={styles.score_board}>
        <p>CURRENT SCORE: {currentScore}</p>
        <p>BEST SCORE: {bestScore}</p>
      </div>
      <div className={styles.cards_grid}>
        {cards.map((card) => (
          <Card
            key={card.id}
            cardContent={card}
            handleCardClick={handleCardClick}
          />
        ))}
      </div>
      {showModal ? (
        <Modal handleModalCloseAndReset={handleModalCloseAndReset} />
      ) : null}
    </div>
  );
};

export default GameScreen;
