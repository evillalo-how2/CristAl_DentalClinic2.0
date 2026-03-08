import SectionHeader from "../molecule/SectionHeader";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-12" aria-labelledby="testimonios_title">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          title="Testimonios"
          subtitle="Lo que más valoran las personas: claridad, confianza y resultados."
        />

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <blockquote className="text-sm text-slate-700 dark:text-slate-200">
              "Me explicaron todo antes de iniciar. Salí tranquila y con un plan claro para mis cuidados post operatorios."
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Alicia
            </figcaption>
          </figure>

          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <blockquote className="text-sm text-slate-700 dark:text-slate-200">
              "Me trataron sin presiones para realizarme otros procedimientos, muy profesionales, y el trato fue excelente."
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Armando
            </figcaption>
          </figure>

          <figure className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <blockquote className="text-sm text-slate-700 dark:text-slate-200">
              "Seguimiento y recomendaciones reales. Se nota la experiencia. Respetaron las fechas agendadas y me llamaron un par de días antes para confirmar."
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Francisco
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}