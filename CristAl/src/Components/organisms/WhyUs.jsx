import SectionHeader from "../molecule/SectionHeader";

export default function WhyUs() {
  return (
    <section id="por_que" className="py-12" aria-labelledby="porque_title">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          title="Por qué elegirnos"
          subtitle="Una experiencia clínica pensada para mejorar tu salud dental a largo plazo y reducir tu dolor a corto plazo."
        />

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-bold">Comunicación clara</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Explicamos el diagnóstico y tus opciones con ejemplos claros y lenguaje sencillo.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-bold">Higiene y protocolos</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Rutinas de limpieza y preparación del área con enfoque en seguridad e higiene.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <h3 className="text-lg font-bold">Trato humano e inclusivo</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Atención respetuosa, sin juicios, y adaptada a tus necesidades.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}