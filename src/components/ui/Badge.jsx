export default function Badge({ children }) {
  return (
    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
      {children}
    </span>
  );
}