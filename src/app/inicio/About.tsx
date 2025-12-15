"use client";

import { motion } from "framer-motion";
import styles from "./styles/About.module.css";
import Link from "next/link";

function About() {
  return (
    <section className={styles.wrapper}>
      {/* ------------------ BARRA DE PASOS ------------------ */}
      <div className={styles.stepsBar}>
        {[
          { num: "1", text: "Programas tu consulta." },
          { num: "2", text: "Reviso y escucho atentamente tu caso." },
          { num: "3", text: "Creo un plan de acción especial para ti." },
        ].map((step, index) => (
          <motion.div
            key={index}
            className={styles.stepItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <div className={styles.stepNumber}>{step.num}</div>
            <span>{step.text}</span>
          </motion.div>
        ))}
      </div>

      {/* ------------------ CONTENIDO PRINCIPAL ------------------ */}
      <div className={styles.container}>
        {/* Texto */}
        <motion.article
          className={styles.contentBox}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>¡CONOCE A LEIDY!</h2>

          <p className={styles.paragraph}>
            Soy Leidy Tirado, conciliadora en derecho y CEO de SOL Centro de
            Conciliación. Empecé en el ejercicio tradicional de la abogacía,
            pero pronto comprendí que muchos conflictos podían resolverse de
            forma más rápida, humana y menos desgastante a través de la
            conciliación.
          </p>

          <p className={styles.paragraph}>
            Hoy acompaño a personas, familias y empresas a transformar
            conflictos en acuerdos claros, legales y sostenibles.
          </p>

          <p className={styles.paragraph}>
            Mi propósito es que no tengas que elegir entre tus derechos y tu
            paz.
          </p>

          <Link href="/perfil">
            <button className={styles.ctaButton}>LEER MAS SOBRE MI</button>
          </Link>
        </motion.article>

        {/* Imagen */}
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="/doc-leidy.jpg" alt="Dra. Leidy" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
