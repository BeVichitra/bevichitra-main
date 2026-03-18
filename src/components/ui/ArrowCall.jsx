import { caveat } from "@/fonts";

export default function ArrowCall({
  text = "Schedule a free call now",
  className = "",
  flip = false,
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      
      <svg
        width="80"
        height="38"
        viewBox="0 0 80 40"
        fill="none"
        className={flip ? "scale-x-[-1]" : ""}
      >
        <path
          d="M5 30 C25 5, 55 5, 70 15"
          stroke="var(--color-accent)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M65 8 L75 15 L65 22"
          stroke="var(--color-accent)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p className={`${caveat.className} text-(--color-accent) text-xl`}>
        {text}
      </p>

    </div>
  );
}