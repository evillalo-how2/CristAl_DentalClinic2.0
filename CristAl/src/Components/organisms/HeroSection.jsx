import { useLocation, useNavigate } from "react-router-dom";
import { logoImg } from "../../assets/images";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

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
    <section aria-labelledby="hero_title" className="py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-sm">
            Trato humano, atención clara y buenas prácticas, eso es lo que nos
            caracteriza en la clínica CristAl
          </p>

          <h1
            id="hero_title"
            className="mt-5 text-4xl font-extrabold tracking-tight text-[var(--color-heading)] sm:text-5xl"
          >
            Sonríe con confianza desde la primera cita
          </h1>

          <p className="mt-4 max-w-xl text-lg text-[var(--color-text)]">
            Diagnóstico honesto, procedimientos cuidadosos y con seguimiento.
            <br />
            Te explicamos opciones y costos con claridad desde un inicio.
          </p>

          <ul
            className="mt-6 list-none space-y-2 p-0 text-[var(--color-text)]"
            aria-label="Beneficios principales"
          >
            <li className="flex gap-3">
              <span
                className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              Valoración y plan de tratamiento personalizado
            </li>
            <li className="flex gap-3">
              <span
                className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              Confort, higiene y seguridad
            </li>
            <li className="flex gap-3">
              <span
                className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              Atención inclusiva, sin juicios y comunicación clara
            </li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => goToSection("appointments")}
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-hover)]"
              aria-label="Agendar cita"
            >
              Agendar cita
            </button>

            <button
              type="button"
              onClick={() => goToSection("treatments")}
              className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-heading)] transition hover:bg-[var(--color-card)]"
              aria-label="Ver tratamientos"
            >
              Ver tratamientos
            </button>
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3" aria-label="Indicadores de la clínica">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <dt className="text-sm font-bold text-[var(--color-heading)]">Horarios</dt>
              <dd className="mt-2 text-sm text-[var(--color-text)]">
                Lunes a Viernes
                <br />
                9:00 AM - 4:30 PM
                <br />
                Sábado
                <br />
                9:00 AM - 2:00 PM
              </dd>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <dt className="text-sm font-bold text-[var(--color-heading)]">Atención</dt>
              <dd className="mt-2 text-sm text-[var(--color-text)]">
                Con valoración para un mejor diagnóstico
              </dd>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <dt className="text-sm font-bold text-[var(--color-heading)]">Enfoque</dt>
              <dd className="mt-2 text-sm text-[var(--color-text)]">
                Preventivo: atender a tiempo reduce intervenciones futuras
              </dd>
            </div>
          </dl>
        </div>

        <figure className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-sm">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[var(--color-card-soft)]">
            <img
              src={logoImg}
              alt="Logo de Clínica Dental CristAl"
              className="h-full w-full object-contain p-6"
              loading="eager"
              decoding="async"
            />
          </div>

          <figcaption className="mt-4 text-sm text-[var(--color-text)]">
            <strong className="text-[var(--color-heading)]">Tip:</strong>{" "}
            La prevención reduce costos a largo plazo. Agenda una valoración antes
            de que algo pequeño se convierta en un problema mayor.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}