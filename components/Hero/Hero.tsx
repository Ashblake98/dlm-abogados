"use client";

import Image from "next/image";
import { Scale, Briefcase, FileText } from "lucide-react";
import styles from "./Hero.module.css";
import { Allura } from "next/font/google";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">

      <div className={styles.container}>

        {/* TEXTO */}

        <div className={styles.content}>

          <span className={styles.badge}>
            ⚖ Asesoría Jurídica Profesional
          </span>

          <h1>
            Abogada
            <br />
            <span className={allura.className}>Liseth De León</span>
          </h1>

          <h2>
            Soluciones jurídicas con ética,
            experiencia y compromiso.
          </h2>

          <p>
            En DLM Abogados brindamos representación legal personalizada,
            confidencial y estratégica para proteger sus derechos y los de
            su familia o empresa.
          </p>

          <div className={styles.buttons}>

            <a href="#contacto" className={styles.primary}>
              Solicitar Asesoría
            </a>

            <a
              href="https://wa.me/50255957959"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              WhatsApp
            </a>

          </div>

          <div className={styles.features}>

            <div>
              <Scale size={20} />
              <span>Derecho Penal</span>
            </div>

            <div>
              <Briefcase size={20} />
              <span>Derecho Mercantil</span>
            </div>

            <div>
              <FileText size={20} />
              <span>Servicios Notariales</span>
            </div>

          </div>

        </div>

        {/* FOTO */}

        <div className={styles.imageSection}>

          <div className={styles.imageCard}>

  <Image
  src="/abogada.jpg"
  alt="Abogada Liseth De León"
  width={680}
  height={900}
  priority
/>
          </div>

          <div className={styles.cardTop}>
            ⚖ Atención Personalizada
          </div>

          <div className={styles.cardBottom}>
            ⭐ Confidencialidad Garantizada
          </div>

        </div>

      </div>

    </section>
  );
}