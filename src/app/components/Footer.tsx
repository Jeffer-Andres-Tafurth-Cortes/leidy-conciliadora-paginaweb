"use client";

import React, { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
    "_blank"
  );
};

const Footer: FC = () => {
  // Cargar script de Instagram una sola vez
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Image
            src="/logopravice.png"
            alt="Logo Pravice Abogados"
            className={styles.logo}
            width={100}
            height={80}
            priority={true}
          />
          <p className={styles.subtitle}>ASESORES ESPECIALIZADOS</p>
        </div>

        {/* Contáctanos */}
        <div className={styles.contactSection}>
          <h3 className={styles.title}>CONTÁCTANOS</h3>
          <ul className={styles.contactList}>
            <li>
              <span aria-label="Dirección" role="img">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              Calle 98 # 22-64 OF 716
            </li>
            <li>
              <span aria-label="Correo" role="img">
                <FontAwesomeIcon icon={faMailForward} />
              </span>
              <a
                href="mailto:info.pravice@abogadosespecialistas.com.co"
                className={styles.link}
              >
                info.pravice@abogadosespecialistas.com.co
              </a>
            </li>
            <li>
              <span aria-label="Teléfono" role="img">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              (311) 465 93 15
            </li>
          </ul>
        </div>

        {/* Síguenos */}
        <div className={styles.followSection}>
          <h3 className={styles.title}>SÍGUENOS</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/praviceabogadosespecializados"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://co.linkedin.com/company/praviceabogadosespecializados"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/pravice_abogados/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@pravice_abogados"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>

        {/* ========================= */}
        {/* FEED DE INSTAGRAM */}
        {/* ========================= */}
        <div className={styles.instagramFeed}>
          <h3 className={styles.title}>FEED DE INSTAGRAM</h3>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/pravice_abogados/"
            data-instgrm-version="14"
            style={{
              background: "#fff",
              border: 0,
              margin: "0 auto",
              padding: 0,
              maxWidth: "350px",
              width: "100%",
            }}
          ></blockquote>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        © {new Date().getFullYear()} Pravice Abogados
      </div>

      {/* Botón fijo de WhatsApp */}
      <div className={styles.fixedButtons}>
        <button
          className={styles.phoneBtn}
          aria-label="Llamar"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
