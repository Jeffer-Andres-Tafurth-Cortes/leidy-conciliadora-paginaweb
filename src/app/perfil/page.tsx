"use client";

import { faFileText } from "@fortawesome/free-solid-svg-icons";
import styles from "./BioSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Perfil() {
  return (
    <section className={styles.wrapper}>
      {/* COLUMNA IZQUIERDA */}
      <motion.div
        className={styles.leftColumn}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Foto con animación */}
        <motion.div
          className={styles.photoFrame}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.25 }}
        >
          <img src="/doc-leidy.jpg" alt="Doc. Leidy" />
        </motion.div>

        {/* Caja de contacto */}
        <motion.div
          className={styles.contactBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Contáctenos</h3>
          <p>¿Preguntas? Será un placer ayudarle.</p>

          <motion.button
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <Link href="/contact">
              <FontAwesomeIcon icon={faFileText} />
              PROGRAME UNA CONSULTA
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* COLUMNA DERECHA */}
      <motion.div
        className={styles.rightColumn}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className={styles.sectionTitle}>Perfil:</h3>
        <p className={styles.bioText}>
          Abogada egresada de la Universidad Militar, con sólida formación y
          experiencia en gestión comercial y asesoría jurídica estratégica.
          Cuenta con un profundo conocimiento de la Ley 1480 de 2011 (Estatuto
          del Consumidor) y del régimen de garantías mobiliarias, lo que le
          permite brindar soluciones legales efectivas, prácticas y alineadas
          con las necesidades reales de personas y empresas. Su ejercicio
          profesional se caracteriza por un enfoque integral que combina el
          rigor jurídico con la comprensión del contexto comercial y humano de
          cada caso, priorizando la prevención de conflictos, la protección de
          derechos y la construcción de acuerdos sostenibles. Actualmente se
          desempeña como CEO de SOL Centro de Conciliación, desde donde lidera
          procesos de resolución alternativa de conflictos, promoviendo el
          diálogo, la conciliación y soluciones justas. Asimismo, ejerce como
          Conciliadora en Derecho, acompañando a las partes con imparcialidad,
          empatía y compromiso, orientada siempre a alcanzar acuerdos eficaces y
          duraderos.
        </p>

        <h3 className={styles.sectionTitle}>Asociaciones Profesionales:</h3>
        <ul className={styles.list}>
          <li>CEO de SOL centro de conciliación.</li>
          <li>Conciliadora de derecho.</li>
        </ul>
      </motion.div>
    </section>
  );
}
