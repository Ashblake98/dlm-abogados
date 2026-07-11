import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import WhatsappButton from "@/components/WhatsappButton";
import Footer from "@/components/Footer";
import Mercantil from "@/components/Mercantil";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <WhyChoose />

        <Stats />

        <Process />

        <Mercantil />

        <Contact />
      </main>

      <WhatsappButton />

      <Footer />
    </>
  );
}