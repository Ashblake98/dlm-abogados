"use client";

const stats = [
  { number: "500+", title: "Casos Atendidos" },
  { number: "10+", title: "Años de Experiencia" },
  { number: "98%", title: "Clientes Satisfechos" },
  { number: "100%", title: "Compromiso" },
];

export default function Stats() {
  return (
    <section className="stats">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div
              key={index}
              className="stat-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h2>{item.number}</h2>
              <p>{item.title}</p>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}