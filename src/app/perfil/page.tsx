"use client";

import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import styles from "./BioSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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

          <motion.a
            href="mailto:"
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <FontAwesomeIcon icon={faMailForward} /> Enviar Correo Electrónico
          </motion.a>
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
        <p className={styles.bioText}>
          La Abogada Leidy obtuvo su B.A. (Diploma Universitario) con énfasis en
          Ciencias Políticas y Estudios Latino-Americanos...
        </p>

        <h3 className={styles.sectionTitle}>Licencias:</h3>
        <p className={styles.bioText}>
          La Abogada Leidy está certificada por la Corte Suprema...
        </p>

        <h3 className={styles.sectionTitle}>Experiencia:</h3>
        <p className={styles.bioText}>
          En la actualidad, la Abogada Leidy se especializa en casos...
        </p>

        <h3 className={styles.sectionTitle}>Idiomas:</h3>
        <p className={styles.bioText}>Español e Inglés</p>

        <h3 className={styles.sectionTitle}>Asociaciones Profesionales:</h3>
        <ul className={styles.list}>
          <li>Miembro de la Junta Directiva...</li>
          <li>Co-Director del Comité de Enlace...</li>
          <li>Co-Director del Comité de Enlace en la Oficina de Asilos...</li>
        </ul>
      </motion.div>
    </section>
  );
}
