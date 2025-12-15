"use client";

import { motion } from "framer-motion";
import styles from "./styles/Hero.module.css";
import Link from "next/link";

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

        <Link href="/contact">
          <button className={styles.ctaButton}>PROGRAME UNA CONSULTA</button>
        </Link>
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
