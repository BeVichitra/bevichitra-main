export default function MainBadge({ children,className }) {
  return (
    <span className={`inline-block mb-6 px-4 py-1 text-sm tracking-wide bg-(--bg-tertiary) text-(--text-secondary) rounded-md border border-(--border-color) ${className}`}>
            {children}
          </span>
  );
}