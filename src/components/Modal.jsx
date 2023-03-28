import React from 'react';
import styles from '../styles/Modal.module.css';
import ArminSmiling from '../assets/Armin-Smiling.mp4';

const Modal = ({ handleModalCloseAndReset }) => {
  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <video loop autoPlay={true}>
          <source src={ArminSmiling}></source>
          <p>Your browser doesn't support the video</p>
        </video>
        <button
          className={styles.play_again_btn}
          onClick={handleModalCloseAndReset}>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default Modal;
