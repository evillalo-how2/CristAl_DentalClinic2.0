import { useState } from 'react'
import Button from './Components/atoms/Button' 
import Input from './Components/atoms/Input'
import Select from './Components/atoms/Select'
import SectionHeader from "./Components/molecule/SectionHeader";
import TreatmentCard from "./Components/molecule/TreatmentCards";

import './App.css'

function App() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");
  return (
    <>
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

        <div style={{ marginTop: 16 }}>
          <Select
            id="service"
            label="Servicio"
            value={service}
            onChange={(e) => setService(e.target.value)}
            aria-label="Service select"
          >
            <option value="">Select an option</option>
            <option value="valoracion">Valoración</option>
            <option value="operatoria">Operatoria</option>
            <option value="coronas">Coronas</option>
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

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <TreatmentCard
              name="Blanqueamiento"
              short="Aclarado dental con gel y luz UV."
              duration="60–90 min"
              price="$1,800–$3,500 MXN"
              onAsk={() => setMsg("User clicked: Blanqueamiento")}
            />

            <TreatmentCard
              name="Coronas"
              short="Recubrimiento total para proteger piezas debilitadas."
              duration="2 visits"
              price="$4,500–$12,000 MXN"
              onAsk={() => setMsg("User clicked: Coronas")}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
