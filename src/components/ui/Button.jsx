export default function Button({
  children,
  variant = "primary",
  className = "",
}) {

  const base =
    "px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 w-full lg:w-fit mt-2 cursor-pointer font-medium";

  const variants = {
    primary: "bg-[var(--color-primary)] text-[var(--bg-main)]",
    accent: "bg-[var(--color-accent)] text-[var(--bg-main)]",
    dark: "bg-[var(--text-primary)] text-[var(--bg-main)]",
    light: "bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)]"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}