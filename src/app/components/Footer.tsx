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
      {/* =======================
          SECCIÓN SUPERIOR
      ======================= */}
      <div className={styles.topSection}>
        {/* LOGO + DESCRIPCIÓN */}
        <div className={styles.logoSection}>
          <Link
            href="/"
            aria-label="Leidy Tirado abogada conciliadora en Colombia"
          >
            <Image
              src="/logo-leidy1.jpg"
              alt="Leidy Tirado, abogada conciliadora en Colombia"
              className={styles.logo}
              width={110}
              height={110}
              priority
            />
          </Link>

          <p className={styles.subtitle}>LEIDY TIRADO</p>

          <p className={styles.description}>
            Abogada conciliadora en derecho, especializada en conciliación
            legal, resolución de conflictos y asesoría jurídica preventiva para
            personas y empresas en Colombia.
          </p>
        </div>

        {/* CONTACTO LEGAL (NAP SEO) */}
        <address className={styles.contactSection}>
          <h3 className={styles.title}>Contacto legal</h3>

          <ul className={styles.contactList}>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              Bogotá, Colombia – Calle 98 #22-64 Oficina 716
            </li>

            <li>
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+573213525962" className={styles.link}>
                +57 321 352 5962
              </a>
            </li>

            <li>
              <FontAwesomeIcon icon={faMailForward} />
              <a href="mailto:contacto@leidytirado.com" className={styles.link}>
                contacto@leidytirado.com
              </a>
            </li>
          </ul>
        </address>

        {/* INSTAGRAM */}
        <div className={styles.instagramFeed}>
          <h3 className={styles.title}>Contenido jurídico en Instagram</h3>

          <p className={styles.instagramText}>
            Publicaciones educativas sobre conciliación legal, derechos,
            resolución de conflictos y asesoría jurídica en Colombia.
          </p>

          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/leidytuconciliadora/"
            data-instgrm-version="14"
          ></blockquote>
        </div>
      </div>

      <hr className={styles.divider} />

      {/* =======================
          SECCIÓN INFERIOR
      ======================= */}
      <div className={styles.bottomSection}>
        © {new Date().getFullYear()} Leidy Tirado – Abogada conciliadora en
        Colombia · Conciliación legal · Resolución de conflictos
      </div>

      {/* =======================
          BOTONES FLOTANTES
      ======================= */}
      <div className={styles.fixedButtons}>
        <button
          className={styles.instagramBtn}
          aria-label="Instagram de Leidy Tirado abogada conciliadora"
          onClick={handleInstagramClick}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </button>

        <button
          className={styles.phoneBtn}
          aria-label="Contactar por WhatsApp a Leidy Tirado abogada conciliadora"
          onClick={handleWhatsAppClick}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </footer>
  );
}
