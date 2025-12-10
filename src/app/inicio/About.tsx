import styles from "./styles/About.module.css";

const About = () => {
  return (
    <section className={styles.wrapper}>
      {/* ------------------ BARRA DE PASOS ------------------ */}
      <div className={styles.stepsBar}>
        {[
          { num: "1", text: "Programas tu consulta." },
          { num: "2", text: "Reviso y escucho atentamente tu caso." },
          { num: "3", text: "Creo un plan de acción especial para ti." },
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

          <button className={styles.ctaButton}>LEER MAS SOBRE MI</button>
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
