"use client";

import React, { FC } from "react";
import styles from "./styles/YouLookingAt.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const YouLookingAt: FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.mainTitle}>
        ¿Está buscando un abogado competente, transparente y atento?
      </h2>

      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Qué tipo de problemas legales se pueden conciliar?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Pierdo mis derechos si acepto conciliar o llegar a un acuerdo?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Qué tanta fuerza tiene lo que firmamos en conciliación?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Cuánto tiempo suele tomar la conciliación?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Es más económico que una demanda con un abogado?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Qué hace diferente a Leidy Conciliadora?
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿A qué tipo de personas les recomiendas NO conciliar?
        </div>

        <div className={styles.item}>
          <span className={styles.icon}>✔</span>
          ¿Cuál es el primer paso si quiero conciliar contigo?
        </div>
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.ctaButton} onClick={handleClick}>
          PROGRAME UNA CONSULTA
        </button>
      </div>
    </section>
  );
};

export default YouLookingAt;
