export default function Button({ className = "", variant = "primary", as: Comp = "button", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900/60",
    soft: "bg-brand-50 text-brand-800 hover:bg-brand-100 dark:bg-slate-900 dark:text-brand-200 dark:hover:bg-slate-800"
  };
  return <Comp className={`${base} ${variants[variant]} ${className}`} {...props} />;
}