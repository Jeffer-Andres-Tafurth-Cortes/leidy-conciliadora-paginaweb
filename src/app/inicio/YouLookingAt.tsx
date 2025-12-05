"use client";

import React, { FC } from "react";
import styles from "./styles/YouLookingAt.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const YouLookingAt: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>
        ¿Está buscando un abogado competente, transparente y atento?
      </h2>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Está buscando ...?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Tiene dinero por cobrar ...?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Debe enfrentarse a un cliente ...?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Tiene un conflicto que le está quitando tiempo ...?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Quiere resolver un problema legal ...?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Está enfrentando una situación laboral ...?
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Le preocupa cometer un error ...?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Siente que su abogado actual ...?
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </div>
    </section>
  );
};

export default YouLookingAt;
