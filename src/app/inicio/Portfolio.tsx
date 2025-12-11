"use client";

import Link from "next/link";
import styles from "./styles/Portfolio.module.css";
import { motion } from "framer-motion";

export default function Portfolio() {
  const items = [
    "Conciliación familiar.",
    "Conciliación en separaciones",
    "Conciliación en arrendamientos y vivienda.",
    "Conciliación en propiedad horizontal y convivencia entre vecinos.",
    "Conciliación laboral (individual).",
    "Conciliación en conflictos comerciales.",
  ];

  return (
    <div className={styles.wrapper}>
      {/* -------------------- COLUMNA IZQUIERDA -------------------- */}
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <small className={styles.subtitle}>Especialista</small>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          NUESTRAS ÁREAS DE PRÁCTICA
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          viewport={{ once: true }}
        >
          La conciliación, es una herramienta concreta para resolver conflictos
          reales. Por eso trabajo en áreas donde el impacto se siente en la
          casa, en el bolsillo y en las relaciones: familia, pareja, deudas,
          vivienda, trabajo y negocios.
          <br /> <br />
          En estas situaciones, te puedo acompañar para pasar del conflicto al
          acuerdo, con respaldo legal y con el menor desgaste emocional posible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href={"/areas-practica"}>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              ÁREAS DE PRÁCTICA
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* -------------------- COLUMNA DERECHA -------------------- */}
      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ul className={styles.timeline}>
          {items.map((item, index) => (
            <motion.li
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.15, // 🔥 stagger manual
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, x: 4 }}
            >
              <span className={styles.number}>{index + 1}</span>
              <p className={styles.itemText}>{item}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
