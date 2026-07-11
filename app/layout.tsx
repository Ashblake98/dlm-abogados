import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets:["latin"],
  variable:"--font-title",
});


const inter = Inter({
  subsets:["latin"],
  variable:"--font-body",
});

export const metadata: Metadata = {
  title: "DLM Abogados | Asesoría Jurídica en Guatemala",
  description:
    "DLM Abogados brinda asesoría legal, representación jurídica y servicios notariales en Guatemala con ética, compromiso y atención personalizada.",
  keywords: [
    "abogados Guatemala",
    "asesoría jurídica Guatemala",
    "abogada Guatemala",
    "servicios notariales",
    "derecho penal",
    "derecho mercantil",
  ],

  manifest: "/manifest.json",

openGraph: {
    title: "DLM Abogados | Soluciones Jurídicas",
    description:
      "Protegemos sus derechos con asesoría legal profesional.",
    type: "website",
    images:[
      {
        url:"/og-image.jpg",
        width:1200,
        height:630,
        alt:"DLM Abogados"
      }
    ]
},
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">

      <body className={`${playfair.variable} ${inter.variable}`}>

        {children}

      </body>

    </html>
  );
}

