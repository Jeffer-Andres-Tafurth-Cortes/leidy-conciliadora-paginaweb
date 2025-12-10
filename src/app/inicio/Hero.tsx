"use client";

import { motion } from "framer-motion";
import styles from "./styles/Hero.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className={styles.mainTitle}>
          LEIDY
          <br /> TU CONCILIADORA LEGAL
        </h1>

        <p className={styles.paragraph}>
          Sabemos que vivir un conflicto legal no solo agota el bolsillo,
          también cansa el corazón
        </p>
        <p className={styles.paragraph}>
          Por eso, conmigo el proceso es más claro, más humano y mucho menos
          estresante
        </p>

        <p className={styles.finalPhrase}>
          Te explico tus opciones, te acompaño paso a paso y buscamos acuerdos
          que te devuelvan
          <br />
          <strong>la tranquilidad.</strong>
        </p>

        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </motion.div>

      <motion.div
        className={styles.videoBg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <video autoPlay muted loop playsInline>
          <source src="/video-intro-leidy.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
}
