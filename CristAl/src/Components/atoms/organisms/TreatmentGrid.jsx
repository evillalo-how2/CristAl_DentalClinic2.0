import TreatmentCard from "../molecule/TreatmentCards";

export default function TreatmentGrid({ items, onAsk }) {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2">
      {items.map((t) => (
        <TreatmentCard
          key={t.id}
          name={t.name}
          short={t.short}
          duration={t.duration}
          price={t.price}
          onAsk={(kind) => onAsk(t, kind)}
        />
      ))}
    </div>
  );
}