export default function WrapperCard({children,className=""}) {
  return (
    <div className={`bg-(--bg-secondary) py-6 px-4 border border-(--border-color) shadow-[var(--shadow-inset),var(--shadow-premium)] sm:rounded-2xl ${className}`}>
      {children}
    </div>
  )
}