import Button from "../atoms/Button";

export default function TreatmentCard({
  name,
  short,
  duration,
  price,
  image,
  imageAlt,
  bullets = [],
  ctaText = "Agendar",
  ctaHref = "#appointments",
  onAsk
}) {
  return (
    <>
      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
        <div className="aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900">
          {image ? (
            <img
              src={image}
              alt={imageAlt || name}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          ) : null}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{short}</p>

          {bullets.length > 0 ? (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
              {bullets.slice(0, 3).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}

          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Duración</dt>
              <dd className="font-semibold">{duration}</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Precio</dt>
              <dd className="font-semibold">{price}</dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button onClick={() => onAsk("details")} aria-label={`Ask details about ${name}`}>
              Details
            </Button>
            <Button variant="soft" onClick={() => onAsk("risks")} aria-label={`Ask risks about ${name}`}>
              Risks
            </Button>

            <a
              href={ctaHref}
              className="ml-auto inline-flex items-center text-sm font-semibold text-brand-700 hover:underline dark:text-brand-300"
              aria-label={ctaText}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}