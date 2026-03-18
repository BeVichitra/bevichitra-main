import Badge from "./Badge";

export default function SectionHeader({ label, title }) {
  return (
    <header className="mb-8 text-center">
      <Badge className="text-(--text-secondary) ">{label}</Badge>

      <h1 className="text-5xl font-medium text-(--text-primary) mt-4">
        {title}
      </h1>
    </header>
  );
}