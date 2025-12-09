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
          LEIDY TIRADO
          <br /> TU CONCILIADORA
        </h1>

        <p className={styles.paragraph}>Sabemos ...</p>
        <p className={styles.paragraph}>Por eso ...</p>

        <p className={styles.finalPhrase}>
          No dejes tu caso en manos de cualquiera.
          <br />
          <strong>Déjalo en manos de especialistas.</strong>
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
