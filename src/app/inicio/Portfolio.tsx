import Link from "next/link";
import styles from "./styles/Portfolio.module.css";

export default function Portfolio() {
  const items = [
    "DERECHO ...",
    "DERECHO ...",
    "DERECHO ...",
    "DERECHO ...",
    "DERECHO ...",
  ];

  return (
    <div className={styles.wrapper}>
      {/* Columna Izquierda */}
      <div className={styles.left}>
        <small className={styles.subtitle}>Especialista</small>

        <h1 className={styles.title}>NUESTRAS ÁREAS DE PRÁCTICA</h1>

        <p className={styles.description}>
          Leidy ... Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus quibusdam quidem dolorum ipsam, porro ad earum adipisci
          similique nulla iusto qui ex quos beatae minus voluptate accusamus
          consequatur fugit id?
          <br /> <br />
          Si el área de práctica que busca no aparece en el listado, comuníquese
          con nuestro equipo haciendo clic en el botón a continuación.
        </p>

        <Link href={"/areas-juridicas"}>
          <button className={styles.ctaButton}>ÁREAS DE PRÁCTICA</button>
        </Link>
      </div>

      {/* Columna Derecha (Línea de Tiempo) */}
      <div className={styles.right}>
        <ul className={styles.timeline}>
          {items.map((item, index) => (
            <li key={index} className={styles.timelineItem}>
              <span className={styles.number}>{index + 1}</span>
              <p className={styles.itemText}>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
