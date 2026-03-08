import { useState } from "react";
import { treatments } from "./data/procedures";
import Header from "./Components/organisms/Header";
import Hero from "./Components/organisms/HeroSection";
import WhyUs from "./Components/organisms/WhyUs";
import Testimonials from "./Components/organisms/Testimonials";
import AppointmentSection from "./Components/organisms/Appointment";
import Input from "./Components/atoms/Input";
import Select from "./Components/atoms/Select";
import SectionHeader from "./Components/molecule/SectionHeader";
import TreatmentGrid from "./Components/organisms/TreatmentGrid";
import Footer from "./Components/organisms/Footer";

import './App.css';

function App() {
  const [msg, setMsg] = useState("");

  return (
    <>
      <Header />

      <main id="contenido" className="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Hero />

        <section id="servicios" className="py-12" aria-labelledby="servicios_title">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              title="Servicios principales"
              subtitle="Procedimientos comunes con enfoque preventivo. Priorizamos tu bienestar y tu salud a largo plazo."
            />

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Debug message: <strong>{msg || "(none)"}</strong>
            </p>

            <TreatmentGrid
              items={treatments}
              onAsk={(t, kind) => setMsg(`User clicked: ${t.name} (${kind})`)}
            />
          </div>
        </section>

        <WhyChooseUs />
        <Testimonials />
        <AppointmentSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
