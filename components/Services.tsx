import {
  Scale,
  Briefcase,
  FileText,
  Users,
  Building2,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Scale size={38} />,
    title: "Derecho Penal",
    text: "Defensa técnica, representación en procesos penales y asesoría jurídica especializada.",
  },
  {
    icon: <Briefcase size={38} />,
    title: "Derecho Mercantil",
    text: "Constitución de empresas, contratos mercantiles y asesoría para negocios.",
  },
  {
    icon: <FileText size={38} />,
    title: "Servicios Notariales",
    text: "Autenticaciones, escrituras públicas, actas notariales y legalizaciones.",
  },
  {
    icon: <Users size={38} />,
    title: "Derecho de Familia",
    text: "Divorcios, pensiones alimenticias, guarda y custodia y procesos familiares.",
  },
  {
    icon: <Building2 size={38} />,
    title: "Derecho Civil",
    text: "Contratos, demandas civiles, obligaciones y recuperación de bienes.",
  },
  {
    icon: <ShieldCheck size={38} />,
    title: "Asesoría Jurídica",
    text: "Consultoría preventiva para personas, empresas y organizaciones.",
  },
];

export default function Services() {
  return (
    <section className="services section" id="servicios">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <span>Nuestros Servicios</span>
          <h2>Áreas de Práctica</h2>
          <p>
            Brindamos soluciones jurídicas con ética, compromiso y atención
            personalizada.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}