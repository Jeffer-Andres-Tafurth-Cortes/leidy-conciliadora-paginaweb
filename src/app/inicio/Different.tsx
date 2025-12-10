import styles from "./styles/Different.module.css";

const Different = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        ¿ QUÉ HACE DIFERENTE A LEIDY CONCILIADORA?
      </h2>

      {/**<p className={styles.paragraph}>En ...</p>*/}

      <p className={styles.paragraph}>
        No soy solo una profesional del derecho: Soy
        <strong> TU CONCILIADORA</strong>, quien entiende lo que se siente
        llegar cansada de pelear. Mi enfoque une la ley con la empatía, y por
        ello te acompaño a construir acuerdos realistas, sin presiones ni
        tecnicismos innecesarios
      </p>

      <p className={styles.paragraph}>
        Mi prioridad no es “ganar un pleito”, sino ayudarte a salir con tu
        dignidad intacta y con un acuerdo que puedas cumplir y te dé paz.
      </p>

      <button className={styles.ctaButton}>PROGRAME UNA CONSULTA</button>
    </section>
  );
};

export default Different;
