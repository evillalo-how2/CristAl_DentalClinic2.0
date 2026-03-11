import { Link, useLocation } from "react-router-dom";

const serviceLabels = {
  valoracion: "Valoración",
  operatoria: "Operatoria",
  coronas: "Coronas dentales",
  blanqueamiento: "Blanqueamiento dental",
  exodoncias: "Exodoncias",
};

export default function AppointmentSummary() {
  const location = useLocation();
  const appointment = location.state?.appointment;

  if (!appointment) {
    return (
      <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-5">
          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Resumen de cita
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
              No encontramos información para mostrar
            </h1>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Parece que llegaste aquí sin enviar el formulario. Regresa al inicio
              para capturar tus datos.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Volver al inicio"
              >
                Volver al inicio
              </Link>
            </div>
          </section>
        </div>
      </main>
    );
  }

  const serviceName = serviceLabels[appointment.service] || "No especificado";

  return (
    <main className="min-h-screen bg-slate-50 py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-5">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            Solicitud recibida
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
            Resumen de tu solicitud de cita
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Esta es una vista temporal para confirmar que los datos se han llenado correctamente,
            Sin embargo, la funcion de agendar cita en un calendario real, aun no ha sido implementada.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Nombre
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {appointment.name || "No especificado"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Teléfono
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {appointment.phone || "No especificado"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Correo
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {appointment.email || "No especificado"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Servicio
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {serviceName}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Motivo de consulta
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
              {appointment.message?.trim()
                ? appointment.message
                : "El paciente no agregó información adicional."}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label="Volver al inicio"
            >
              Volver al inicio
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}