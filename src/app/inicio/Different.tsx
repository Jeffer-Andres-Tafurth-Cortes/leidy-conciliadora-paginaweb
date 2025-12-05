import styles from "./styles/Different.module.css";

const Different = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>¿QUÉ NOS HACE DIFERENTES?</h2>

      <p className={styles.paragraph}>En ...</p>

      <p className={styles.paragraph}>
        Sabemos que su situación no puede quedar en manos de cualquiera.
        <strong>
          {" "}
          Su dinero, su empresa, su patrimonio y su tranquilidad necesitan ser
          defendidos por expertos.
        </strong>
      </p>

      <p className={styles.paragraph}>
        Programe su asesoría hoy y conozca cómo ...
      </p>

      <button className={styles.ctaButton}>PROGRAME UNA CONSULTA</button>
    </section>
  );
};

export default Different;
