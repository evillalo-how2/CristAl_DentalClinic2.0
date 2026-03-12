import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function goHome() {
    navigate("/");
  }

  function goToSection(sectionId) {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    sessionStorage.setItem("pendingScrollTarget", sectionId);
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button
          type="button"
          onClick={goHome}
          className="text-left"
          aria-label="Ir al inicio"
        >
          <span className="text-lg font-extrabold text-slate-900 dark:text-slate-100">
            Clínica Dental CristAl
          </span>
        </button>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navegación principal"
        >
          <button
            type="button"
            onClick={() => goToSection("treatments")}
            className="text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            aria-label="Ir a tratamientos"
          >
            Tratamientos
          </button>

          <button
            type="button"
            onClick={() => goToSection("appointments")}
            className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            aria-label="Ir a agendar cita"
          >
            Agendar cita
          </button>
        </nav>
      </div>
    </header>
  );
}