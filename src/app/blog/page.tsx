"use client";

import styles from "./Blog.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "¿Qué es la conciliación en derecho?",
    answer: `
      La conciliación en derecho es un mecanismo legal alternativo mediante el cual
      dos o más partes, con la ayuda de un conciliador autorizado, buscan resolver
      un conflicto de manera pacífica y voluntaria, sin necesidad de acudir a un juez.
      Este procedimiento permite llegar a acuerdos con validez jurídica, ahorrando
      tiempo, costos y desgaste emocional.
    `,
  },
  {
    question: "¿Para qué sirve la conciliación jurídica?",
    answer: `
      La conciliación jurídica sirve para solucionar conflictos civiles, comerciales,
      familiares o laborales de forma rápida y efectiva. Su objetivo principal es
      evitar procesos judiciales largos, promoviendo el diálogo entre las partes y
      garantizando acuerdos claros, legales y obligatorios.
    `,
  },
  {
    question: "¿La conciliación en derecho es obligatoria en Colombia?",
    answer: `
      En Colombia, la conciliación en derecho es obligatoria como requisito de
      procedibilidad en muchos procesos judiciales, especialmente en asuntos civiles
      y de familia. Esto significa que, antes de acudir a un juez, las partes deben
      intentar resolver el conflicto mediante una audiencia de conciliación.
    `,
  },
  {
    question: "¿Quién puede actuar como conciliador en derecho?",
    answer: `
      El conciliador en derecho debe ser un abogado debidamente capacitado y
      autorizado por el Ministerio de Justicia o por un centro de conciliación
      habilitado. Su función es imparcial y busca facilitar acuerdos justos conforme
      a la ley.
    `,
  },
];

export default function Blog() {
  return (
    <section className={styles.wrapper} aria-labelledby="blog-conciliacion">
      <article className={styles.article}>
        <header className={styles.header}>
          <h2 id="blog-conciliacion" className={styles.title}>
            Conciliación en Derecho: preguntas frecuentes y guía legal
          </h2>

          <p className={styles.intro}>
            En esta sección encontrará respuestas claras sobre{" "}
            <strong>qué es la conciliación en derecho</strong>, para qué sirve,
            cuándo es obligatoria y cómo puede ayudarle a resolver conflictos
            legales de forma rápida y segura en Colombia.
          </p>
        </header>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <motion.section
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.question}>{faq.question}</h3>
              <p className={styles.answer}>{faq.answer}</p>
            </motion.section>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>
            ¿Tiene un caso específico o necesita asesoría personalizada en
            conciliación jurídica?
          </p>

          <Link href="/contact" className={styles.cta}>
            Agendar una consulta legal
          </Link>
        </footer>
      </article>
    </section>
  );
}
