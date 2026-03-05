import Button from "../atoms/Button";

export default function TreatmentCard({ name, short, duration, price, onAsk }) {
  return (
    <>
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{short}</p>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-slate-500 dark:text-slate-400">Duration</dt>
            <dd className="font-semibold">{duration}</dd>
          </div>
          <div>
            <dt className="text-slate-500 dark:text-slate-400">Price</dt>
            <dd className="font-semibold">{price}</dd>
          </div>
        </dl>

        <div className="mt-5 flex gap-3">
          <Button onClick={() => onAsk("details")} aria-label={`Ask details about ${name}`}>
            Details
          </Button>
          <Button variant="soft" onClick={() => onAsk("risks")} aria-label={`Ask risks about ${name}`}>
            Risks
          </Button>
        </div>
      </article>
    </>
  );
}