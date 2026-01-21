"use client";

import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMailForward,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const handleWhatsAppClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573213525962&text&type=phone_number&app_absent=0",
    "_blank",
  );
};

const handleInstagramClick = () => {
  window.open("https://www.instagram.com/leidytuconciliadora/", "_blank");
};

export default function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className={styles.footer}>
      {/* TOP SECTION */}
      <div className={styles.topSection}>
        {/* LOGO */}
        <Link
          href="https://www.instagram.com/leidytuconciliadora/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.logoSection}>
            <Image
              src="/logo-leidy1.jpg"
              alt="Dra. Leidy Tirado"
              className={styles.logo}
              width={110}
              height={110}
              priority
            />
            <p className={styles.subtitle}>LEIDY TIRADO</p>
          </div>
        </Link>

        {/* CONTACTO */}
        <div className={styles.contactSection}>
          <h3 className={styles.title}>CONTÁCTANOS</h3>
          <ul className={styles.contactList}>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              Calle 98 # 22-64 OF 716
            </li>
            <li>
              <FontAwesomeIcon icon={faMailForward} />
              <a href="mailto:" className={styles.link}>
                correo Doc. Leidy
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              +57 321 3525962
            </li>
          </ul>
        </div>

        {/* INSTAGRAM FEED */}
        <div className={styles.instagramFeed}>
          <h3 className={styles.title}>FEED DE INSTAGRAM</h3>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/leidytuconciliadora/"
            data-instgrm-version="14"
          ></blockquote>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        © {new Date().getFullYear()} Abogada Leidy Tirado
      </div>

      {/* BOTONES FIJOS */}
      <div className={styles.fixedButtons}>
        <button
          className={styles.instagramBtn}
          aria-label="Instagram"
          onClick={handleInstagramClick}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </button>

        <button
          className={styles.phoneBtn}
          aria-label="WhatsApp"
          onClick={handleWhatsAppClick}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </footer>
  );
}
