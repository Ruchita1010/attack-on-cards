import React from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ cardContent, handleCardClick }) => {
  const { imgPath, infoText } = cardContent;
  return (
    <div className={styles.card} onClick={handleCardClick}>
      <img src={imgPath} alt={infoText} />
      <p className={styles.info_text}>{infoText}</p>
    </div>
  );
};

export default Card;
