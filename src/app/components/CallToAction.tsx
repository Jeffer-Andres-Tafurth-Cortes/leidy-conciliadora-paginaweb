"use client";

import React, { FC } from "react";
import styles from "../styles/CallToAction.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573213525962&text&type=phone_number&app_absent=0",
    "_blank"
  );
};

const CallToAction: FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.mainText}>PROGRAME UNA CONSULTA</h2>

        <div className={styles.divider}></div>

        <p className={styles.bottomText}>¿NECESITAS AYUDA INMEDIATA?</p>

        <p className={styles.finalText}>
          Si tu conflicto no puede esperar, empecemos hoy mismo.
        </p>

        <button className={styles.ctaButton} onClick={handleClick}>
          HABLA CON LEIDY
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
