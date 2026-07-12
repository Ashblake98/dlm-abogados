"use client";

import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsappButton() {

  const phone = "50255957959";

  const message =
    "Hola, deseo solicitar asesoría jurídica.";

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
    >

      <FaWhatsapp size={34} />

    </a>
  );
}