import TreatmentCard from "../molecule/TreatmentCards";
import { treatmentImages } from "../../assets/images";

export default function TreatmentGrid({ items, onAsk }) {
  return (
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <TreatmentCard
          key={t.id}
          name={t.name}
          short={t.short}
          duration={t.duration}
          price={t.price}
          image={treatmentImages[t.imageKey]}
          imageAlt={t.imageAlt}
          bullets={t.bullets}
          ctaText={t.ctaText}
          ctaHref={t.ctaHref}
          onAsk={(kind) => onAsk(t, kind)}
        />
      ))}
    </div>
  );
}