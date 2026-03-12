import { useEffect, useState } from "react";
import SectionHeader from "../molecule/SectionHeader";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import Booking from "./Booking";

export default function Appointment({ prefillServiceId = "" }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [showBooking, setShowBooking] = useState(false);
  const [submittedAppointment, setSubmittedAppointment] = useState(null);

  useEffect(() => {
    if (!prefillServiceId) return;
    setForm((prev) => ({ ...prev, service: prefillServiceId }));
  }, [prefillServiceId]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    setSubmittedAppointment(form);
    setShowBooking(true);

    window.requestAnimationFrame(() => {
      document.getElementById("booking")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <section id="appointments" className="py-12" aria-labelledby="appointment_title">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          title="Agenda tu cita"
          subtitle="Cuéntanos tu motivo de consulta. Después podrás elegir una fecha y hora disponibles."
        />

        <form
          onSubmit={onSubmit}
          className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-sm"
          aria-label="Formulario para agendar cita"
        >
        <div className="max-w-3xl">
        <p className="text-sm font-semibold text-[var(--color-text-soft)]">
          Paso 1
        </p>
       </div>

          <fieldset className="m-0 border-0 p-0">
            <legend className="text-sm font-bold text-[var(--color-heading)]">
                      <h3
          id="booking_title"
          className="mt-2 text-2xl font-bold text-[var(--color-heading)]"
        >
          Llenar el formulario con tu información de contacto
        </h3>
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
                <label
                  className="text-sm font-semibold text-[var(--color-heading)]"
                  htmlFor="appt-message"
                >
                  Cuéntanos qué pasa
                </label>
                <textarea
                  id="appt-message"
                  className="mt-1 min-h-[110px] w-full rounded-xl border border-[var(--color-border)] bg-white px-3 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-soft)]"
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
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                aria-label="Continuar al calendario"
              >
                Continuar al calendario
              </button>

              <p className="text-xs text-[var(--color-text-soft)]">
                <strong>
                  Primero capturamos tus datos y después podrás elegir fecha y hora.
                </strong>
              </p>
            </div>
          </fieldset>
        </form>

        {showBooking && submittedAppointment ? (
          <Booking appointment={submittedAppointment} />
        ) : null}
      </div>
    </section>
  );
}