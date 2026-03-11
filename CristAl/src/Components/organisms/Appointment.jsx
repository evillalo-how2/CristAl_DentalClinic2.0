import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../molecule/SectionHeader";
import Input from "../atoms/Input";
import Select from "../atoms/Select";

export default function Appointment({ prefillServiceId = "" }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (!prefillServiceId) return;
    setForm((prev) => ({ ...prev, service: prefillServiceId }));
  }, [prefillServiceId]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    navigate("/appointments/summary", {
      state: {
        appointment: form,
      },
    });
  }

  return (
    <section id="appointments" className="py-12" aria-labelledby="appointment_title">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          title="Agenda tu cita"
          subtitle="Cuéntanos tu motivo de consulta. Te respondemos con la mejor disponibilidad."
        />

        <form
          onSubmit={onSubmit}
          className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          aria-label="Formulario para agendar cita"
        >
          <fieldset className="m-0 border-0 p-0">
            <legend className="text-sm font-bold text-slate-900 dark:text-slate-100">
              Datos de contacto
            </legend>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Input
                id="appt-name"
                label="Nombre"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Tu nombre completo"
                required
                aria-label="Nombre"
              />

              <Input
                id="appt-phone"
                label="Teléfono"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="Ej. 55 1234 5678"
                required
                aria-label="Teléfono"
              />

              <Input
                id="appt-email"
                label="Correo"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="correo@ejemplo.com"
                aria-label="Correo"
              />

              <Select
                id="appt-service"
                label="Servicio"
                value={form.service}
                onChange={(e) => updateField("service", e.target.value)}
                required
                aria-label="Servicio"
              >
                <option value="">Selecciona una opción</option>
                <option value="valoracion">Valoración</option>
                <option value="operatoria">Operatoria</option>
                <option value="coronas">Coronas</option>
                <option value="blanqueamiento">Blanqueamiento</option>
                <option value="exodoncias">Exodoncias</option>
              </Select>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold" htmlFor="appt-message">
                  Cuéntanos qué pasa
                </label>
                <textarea
                  id="appt-message"
                  className="mt-1 min-h-[110px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={4}
                  placeholder="Describe tu caso (dolor, sensibilidad, caries, etc.)"
                  aria-label="Mensaje"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus:ring-slate-500 dark:focus:ring-offset-slate-950"
                aria-label="Enviar solicitud"
              >
                Enviar solicitud
              </button>

              <p className="text-xs text-slate-600 dark:text-slate-300">
                <strong>
                  Al enviar, aceptas que te contactemos para confirmar disponibilidad.
                </strong>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}