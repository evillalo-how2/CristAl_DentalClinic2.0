import { useState } from 'react'
import Button from './Components/atoms/Button' 
import Input from './Components/atoms/Input'
import Select from './Components/atoms/Select'

import './App.css'

function App() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [count, setCount] = useState(0);

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
    </>
  )
}

export default App
