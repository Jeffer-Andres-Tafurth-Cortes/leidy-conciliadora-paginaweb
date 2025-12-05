"use client";

import { faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";
import styles from "./AreasPracticas.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleClick = () => {
  window.open("", "_blank");
};

const areas = [
  {
    title: "PERSONAS",
    frontIcon: <FontAwesomeIcon icon={faUsers} className={styles.icon} />,
    frontText:
      "El derecho laboral regula la relación entre empleadores y trabajadores, asegurando el cumplimiento de normas sobre contratación, despidos, seguridad social, prestaciones y condiciones de trabajo.",
    backList: [
      "Prevencion y manejo de conflictos laborales para evitar demandas y sanciones.",
      "Asesoría en contratación, despidos y normativas laborales vigentes.",
      "Defensa en procesos judiciales o administrativos ante inspecciones o reclamaciones.",
      "Diseño de estrategias para la estabilidad y seguridad legal de tu empresa.",
    ],
  },
  {
    title: "EMPRESAS",
    frontIcon: <FontAwesomeIcon icon={faBuilding} className={styles.icon} />,
    frontText:
      "Esta área regula relaciones entre personas, protegiendo derechos sobre bienes, contratos, herencias, responsabilidad civil y otros aspectos de la vida cotidiana. Se encarga de resolver disputas sobre propiedad, incumplimiento de acuerdos y daños y perjuicios.",
    backList: [
      "Redacción y revisión de contratos para evitar riesgos legales.",
      "Acompañamiento en disputas civiles, como incumplimiento contractuales o daños y perjuicios.",
      "Protección y defensa en procesos de propiedad, herencias y sucesiones.",
      "Soluciones jurídicas personalizadas para cada caso",
    ],
  },
];

export default function AreasPracticas() {
  return (
    <section className={styles.container}>
      <p className={styles.subtitle}>SOMOS ESPECIALISTAS EN</p>
      <h2 className={styles.title}>ÁREAS DE PRÁCTICA</h2>
      <div className={styles.grid}>
        {areas.map(({ title, frontIcon, frontText, backList }) => (
          <div key={title} className={styles.cardWrapper}>
            <div className={styles.card}>
              {/* Frente */}
              <div className={styles.front}>
                <div className={styles.icon}>{frontIcon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.frontText}>{frontText}</p>
              </div>
              {/* Reverso */}
              <div className={styles.back}>
                <ul className={styles.bulletList}>
                  {backList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.ctaButton} onClick={handleClick}>
        PROGRAME UNA CONSULTA
      </button>
    </section>
  );
}
