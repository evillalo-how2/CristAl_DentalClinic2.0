import SectionHeader from "../molecule/SectionHeader";
import TreatmentCard from "../molecule/TreatmentCards";
import { treatments } from "../../data/procedures";
import { treatmentImages } from "../../assets/images";
import referralCardImage from "../../assets/img/referral-card.jpeg";

export default function TreatmentGrid() {
  const orderedTreatments = [...treatments].sort((a, b) => {
    if (a.id === "valoracion") return -1;
    if (b.id === "valoracion") return 1;
    return 0;
  });

  return (
    <section id="treatments" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tratamientos"
          title="Atención dental para cada necesidad"
          description="Conoce algunos de nuestros tratamientos más solicitados y resuelve tus dudas antes de agendar."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {orderedTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              {...treatment}
              image={treatmentImages?.[treatment.imageKey]}
            />
          ))}

          <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
            <div className="h-52 w-full overflow-hidden bg-slate-100 sm:h-56 dark:bg-slate-900">
              <img
                src={referralCardImage}
                alt="Dos colegas dentistas revisando un caso clínico para posible referencia con especialista"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  ¿No encuentras lo que buscas?
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Pregúntanos de todas formas. Si lo que necesitas requiere una
                  especialidad o un enfoque diferente, podemos orientarte o
                  referirte con algún colega de confianza.
                </p>

                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-200">
                  <li>Te orientamos según tu caso</li>
                  <li>Valoramos si corresponde a otra especialidad</li>
                  <li>Podemos canalizarte con un colega de confianza</li>
                </ul>

                <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-slate-500 dark:text-slate-400">
                      Atención
                    </dt>
                    <dd className="font-semibold text-slate-900 dark:text-white">
                      Valoración inicial
                    </dd>
                  </div>

                  <div>
                    <dt className="text-slate-500 dark:text-slate-400">
                      Canalización
                    </dt>
                    <dd className="font-semibold text-slate-900 dark:text-white">
                      Según tu caso
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}