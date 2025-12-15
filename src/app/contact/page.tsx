"use client";

import styles from "./contact.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function AgendaLlamada() {
  return (
    <section className={styles.section}>
      {/* HEADER */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.logo}>
          <img
            src="logo-leidy1.jpg"
            alt="logo-Leidy"
            className={styles.logoMark}
          />
          <div>
            <h1>LEIDY TIRADO</h1>
            <p>CONCILIADORA LEGAL</p>
          </div>
        </div>

        <motion.a
          href="https://api.whatsapp.com/send/?phone=573213525962&text&type=phone_number&app_absent=0"
          target="_blank"
          className={styles.headerCta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Programe una consulta
        </motion.a>
      </motion.header>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.content}>
        {/* VIDEO */}
        <motion.div
          className={styles.videoWrapper}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <iframe
            src="video-intro-leidy.mp4"
            title="Programe una consulta"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        {/* TEXTO */}
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className={styles.intro}>
            Estoy aquí para orientarle y ayudarle a tomar la mejor decisión para
            su caso.
          </p>

          <p className={styles.highlightTitle}>¿Necesita ayuda inmediata?</p>

          <div className={styles.contactBox}>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} /> <strong>WhatsApp:</strong>{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=573213525962&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                +57 321 352 5962
              </a>{" "}
            </p>

            <p>
              <FontAwesomeIcon icon={faMailForward} /> <strong>Email:</strong>{" "}
              <a href="mailto:correo@ejemplo.com">correo doc. Leidy</a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA INFERIOR */}
      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Programa una consulta</h2>
        <p>
          Brindo asesoría jurídica integral para personas y empresas,
          especializada en la prevención de conflictos legales, la conciliación
          y la construcción de acuerdos sostenibles. Acompaño cada caso con
          orientación profesional, estratégica y personalizada. Programa tu
          consulta legal y recibe asesoría confiable y eficaz.
        </p>
      </motion.div>
    </section>
  );
}
