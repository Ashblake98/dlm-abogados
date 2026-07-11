import Image from "next/image";

export default function About(){

return(

<section className="about section" id="nosotros">

<div className="container about-grid">


<div className="about-image">

<Image
src="/abogada.jpg"
alt="Abogada DLM"
width={500}
height={600}
/>

</div>



<div className="about-text">

<span>
Sobre nosotros
</span>


<h2>
Compromiso legal con cada cliente
</h2>


<p>
En DLM Abogados brindamos asesoría jurídica personalizada,
basada en ética profesional, responsabilidad y compromiso.
</p>


<p>
Nuestro objetivo es proteger los derechos de nuestros clientes
mediante soluciones legales claras y estratégicas.
</p>


<div className="about-list">

<div>
✓ Atención personalizada
</div>

<div>
✓ Confidencialidad absoluta
</div>

<div>
✓ Estrategias legales efectivas
</div>


</div>


</div>


</div>

</section>

)

}