"use client";

import { faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";
import styles from "./AreasPracticas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573213525962&text&type=phone_number&app_absent=0",
    "_blank"
  );
};

const areas = [
  {
    title: "PERSONAS",
    frontIcon: <FontAwesomeIcon icon={faUsers} className={styles.icon} />,
    frontText:
      "El derecho laboral regula la relación entre empleadores y trabajadores, asegurando el cumplimiento de normas sobre contratación, despidos, seguridad social, prestaciones y condiciones de trabajo.",
    backList: [
      "Prevencion y manejo de conflictos laborales para evitar demandas y sanciones.",
      "Asesoría en contratación, despidos y normativas laborales vigentes.",
      "Defensa en procesos judiciales o administrativos ante inspecciones o reclamaciones.",
      "Diseño de estrategias para la estabilidad y seguridad legal de tu empresa.",
    ],
  },
  {
    title: "EMPRESAS",
    frontIcon: <FontAwesomeIcon icon={faBuilding} className={styles.icon} />,
    frontText:
      "Esta área regula relaciones entre personas, protegiendo derechos sobre bienes, contratos, herencias, responsabilidad civil y otros aspectos de la vida cotidiana. Se encarga de resolver disputas sobre propiedad, incumplimiento de acuerdos y daños y perjuicios.",
    backList: [
      "Redacción y revisión de contratos para evitar riesgos legales.",
      "Acompañamiento en disputas civiles, como incumplimiento contractuales o daños y perjuicios.",
      "Protección y defensa en procesos de propiedad, herencias y sucesiones.",
      "Soluciones jurídicas personalizadas para cada caso",
    ],
  },
];

export default function AreasPracticas() {
  return (
    <section className={styles.container}>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        SOMOS ESPECIALISTAS EN
      </motion.p>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        ÁREAS DE PRÁCTICA
      </motion.h2>

      <div className={styles.grid}>
        {areas.map(({ title, frontIcon, frontText, backList }, index) => (
          <motion.div
            key={title}
            className={styles.cardWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.card}>
              {/* Frente */}
              <div className={styles.front}>
                <div className={styles.icon}>{frontIcon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.frontText}>{frontText}</p>
              </div>
              {/* Reverso */}
              <div className={styles.back}>
                <ul className={styles.bulletList}>
                  {backList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className={styles.ctaButton}
        onClick={handleClick}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        PROGRAME UNA CONSULTA
      </motion.button>
    </section>
  );
}
