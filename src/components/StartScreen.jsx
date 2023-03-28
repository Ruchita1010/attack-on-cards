import React, { useState } from 'react';
import styles from '../styles/StartScreen.module.css';

const StartScreen = ({ setShowStartScreen }) => {
  const [showGameInfo, setShowGameInfo] = useState(false);

  const handleInfoBtnClick = () => {
    setShowGameInfo(!showGameInfo);
  };

  return (
    <div className={styles.start_screen}>
      <div className={styles.main_content}>
        <p className={styles.title}>Attack on Cards</p>
        <button
          className={styles.start_btn}
          onClick={() => setShowStartScreen(false)}>
          START
        </button>
      </div>
      <div className={styles.game_info_wrapper}>
        {showGameInfo && (
          <div className={styles.game_info}>
            <p>Don't click on the same card twice!</p>
            <p>Get all 15 cards and you win ✧◝(⁰▿⁰)◜✧</p>
          </div>
        )}
        <button
          className={styles.game_info_toggle_btn}
          onClick={handleInfoBtnClick}>
          {showGameInfo ? <p>&times;</p> : '?'}
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
