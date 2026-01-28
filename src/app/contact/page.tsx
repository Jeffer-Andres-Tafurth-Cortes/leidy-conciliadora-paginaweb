"use client";

import styles from "./contact.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=573213525962&text&type=phone_number&app_absent=0";

export default function AgendaLlamada() {
  return (
    <section className={styles.section}>
      {/* ================= HEADER ================= */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" aria-label="Inicio - Leidy Tirado Conciliadora Legal">
          <div className={styles.logo}>
            <img
              src="/logo-leidy1.jpg"
              alt="Leidy Tirado - Conciliadora en Derecho en Colombia"
              className={styles.logoMark}
            />
            <div>
              <h1>LEIDY TIRADO</h1>
              <p>CONCILIADORA EN DERECHO</p>
            </div>
          </div>
        </Link>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headerCta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Solicitar consulta por WhatsApp"
        >
          Solicitar consulta
        </motion.a>
      </motion.header>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <div className={styles.content}>
        {/* VIDEO / IMAGEN */}
        <motion.div
          className={styles.videoWrapper}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <iframe
            src="/video-intro-leidy.mp4"
            title="Asesoría legal y conciliación en derecho - Leidy Tirado"
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
            Soy Leidy Tirado, conciliadora en derecho en Colombia, especializada
            en brindar asesoría legal clara, estratégica y confidencial para la
            solución efectiva de conflictos legales. Mi objetivo es orientarle
            de forma profesional para que tome la mejor decisión jurídica según
            su caso.
          </p>

          <p className={styles.highlightTitle}>
            ¿Necesita asesoría legal inmediata?
          </p>

          <div className={styles.contactBox}>
            <p>
              <FontAwesomeIcon icon={faWhatsapp} /> <strong>WhatsApp:</strong>{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                +57 321 352 5962
              </a>
            </p>

            <p>
              <FontAwesomeIcon icon={faMailForward} /> <strong>Email:</strong>{" "}
              <a href="mailto:correo@ejemplo.com">correo@leidytirado.com</a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* ================= CTA INFERIOR ================= */}
      <motion.div
        className={styles.bottom}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Solicite su consulta legal</h2>
        <p>
          Brindo asesoría jurídica integral en Bogotá y de manera virtual en
          toda Colombia, dirigida a personas y empresas que buscan conciliación
          en derecho, prevención de conflictos legales y construcción de
          acuerdos efectivos. Escríbame por WhatsApp para recibir orientación
          legal profesional, personalizada y oportuna.
        </p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Solicitar consulta por WhatsApp
        </motion.a>
      </motion.div>

      {/* ================= MAPA ================= */}
      <motion.div
        className={styles.mapWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className={styles.mapTitle}>Ubicación de la oficina</h3>

        <div className={styles.mapContainer}>
          <iframe
            title="Ubicación oficina de Leidy Tirado - Bogotá"
            src="https://www.google.com/maps?q=Bogotá%20Colombia&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
}
