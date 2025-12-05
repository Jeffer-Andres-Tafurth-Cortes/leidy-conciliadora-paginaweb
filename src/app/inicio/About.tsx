import styles from "./styles/About.module.css";

const About = () => {
  return (
    <section className={styles.wrapper}>
      {/* ------------------ BARRA DE PASOS ------------------ */}
      <div className={styles.stepsBar}>
        {[
          { num: "1", text: "Programe Una Consulta" },
          { num: "2", text: "Revise Su Caso" },
          { num: "3", text: "Cree Un Plan De Acción" },
        ].map((step, index) => (
          <div key={index} className={styles.stepItem}>
            <div className={styles.stepNumber}>{step.num}</div>
            <span>{step.text}</span>
          </div>
        ))}
      </div>

      {/* ------------------ CONTENIDO PRINCIPAL ------------------ */}
      <div className={styles.container}>
        {/* Texto */}
        <article className={styles.contentBox}>
          <h2 className={styles.title}>¡Conoce a LEIDY!</h2>

          <p className={styles.paragraph}>
            Detrás de cada caso, negociación y estrategia legal, hay un equipo
            que ama lo que hace: defender derechos, proteger el patrimonio y
            devolver tranquilidad a quienes confían en nosotros.
          </p>

          <p className={styles.paragraph}>
            Trabajamos con pasión, disciplina y convicción. Cuando no estamos
            diseñando estrategias legales, estamos creando nuevos proyectos,
            formándonos constantemente y fortaleciendo una firma que cree en la
            justicia, el orden y las segundas oportunidades.
          </p>

          <p className={styles.paragraph}>
            Más que abogados, somos aliados legales comprometidos con tu
            tranquilidad.
          </p>

          <button className={styles.ctaButton}>PROGRAME UNA CONSULTA</button>
        </article>

        {/* Imagen */}
        <div className={styles.imageContainer}>
          <img src="/doc-leidy.jpg" alt="Dra. Leidy" />
        </div>
      </div>
    </section>
  );
};

export default About;
