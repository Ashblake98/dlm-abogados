"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`${styles.navbar} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo-dlm.png"
            alt="DLM Abogados"
            width={55}
            height={55}
          />

          <div>
            <h3>DLM Abogados</h3>
            <span>Soluciones Jurídicas</span>
          </div>
        </Link>

        <nav
          className={`${styles.nav} ${
            menuOpen ? styles.active : ""
          }`}
        >
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#nosotros" onClick={closeMenu}>
            Nosotros
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>

          <a
            href="https://wa.me/50255957959"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileButton}
          >
            WhatsApp
          </a>
        </nav>

        <a
          href="https://wa.me/50255957959"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          WhatsApp
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}