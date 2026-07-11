"use client";

import { useState } from "react";

export default function Contact(){

const [form,setForm]=useState({
 name:"",
 phone:"",
 message:""
});


function sendWhatsapp(){

const text =
`Hola, soy ${form.name}.
Mi teléfono es: ${form.phone}.

Consulta:
${form.message}`;


const url =
`https://wa.me/50255957959?text=${encodeURIComponent(text)}`;


window.open(url,"_blank");

}


return(

<section className="section" id="contacto">

<div className="section-title">

<span>Contacto</span>

<h2>Solicite su asesoría</h2>

<p>
Estamos para ayudarle con soluciones jurídicas profesionales.
</p>

</div>


<div className="contact-form">


<input
placeholder="Nombre completo"
value={form.name}
onChange={(e)=>
setForm({...form,name:e.target.value})
}
/>


<input
placeholder="Número de teléfono"
value={form.phone}
onChange={(e)=>
setForm({...form,phone:e.target.value})
}
/>


<textarea

placeholder="Escriba su consulta"

rows={5}

value={form.message}

onChange={(e)=>
setForm({...form,message:e.target.value})
}

/>


<button onClick={sendWhatsapp}>

Enviar WhatsApp

</button>

<div className="map-container">

<iframe
src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d482.05706520735697!2d-91.51321359029723!3d14.855729562688863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sgt!4v1783751868165!5m2!1ses!2sgt"
loading="lazy"
></iframe>

</div>
</div>


</section>

)

}