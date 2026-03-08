import { useState } from "react";
import Header from "./Components/organisms/Header";
import Input from "./Components/atoms/Input";
import Select from "./Components/atoms/Select";
import SectionHeader from "./Components/molecule/SectionHeader";
import TreatmentGrid from "./Components/organisms/TreatmentGrid";
import { treatments } from "./data/procedures";
import Hero from "./Components/organisms/HeroSection";

import './App.css';

function App() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <>
      <Header />
        <div style={{ padding: 24 }}>
        <h1>Atoms test</h1>

        <div style={{ marginTop: 16 }}>
          <Input
            id="name"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Write something"
            aria-label="Name input"
          />
        </div>
        <Hero />
        <div style={{ marginTop: 16 }}>
          <Select
            id="service"
            label="Servicio"
            value={service}
            onChange={(e) => setService(e.target.value)}
            aria-label="Service select"
          >
            <option value="">Seleccione una opción</option>
            <option value="valoracion">Valoración</option>
            <option value="operatoria">Operatoria</option>
            <option value="blanqueamiento">Blanqueamiento</option>
            <option value="coronas">Coronas</option>
            <option value="exodoncias">Exodoncias</option>
          </Select>
        </div>

        <p style={{ marginTop: 16 }}>
          Debug: <strong>{name || "(empty)"}</strong> /{" "}
          <strong>{service || "(none)"}</strong>
        </p>
      </div>
            <main className="min-h-dvh bg-white p-6 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Treatments"
            subtitle="Test cards"
          />

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Debug message: <strong>{msg || "(none)"}</strong>
          </p>

          <TreatmentGrid
            items={treatments}
            onAsk={(t, kind) => setMsg(`User clicked: ${t.name} (${kind})`)}
          />
          </div>
                  <section id="por_que" className="mt-10" aria-label="Por qué elegirnos (placeholder)">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-bold tracking-tight">¿Por qué elegirnos?</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Work in progress for this section
              </p>
            </div>
          </section>

          <section id="cita" className="mt-10" aria-label="Cita (placeholder)">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <h2 className="text-2xl font-bold tracking-tight">Agenda tu cita</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Work in progress for this form.
              </p>
            </div>
          </section>
      </main>
    </>
  )
}

export default App
