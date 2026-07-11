import {
  MessageCircle,
  Search,
  Scale,
  CheckCircle
} from "lucide-react";


const steps = [
  {
    icon:<MessageCircle size={35}/>,
    title:"Consulta Inicial",
    text:"Escuchamos su situación y conocemos los detalles de su caso."
  },
  {
    icon:<Search size={35}/>,
    title:"Análisis Legal",
    text:"Evaluamos las opciones jurídicas y posibles soluciones."
  },
  {
    icon:<Scale size={35}/>,
    title:"Estrategia",
    text:"Diseñamos una estrategia personalizada para proteger sus derechos."
  },
  {
    icon:<CheckCircle size={35}/>,
    title:"Seguimiento",
    text:"Acompañamos cada etapa del proceso legal."
  }
];


export default function Process(){

return(

<section className="process section">

<div className="container">


<div className="section-title">

<span>Nuestro proceso</span>

<h2>
¿Cómo trabajamos?
</h2>

<p>
Un proceso claro, profesional y enfocado en resultados.
</p>

</div>



<div className="process-grid">


{steps.map((step,index)=>(

<div 
key={index}
className="process-card"
data-aos="fade-up"
data-aos-delay={index*150}
>


<div className="process-icon">
{step.icon}
</div>


<h3>
{step.title}
</h3>


<p>
{step.text}
</p>


</div>


))}


</div>


</div>

</section>

)

}