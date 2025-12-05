import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      {/* Información izquierda */}
      <div className={styles.leftSection}>
        <span className={styles.infoItem}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
          Calle 98 # 22-64 OF 716 Bogotá D.C.
        </span>
        <span className={styles.infoItem}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a
            href="mailto:info.pravice@abogadosespecialistas.com.co"
            className={styles.emailLink}
          >
            info.pravice@abogadosespecialistas.com.co
          </a>
        </span>
        <span className={styles.infoItem}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          (601)3827477
        </span>
      </div>

      {/* Redes sociales y iconos derecha */}
      <div className={styles.rightSection}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <FontAwesomeIcon icon={faTiktok} className={styles.socialIcon} />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} className={styles.socialIcon} />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialIcon} />
        </a>
        <a
          href=""
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
