"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import styles from "./styles/YouLookingAt.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const YouLookingAt: FC = () => {
  const items = [
    "¿Qué tipo de problemas legales se pueden conciliar?",
    "¿Pierdo mis derechos si acepto conciliar o llegar a un acuerdo?",
    "¿Qué tanta fuerza tiene lo que firmamos en conciliación?",
    "¿Cuánto tiempo suele tomar la conciliación?",
    "¿Es más económico que una demanda con un abogado?",
    "¿Qué hace diferente a Leidy Conciliadora?",
    "¿A qué tipo de personas les recomiendas NO conciliar?",
    "¿Cuál es el primer paso si quiero conciliar contigo?",
  ];

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {/* TÍTULO */}
      <motion.h2
        className={styles.mainTitle}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        ¿Está buscando un abogado competente, transparente y atento?
      </motion.h2>

      {/* GRID DE ITEMS */}
      <div className={styles.grid}>
        {items.map((text, index) => (
          <motion.div
            key={index}
            className={styles.item}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
              delay: index * 0.15, // 🔥 stagger manual
            }}
            whileHover={{ scale: 1.03, x: 6 }}
          >
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
            {text}
          </motion.div>
        ))}
      </div>

      {/* BOTÓN */}
      <motion.div
        className={styles.buttonWrapper}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.button
          className={styles.ctaButton}
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PROGRAME UNA CONSULTA
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default YouLookingAt;
