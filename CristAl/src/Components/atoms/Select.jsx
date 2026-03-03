export default function Select({ className = "", label, id, children, ...props }) {
  return (
    <div className="grid gap-1">
      {label ? (
        <label className="text-sm font-semibold" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <select
        id={id}
        className={`h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 ${className}`}
        {...props}
      >
        {children}
      </select>
    </div>
  );
}