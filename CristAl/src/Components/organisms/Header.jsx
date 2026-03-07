export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#contenido" className="flex items-center gap-3" aria-label="Ir al inicio">
          <div className="h-10 w-10 rounded-2xl bg-brand-600" aria-hidden="true" />
          <span className="text-sm font-extrabold tracking-tight">Clínica Dental CristAl</span>
        </a>

        <nav className="flex items-center gap-3" aria-label="Navegación principal">
          <a className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900/60" href="#servicios">
            Servicios
          </a>
          <a className="rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-900/60" href="#por_que">
            ¿Por qué elegirnos?
          </a>
          <a
            className="rounded-xl bg-brand-600 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
            href="#cita"
            aria-label="Agendar cita"
          >
            Agendar cita
          </a>
        </nav>
      </div>
    </header>
  );
}