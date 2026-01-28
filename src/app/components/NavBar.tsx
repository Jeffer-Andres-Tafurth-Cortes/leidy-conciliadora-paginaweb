"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${styles.navbar} ${styles.scrolled}`}
      style={{
        position: "fixed",
        top: "30px",
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <nav className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={`${styles.logo} ${styles.dark}`}>
          <Image
            src="/logoleidy.jpg"
            alt="Leidy Tirado, abogada conciliadora en Colombia"
            width={80}
            height={80}
            priority
          />
        </Link>

        {/* MENÚ DESKTOP / MOBILE */}
        <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/perfil" onClick={() => setMenuOpen(false)}>
              ABOGADA CONCILIADORA
            </Link>
          </li>
          <li>
            <Link href="/areas-practica" onClick={() => setMenuOpen(false)}>
              SERVICIOS LEGALES
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className={styles.ctaButton}
          aria-label="Programar consulta con abogada conciliadora"
        >
          CONSULTA LEGAL
        </Link>

        {/* BOTÓN HAMBURGUESA */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}
