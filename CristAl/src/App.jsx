import { useState } from "react";
import { treatments } from "./data/procedures";
import Header from "./Components/organisms/Header";
import HeroSection from "./Components/organisms/HeroSection";
import WhyUs from "./Components/organisms/WhyUs";
import Testimonials from "./Components/organisms/Testimonials";
import Appointment from "./Components/organisms/Appointment";
import Footer from "./Components/organisms/Footer";
import SectionHeader from "./Components/molecule/SectionHeader";
import TreatmentGrid from "./Components/organisms/TreatmentGrid";
import ChatbotWidget from "./Components/organisms/ChatbotWidget";

function App() {
  const [chatSeed, setChatSeed] = useState(null);
  const [prefillServiceId, setPrefillServiceId] = useState("");

  function handleSchedule(treatmentId) {
    setPrefillServiceId(treatmentId || "");
    document.getElementById("cita")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header />

      <main
        id="contenido"
        className="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
      >
        <HeroSection />

        <section id="servicios" className="py-12" aria-labelledby="servicios_title">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              title="Servicios principales"
              subtitle="Procedimientos comunes con enfoque preventivo. Priorizamos tu bienestar y tu salud a largo plazo."
            />

            <TreatmentGrid
              items={treatments}
              onAsk={(t, kind) => setChatSeed({ treatmentId: t.id, topic: kind })}
            />
          </div>
        </section>

        <WhyUs />
        <Testimonials />
        <Appointment prefillServiceId={prefillServiceId} />
        <Footer />

        
      </main>
      <ChatbotWidget seed={chatSeed} onSchedule={handleSchedule} />
    </>
  );
}

export default App;