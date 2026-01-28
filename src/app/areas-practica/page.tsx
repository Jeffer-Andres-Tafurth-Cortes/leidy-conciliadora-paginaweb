"use client";

import { faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";
import styles from "./AreasPracticas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

const areas = [
  {
    title: "PERSONAS NATURALES",
    frontIcon: <FontAwesomeIcon icon={faUsers} className={styles.icon} />,
    frontText:
      "Brindamos asesoría y conciliación legal a personas naturales que enfrentan conflictos civiles, familiares o laborales, buscando soluciones ágiles, seguras y acordes a la ley colombiana.",
    backList: [
      "Conciliación extrajudicial en conflictos civiles y contractuales.",
      "Asesoría legal preventiva para evitar procesos judiciales.",
      "Solución de conflictos entre particulares de manera pacífica.",
      "Acompañamiento jurídico claro y personalizado en cada caso.",
    ],
  },
  {
    title: "EMPRESAS Y EMPLEADORES",
    frontIcon: <FontAwesomeIcon icon={faBuilding} className={styles.icon} />,
    frontText:
      "Asesoramos a empresas en derecho laboral y conciliación legal, ayudándolas a prevenir conflictos, cumplir la normativa vigente y proteger su estabilidad jurídica.",
    backList: [
      "Prevención y manejo de conflictos laborales con trabajadores.",
      "Conciliación laboral para evitar demandas y sanciones.",
      "Asesoría en contratación, despidos y obligaciones legales.",
      "Acompañamiento en inspecciones y requerimientos del Ministerio de Trabajo.",
    ],
  },
  {
    title: "CONCILIACIÓN EN DERECHO",
    frontIcon: <FontAwesomeIcon icon={faUsers} className={styles.icon} />,
    frontText:
      "Prestamos servicios de conciliación en derecho como mecanismo alternativo de solución de conflictos, permitiendo acuerdos legales sin necesidad de acudir a procesos judiciales largos.",
    backList: [
      "Conciliación extrajudicial conforme a la normativa colombiana.",
      "Reducción de costos y tiempos frente a procesos judiciales.",
      "Acuerdos con validez legal y seguridad jurídica.",
      "Atención imparcial, profesional y confidencial.",
    ],
  },
  {
    title: "ASESORÍA JURÍDICA PREVENTIVA",
    frontIcon: <FontAwesomeIcon icon={faBuilding} className={styles.icon} />,
    frontText:
      "Orientación legal estratégica enfocada en prevenir conflictos, proteger derechos y tomar decisiones informadas antes de que surjan disputas legales.",
    backList: [
      "Análisis legal de situaciones contractuales y laborales.",
      "Identificación de riesgos jurídicos potenciales.",
      "Recomendaciones claras y aplicables a cada caso.",
      "Acompañamiento continuo para personas y empresas.",
    ],
  },
];

export default function AreasPracticas() {
  return (
    <section className={styles.container}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        ÁREAS DE PRÁCTICA Y SERVICIOS DE CONCILIACIÓN
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
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/contact">SOLICITAR CONSULTA LEGAL</Link>
      </motion.button>
    </section>
  );
}
