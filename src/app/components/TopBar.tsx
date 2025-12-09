import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      {/* Información izquierda */}
      <div className={styles.leftSection}>
        <span className={styles.infoItem}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a
            href="mailto:info.pravice@abogadosespecialistas.com.co"
            className={styles.emailLink}
          >
            correo doc. Leidy
          </a>
        </span>
        <span className={styles.infoItem}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          +57 321 3525962
        </span>
      </div>

      {/* Redes sociales y iconos derecha */}
      <div className={styles.rightSection}>
        <a
          href="https://www.instagram.com/leidytuconciliadora/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
