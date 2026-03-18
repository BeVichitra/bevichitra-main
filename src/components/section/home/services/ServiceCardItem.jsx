export default function ServiceCardItem({ services }) {
  return (
    <div
      className="rounded-3xl bg-(--bg-main) px-4 py-6 border border-(--border-color) shadow-[inset_0_1px_4px_rgba(0,0,0,0.05),0_20px_60px_-20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex justify-between items-center border-b border-(--border-color) pb-3 mb-2">
        <h2 className="text-xl font-semibold text-(--text-primary)">
          {services.title}
        </h2>

        <div className="bg-(--bg-tertiary) h-8 w-8 rounded-lg"></div>
      </div>

      <p className="text-(--text-secondary)">
        {services.description}
      </p>

      <div className="flex justify-between mt-4 ">
        {services.tags.map((subItem, i) => (
          <span
            className="bg-(--bg-tertiary) text-(--text-primary) px-2 py-1 rounded-full text-sm"
            key={`${services.id}-${i}`}
          >
            {subItem}
          </span>
        ))}
      </div>
    </div>
  );
}