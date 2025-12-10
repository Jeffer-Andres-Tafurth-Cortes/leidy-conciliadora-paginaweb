import Link from "next/link";
import styles from "./styles/Portfolio.module.css";

export default function Portfolio() {
  const items = [
    "Conciliación familiar.",
    "Conciliación en separaciones",
    "Conciliación en arrendamientos y vivienda.",
    "Conciliación en propiedad horizontal y convivencia entre vecinos.",
    "Conciliación laboral (individual).",
    "Conciliación en conflictos comerciales.",
  ];

  return (
    <div className={styles.wrapper}>
      {/* Columna Izquierda */}
      <div className={styles.left}>
        <small className={styles.subtitle}>Especialista</small>

        <h1 className={styles.title}>NUESTRAS ÁREAS DE PRÁCTICA</h1>

        <p className={styles.description}>
          La conciliación, es una herramienta concreta para resolver conflictos
          reales. Por eso trabajo en áreas donde el impacto se siente en la
          casa, en el bolsillo y en las relaciones: familia, pareja, deudas,
          vivienda, trabajo y negocios.
          <br /> <br />
          En estas situaciones, te puedo acompañar para pasar del conflicto al
          acuerdo, con respaldo legal y con el menor desgaste emocional posible.
        </p>

        <Link href={"/areas-practica"}>
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
