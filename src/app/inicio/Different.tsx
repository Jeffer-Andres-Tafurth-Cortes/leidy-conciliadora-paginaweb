"use client";

import { motion } from "framer-motion";
import styles from "./styles/Different.module.css";
import Link from "next/link";
function Different() {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Título */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        ¿ QUÉ HACE DIFERENTE A LEIDY CONCILIADORA?
      </motion.h2>

      {/* Párrafo 1 */}
      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        No soy solo una profesional del derecho: Soy
        <strong> TU CONCILIADORA</strong>, quien entiende lo que se siente
        llegar cansada de pelear. Mi enfoque une la ley con la empatía, y por
        ello te acompaño a construir acuerdos realistas, sin presiones ni
        tecnicismos innecesarios.
      </motion.p>

      {/* Párrafo 2 */}
      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        Mi prioridad no es “ganar un pleito”, sino ayudarte a salir con tu
        dignidad intacta y con un acuerdo que puedas cumplir y te dé paz.
      </motion.p>

      {/* Botón */}
      <motion.button
        className={styles.ctaButton}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/contact">PROGRAME UNA CONSULTA</Link>
      </motion.button>
    </motion.section>
  );
}

export default Different;
