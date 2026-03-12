import { useLocation, useNavigate } from "react-router-dom";
import { logoImg } from "../../assets/images";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  function goHome() {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    sessionStorage.setItem("pendingScrollTarget", "content");
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
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-3 text-left"
          aria-label="Ir al inicio"
        >
          <img
            src={logoImg}
            alt="Logo de Clínica Dental CristAl"
            className="h-10 w-10 rounded-full object-contain"
            loading="eager"
            decoding="async"
          />

          <span className="text-lg font-extrabold text-[var(--color-heading)]">
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
            className="text-sm font-semibold text-[var(--color-text)] transition hover:text-[var(--color-heading)]"
            aria-label="Ir a tratamientos"
          >
            Tratamientos
          </button>

          <button
            type="button"
            onClick={() => goToSection("appointments")}
            className="inline-flex items-center rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
            aria-label="Ir a agendar cita"
          >
            Agendar cita
          </button>
        </nav>
      </div>
    </header>
  );
}