import React from 'react';
import styles from '../styles/StartScreen.module.css';

const StartScreen = ({ setShowStartScreen }) => {
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
      <button className={styles.info_btn}>?</button>
    </div>
  );
};

export default StartScreen;
