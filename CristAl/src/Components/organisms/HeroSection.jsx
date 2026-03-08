export default function Hero() {
  return (
    <section aria-labelledby="hero_title" className="py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200">
            Trato humano, atención clara y buenas prácticas, eso es lo que nos caracteriza en la clínica CristAl
          </p>

          <h1 id="hero_title" className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sonríe con confianza desde la primera cita
          </h1>

          <p className="mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Diagnóstico honesto, procedimientos cuidadosos y con seguimiento.
            <br />
            Te explicamos opciones y costos con claridad desde un inicio.
          </p>

          <ul
            className="mt-6 list-none space-y-2 p-0 text-slate-700 dark:text-slate-200"
            aria-label="Beneficios principales"
          >
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" aria-hidden="true" />
              Valoración y plan de tratamiento personalizado
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" aria-hidden="true" />
              Confort, higiene y seguridad
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-600" aria-hidden="true" />
              Atención inclusiva, sin juicios y comunicación clara
            </li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#appointments "
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
              aria-label="Agendar cita"
            >
              Agendar cita
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900/60"
              aria-label="Ver servicios"
            >
              Ver servicios
            </a>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Indicadores de la clínica">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <dt className="text-sm font-bold">Horarios</dt>
              <dd className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Lunes a Viernes
                <br />
                9:00 AM - 4:30 PM
                <br />
                Sábado
                <br />
                9:00 AM - 2:00 PM
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <dt className="text-sm font-bold">Atención</dt>
              <dd className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Con valoración para un mejor diagnóstico
              </dd>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <dt className="text-sm font-bold">Enfoque</dt>
              <dd className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Preventivo: atender a tiempo reduce intervenciones futuras
              </dd>
            </div>
          </dl>
        </div>

        <figure className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
            <img
              src="/assets/img/blanqueamiento.jpeg"
              alt="Equipo de blanqueamiento dental"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">Tip:</strong>{" "}
            La prevención reduce costos a largo plazo. Agenda una valoración antes de que algo pequeño se convierta en un problema mayor.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}