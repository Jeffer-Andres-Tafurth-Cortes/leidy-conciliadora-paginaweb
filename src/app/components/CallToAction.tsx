"use client";

import React, { FC } from "react";
import styles from "../styles/CallToAction.module.css";

const handleClick = () => {
  window.open("", "_blank");
};

const CallToAction: FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.mainText}>PROGRAME UNA CONSULTA</h2>

        <div className={styles.divider}></div>

        <p className={styles.bottomText}>¡Esperamos poder ayudarlo!</p>

        <p className={styles.finalText}>
          ¿Necesita ayuda inmediata? Escribanos ahora
        </p>

        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
