function ExpandableSection({ title, children }) {
  return (
    <details className="group mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <span className="text-lg leading-none transition-transform duration-200 group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-800">
        {children}
      </div>
    </details>
  );
}

export default function TreatmentCard({
  name,
  short,
  duration,
  price,
  image,
  imageAlt,
  bullets = [],
  faqs = [],
  guide = [],
  ctaText = "Agendar",
  ctaHref = "#appointment",
  procedureGuideText = "¿Cómo se realiza el procedimiento?",
  procedureGuideHref = "",
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
      <div className="h-52 w-full overflow-hidden bg-slate-100 sm:h-56 dark:bg-slate-900">
        {image ? (
          <img
            src={image}
            alt={imageAlt || name}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {name}
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            {short}
          </p>

          {bullets.length > 0 ? (
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-200">
              {bullets.slice(0, 3).map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}

          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Duración</dt>
              <dd className="font-semibold text-slate-900 dark:text-white">
                {duration}
              </dd>
            </div>

            <div>
              <dt className="text-slate-500 dark:text-slate-400">Precio</dt>
              <dd className="font-semibold text-slate-900 dark:text-white">
                {price}
              </dd>
            </div>
          </dl>

          {faqs.length > 0 ? (
            <ExpandableSection title="Preguntas frecuentes">
              <div className="space-y-3">
                {faqs.slice(0, 3).map((faq, index) => (
                  <div
                    key={`${name}-faq-${index}`}
                    className="rounded-xl bg-white p-3 dark:bg-slate-950"
                  >
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </ExpandableSection>
          ) : null}

          {guide.length > 0 ? (
            <ExpandableSection title="Mini guía">
              <ol className="space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {guide.map((step, index) => (
                  <li key={`${name}-guide-${index}`} className="list-decimal">
                    {step}
                  </li>
                ))}
              </ol>
            </ExpandableSection>
          ) : null}
        </div>

        <div className="mt-auto pt-5">
          {procedureGuideHref ? (
            <a
              href={procedureGuideHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-900"
              aria-label={`Ver video sobre cómo se realiza ${name}`}
            >
              {procedureGuideText}
            </a>
          ) : null}

          <div className="mt-4 flex justify-end">
            <a
              href={ctaHref}
              className="inline-flex items-center text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300"
              aria-label={ctaText}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}