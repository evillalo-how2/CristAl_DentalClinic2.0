export default function Input({ className = "", label, id, ...props }) {
  return (
    <div className="grid gap-1">
      {label ? (
        <label className="text-sm font-semibold" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={`h-10 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 ${className}`}
        {...props}
      />
    </div>
  );
}