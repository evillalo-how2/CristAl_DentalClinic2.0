export default function SectionHeader({ title, subtitle }) {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>
      ) : null}
    </>
  );
}