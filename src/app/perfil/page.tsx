"use client";

import styles from "./BioSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileText } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Perfil() {
  return (
    <section className={styles.wrapper}>
      {/* ================= COLUMNA IZQUIERDA ================= */}
      <motion.div
        className={styles.leftColumn}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* FOTO */}
        <motion.div
          className={styles.photoFrame}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.25 }}
        >
          <div className={styles.photoWrapper}>
            <Image
              src="/doc-leidy.jpg"
              alt="Leidy Tirado, abogada y conciliadora en derecho especializada en conciliación legal"
              fill
              sizes="(max-width: 900px) 100vw, 320px"
              className={styles.photo}
              priority
            />
          </div>
        </motion.div>

        {/* CONTACTO */}
        <motion.div
          className={styles.contactBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            ¿Necesita asesoría legal o iniciar un proceso de{" "}
            <strong>conciliación en derecho en Bogotá</strong>? Agende una
            consulta profesional y reciba orientación clara y confiable.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className={styles.contactButton}>
              <FontAwesomeIcon icon={faFileText} />
              <span>PROGRAME UNA CONSULTA</span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ================= COLUMNA DERECHA ================= */}
      <motion.div
        className={styles.rightColumn}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className={styles.sectionTitle}>
          Perfil profesional - Abogada y Conciliadora en Derecho
        </h3>

        <p className={styles.bioText}>
          <strong itemProp="name">Leidy Tirado</strong> es abogada egresada de
          la Universidad Militar, especializada en{" "}
          <strong>conciliación en derecho</strong>, asesoría jurídica
          estratégica y mecanismos alternativos de solución de conflictos en
          Colombia.
          <br />
          <br />
          Su práctica profesional está orientada a acompañar a personas y
          empresas en procesos de <strong>conciliación legal</strong>,
          prevención de litigios y resolución eficiente de conflictos civiles,
          comerciales y laborales, priorizando acuerdos claros, ágiles y
          jurídicamente seguros.
          <br />
          <br />
          Actualmente se desempeña como{" "}
          <strong>CEO de SOL Centro de Conciliación</strong> y como{" "}
          <strong>Conciliadora en Derecho</strong>, brindando atención
          profesional conforme a la normativa colombiana.
        </p>

        <h3 className={styles.sectionTitle}>
          Experiencia profesional y conciliación legal
        </h3>

        <ul className={styles.list}>
          <li>
            CEO de <strong>SOL Centro de Conciliación</strong>
          </li>
          <li>
            <strong>Conciliadora en Derecho</strong> habilitada en Colombias
          </li>
          <li>
            Experiencia en conciliación extrajudicial y asesoría jurídica
            preventiva
          </li>
        </ul>
      </motion.div>

      {/* ================= MAPA ================= */}
      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={styles.mapTitle}>
          Oficina de conciliación legal - Atención presencial
        </h3>

        <div className={styles.mapContainer}>
          <iframe
            title="Oficina de conciliación en derecho en Bogotá - SOL Centro de Conciliación"
            src="https://www.google.com/maps?q=Abogados%20Especialistas%20Pravice%20Bogot%C3%A1&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
