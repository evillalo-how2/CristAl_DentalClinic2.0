import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/organisms/Header";
import HeroSection from "./Components/organisms/HeroSection";
import WhyUs from "./Components/organisms/WhyUs";
import Testimonials from "./Components/organisms/Testimonials";
import Appointment from "./Components/organisms/Appointment";
import Footer from "./Components/organisms/Footer";
import TreatmentGrid from "./Components/organisms/TreatmentGrid";
import ChatbotWidget from "./Components/organisms/ChatbotWidget";
import AppointmentSummary from "./Components/pages/AppointmentSummary"

function HomePage({ chatSeed, onSchedule, prefillServiceId, setChatSeed }) {
  return (
    <>
      <Header />

      <main
        id="content"
        className="min-h-dvh bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
      >
        <HeroSection />
        <TreatmentGrid
          onAsk={(treatment, topic) =>
            setChatSeed({ treatmentId: treatment.id, topic })
          }
        />
        <WhyUs />
        <Testimonials />
        <Appointment prefillServiceId={prefillServiceId} />
        <Footer />
      </main>

      <ChatbotWidget seed={chatSeed} onSchedule={onSchedule} />
    </>
  );
}

function SummaryPage() {
  return (
    <>
      <Header />
      <AppointmentSummary />
      <Footer />
    </>
  );
}

function App() {
  const [chatSeed, setChatSeed] = useState(null);
  const [prefillServiceId, setPrefillServiceId] = useState("");

  function handleSchedule(treatmentId) {
    setPrefillServiceId(treatmentId || "");
    document.getElementById("appointments")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            chatSeed={chatSeed}
            onSchedule={handleSchedule}
            prefillServiceId={prefillServiceId}
            setChatSeed={setChatSeed}
          />
        }
      />
      <Route path="/appointments/summary" element={<SummaryPage />} />
    </Routes>
  );
}

export default App;