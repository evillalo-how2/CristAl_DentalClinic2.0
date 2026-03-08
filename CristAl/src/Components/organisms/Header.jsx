export default function Header() {
  return (
    <header className= "sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#content" className="flex items-center gap-3" aria-label="Ir al inicio">
          <div className="h-10 w-10 rounded-2xl bg-brand-600" aria-hidden="true" />
          <span className="text-sm font-extrabold tracking-tight">Clínica Dental CristAl</span>
        </a>

        <nav className="flex items-center gap-3" aria-label="Navegación principal">
          <a className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900/60"href="#services">
            Servicios
          </a>
          <a className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900/60" href="#why_us">
            ¿Por qué elegirnos?
          </a>
          <a
            className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900/60"
            href="#appointments"
            aria-label="Agendar cita"
          >
            Agendar cita
          </a>
        </nav>
      </div>
    </header>
  );
}