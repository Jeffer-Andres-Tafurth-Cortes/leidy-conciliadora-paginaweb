"use client";

import styles from "../styles/CallToAction.module.css";

function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.mainText}>
          ASESORÍA Y CONCILIACIÓN LEGAL INMEDIATA
        </h2>

        <p className={styles.bottomText}>
          ¿TIENE UN CONFLICTO LEGAL QUE NO PUEDE ESPERAR?
        </p>

        <p className={styles.finalText}>
          Conecte ahora con una abogada conciliadora en Colombia y reciba
          asesoría profesional para resolver su situación de forma legal, rápida
          y efectiva.
        </p>

        <a
          href="https://api.whatsapp.com/send/?phone=573213525962&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          aria-label="Contactar abogada conciliadora por WhatsApp"
        >
          HABLAR CON LA ABOGADA
        </a>
      </div>
    </section>
  );
}

export default CallToAction;
