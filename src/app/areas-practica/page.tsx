"use client";

import {
  faBuilding,
  faUsers,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AreasPracticas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

const areas = [
  {
    title: "Conciliación para personas naturales",
    icon: faUsers,
    description:
      "Brindamos servicios de conciliación jurídica y asesoría legal a personas naturales que enfrentan conflictos civiles, familiares o laborales, priorizando soluciones rápidas, legales y seguras.",
    items: [
      "Conciliación extrajudicial en conflictos civiles y contractuales",
      "Asesoría jurídica preventiva para evitar procesos judiciales",
      "Solución pacífica de conflictos entre particulares",
      "Acompañamiento legal personalizado",
    ],
  },
  {
    title: "Asesoría legal para empresas y empleadores",
    icon: faBuilding,
    description:
      "Asesoramos a empresas y empleadores en derecho laboral y conciliación legal, ayudándoles a prevenir conflictos, cumplir la normativa y proteger su estabilidad jurídica.",
    items: [
      "Conciliación laboral y prevención de demandas",
      "Asesoría en contratación y terminación laboral",
      "Cumplimiento normativo y gestión de riesgos legales",
      "Acompañamiento ante requerimientos del Ministerio de Trabajo",
    ],
  },
  {
    title: "Conciliación en derecho",
    icon: faScaleBalanced,
    description:
      "Prestamos servicios de conciliación en derecho como mecanismo alternativo de solución de conflictos, evitando procesos judiciales largos y costosos.",
    items: [
      "Conciliación extrajudicial conforme a la ley colombiana",
      "Acuerdos con validez legal y seguridad jurídica",
      "Reducción de tiempos y costos judiciales",
      "Atención imparcial y confidencial",
    ],
  },
  {
    title: "Asesoría jurídica preventiva",
    icon: faBuilding,
    description:
      "Ofrecemos asesoría jurídica preventiva para identificar riesgos legales, proteger derechos y tomar decisiones informadas antes de que surjan conflictos.",
    items: [
      "Análisis legal contractual y laboral",
      "Identificación de riesgos jurídicos",
      "Recomendaciones claras y aplicables",
      "Acompañamiento continuo a personas y empresas",
    ],
  },
];

export default function AreasPracticas() {
  return (
    <section
      className={styles.container}
      aria-labelledby="areas-practica-title"
    >
      <motion.h2
        id="areas-practica-title"
        className={styles.title}
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Áreas de práctica y servicios de conciliación jurídica
      </motion.h2>

      <div className={styles.grid}>
        {areas.map((area, index) => (
          <motion.article
            key={area.title}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={styles.header}>
              <FontAwesomeIcon icon={area.icon} className={styles.icon} />
              <h3>{area.title}</h3>
            </div>

            <p className={styles.description}>{area.description}</p>

            <ul className={styles.list}>
              {area.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <Link href="/contact" className={styles.cardLink}>
              Solicitar asesoría legal →
            </Link>
          </motion.article>
        ))}
      </div>

      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/contact" className={styles.ctaButton}>
          Solicitar consulta legal
        </Link>
      </motion.div>
    </section>
  );
}
