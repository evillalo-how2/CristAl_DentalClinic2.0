import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
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
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <button
              type="button"
              onClick={goHome}
              className="text-left"
              aria-label="Volver al inicio"
            >
              <span className="text-lg font-extrabold text-[var(--color-heading)]">
                Clínica Dental CristAl
              </span>
            </button>

            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-text-soft)]">
              Atención dental profesional con enfoque preventivo, comunicación
              clara y acompañamiento en cada etapa de tu tratamiento.
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="text-sm font-semibold text-[var(--color-heading)]">
              Navegación
            </p>

            <nav
              className="mt-4 flex flex-col gap-3"
              aria-label="Navegación del pie de página"
            >
              <button
                type="button"
                onClick={() => goToSection("treatments")}
                className="text-left text-sm font-medium text-[var(--color-text-soft)] transition hover:text-[var(--color-heading)]"
                aria-label="Ir a tratamientos"
              >
                Tratamientos
              </button>

              <button
                type="button"
                onClick={() => goToSection("appointments")}
                className="text-left text-sm font-medium text-[var(--color-text-soft)] transition hover:text-[var(--color-heading)]"
                aria-label="Ir a agendar cita"
              >
                Agendar cita
              </button>

              <button
                type="button"
                onClick={goHome}
                className="text-left text-sm font-medium text-[var(--color-text-soft)] transition hover:text-[var(--color-heading)]"
                aria-label="Ir al inicio"
              >
                Inicio
              </button>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-border)] pt-6">
          <p className="text-xs text-[var(--color-text-soft)]">
            © 2026 Clínica Dental CristAl. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}