import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Users,
} from "lucide-react";

const items = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Confidencialidad",
    text: "Protegemos la información de cada cliente con absoluta discreción."
  },
  {
    icon: <Clock3 size={40} />,
    title: "Respuesta Rápida",
    text: "Atención oportuna para resolver sus necesidades legales."
  },
  {
    icon: <BadgeCheck size={40} />,
    title: "Experiencia",
    text: "Asesoría profesional basada en ética, conocimiento y compromiso."
  },
  {
    icon: <Users size={40} />,
    title: "Atención Personalizada",
    text: "Cada caso recibe un análisis individual para ofrecer la mejor solución."
  }
];

export default function WhyChoose() {
  return (
    <section className="why section" id="nosotros">

      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <span>¿Por qué elegirnos?</span>
          <h2>DLM Abogados</h2>
          <p>
            Nuestra prioridad es brindar confianza, transparencia y resultados.
          </p>
        </div>

        <div className="why-grid">

          {items.map((item, i) => (

            <div
              key={i}
              className="why-card"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}