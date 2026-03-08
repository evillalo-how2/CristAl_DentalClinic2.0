export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-extrabold text-slate-900 dark:text-slate-100">Clínica Dental</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Atención profesional con enfoque preventivo.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 md:justify-end" aria-label="Enlaces del pie de página">
          <a className="text-sm font-semibold text-slate-700 hover:underline dark:text-slate-200" href="#servicios">
            Servicios
          </a>
          <a className="text-sm font-semibold text-slate-700 hover:underline dark:text-slate-200" href="#cita">
            Agendar cita
          </a>
          <a className="text-sm font-semibold text-slate-700 hover:underline dark:text-slate-200" href="#">
            Privacidad
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-5">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          © 2026 Clínica Dental CristAl. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}