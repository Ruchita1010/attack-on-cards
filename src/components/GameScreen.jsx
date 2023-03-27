import React from 'react';
import Card from './Card';
import getCards from '../utils/cards';
import styles from '../styles/GameScreen.module.css';

const GameScreen = () => {
  const cards = getCards();
  return (
    <div className={styles.game_screen}>
      <div className={styles.cards_grid}>
        {cards.map((card) => (
          <Card key={card.id} cardContent={card} />
        ))}
      </div>
    </div>
  );
};

export default GameScreen;
