import { faMailForward } from "@fortawesome/free-solid-svg-icons";
import styles from "./BioSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Perfil() {
  return (
    <section className={styles.wrapper}>
      {/* COLUMNA IZQUIERDA */}
      <div className={styles.leftColumn}>
        <div className={styles.photoFrame}>
          <img src="/doc-leidy.jpg" alt="Doc. Leidy" />
        </div>

        <div className={styles.contactBox}>
          <h3>Contáctenos</h3>
          <p>¿Preguntas? Será un placer ayudarle.</p>

          <a href="mailto:contacto@correo.com" className={styles.contactButton}>
            <FontAwesomeIcon icon={faMailForward} /> Enviar Correo Electrónico
          </a>
        </div>
      </div>

      {/* COLUMNA DERECHA */}
      <div className={styles.rightColumn}>
        <p className={styles.bioText}>
          La Abogada Leidy obtuvo su B.A. (Diploma Universitario) con énfasis en
          Ciencias Políticas y Estudios Latino-Americanos...
        </p>

        <h3 className={styles.sectionTitle}>Licencias:</h3>
        <p className={styles.bioText}>
          La Abogada Leidy está certificada por la Corte Suprema...
        </p>

        <h3 className={styles.sectionTitle}>Experiencia:</h3>
        <p className={styles.bioText}>
          En la actualidad, la Abogada Leidy se especializa en casos...
        </p>

        <h3 className={styles.sectionTitle}>Idiomas:</h3>
        <p className={styles.bioText}>Español e Inglés</p>

        <h3 className={styles.sectionTitle}>Asociaciones Profesionales:</h3>
        <ul className={styles.list}>
          <li>Miembro de la Junta Directiva...</li>
          <li>Co-Director del Comité de Enlace...</li>
          <li>Co-Director del Comité de Enlace en la Oficina de Asilos...</li>
        </ul>
      </div>
    </section>
  );
}
