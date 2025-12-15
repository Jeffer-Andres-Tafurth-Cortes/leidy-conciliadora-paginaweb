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
            alt="logo leidy1"
            width={80}
            height={80}
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
              PERFIL ABOGADA
            </Link>
          </li>
          <li>
            <Link href="/areas-practica" onClick={() => setMenuOpen(false)}>
              ÁREAS DE PRÁCTICA
            </Link>
          </li>
        </ul>

        <Link href="/contact">
          <button className={styles.ctaButton}>PROGRAME UNA CONSULTA</button>
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
