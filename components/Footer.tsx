import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">

          <Image
            src="/logo-dlm.png"
            alt="DLM Abogados"
            width={70}
            height={70}
          />

          <h2>DLM Abogados</h2>

          <p>
            Soluciones jurídicas integrales con ética,
            profesionalismo y compromiso para proteger
            los derechos de nuestros clientes.
          </p>

        </div>

        <div>

          <h3>Enlaces</h3>

          <ul>

            <li><a href="#inicio">Inicio</a></li>

            <li><a href="#servicios">Servicios</a></li>

            <li><a href="#nosotros">Nosotros</a></li>

            <li><a href="#contacto">Contacto</a></li>

          </ul>

        </div>

        <div>

          <h3>Contacto</h3>

          <ul>

            <li>

              <Phone size={18}/>

              +502 5595-7959

            </li>

            <li>

              <Mail size={18}/>

              lisethdl12@gmail.com

            </li>

            <li>

              <MapPin size={18}/>

              Guatemala

            </li>

          </ul>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 DLM Abogados · Todos los derechos reservados.

      </div>

    </footer>
  );
}