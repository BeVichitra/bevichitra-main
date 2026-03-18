export default function Background() {
  return (
    <div className="absolute inset-0  overflow-hidden bg-(--bg-main)">
     <svg
  className="w-full h-full"
  viewBox="0 0 1440 800"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* LEFT SIDE DEPTH */}
    <filter id="depthLeft" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow
        dx="4"
        dy="3"
        stdDeviation="1.4"
        floodColor="#b8b8b8"
        floodOpacity="0.45"
      />

      <feDropShadow
        dx="-1"
        dy="-1"
        stdDeviation="0.8"
        floodColor="#ffffff"
        floodOpacity="0.45"
      />
    </filter>

    {/* RIGHT SIDE DEPTH (mirrored horizontally) */}
    <filter id="depthRight" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow
        dx="-4"
        dy="3"
        stdDeviation="1.4"
        floodColor="#b8b8b8"
        floodOpacity="0.45"
      />

      <feDropShadow
        dx="1"
        dy="-1"
        stdDeviation="0.8"
        floodColor="#ffffff"
        floodOpacity="0.45"
      />
    </filter>
  </defs>

  {/* ===== LEFT SIDE ===== */}

  <circle
    cx="-630"
    cy="430"
    r="610"
    stroke="#eceae8"
    strokeWidth="6"
    fill="none"
    filter="url(#depthLeft)"
  />

  <circle
    cx="-490"
    cy="430"
    r="660"
    stroke="#eceae8"
    strokeWidth="7"
    opacity="0.85"
    fill="none"
    filter="url(#depthLeft)"
  />

  <circle
    cx="-490"
    cy="430"
    r="830"
    stroke="#eceae8"
    strokeWidth="8"
    opacity="0.7"
    fill="none"
    filter="url(#depthLeft)"
  />

  {/* ===== RIGHT SIDE ===== */}

  <circle
    cx="2070"
    cy="430"
    r="610"
    stroke="#eceae8"
    strokeWidth="6"
    fill="none"
    filter="url(#depthRight)"
  />

  <circle
    cx="1930"
    cy="430"
        r="660"
    stroke="#eceae8"
    strokeWidth="7"
    opacity="0.85"
    fill="none"
    filter="url(#depthRight)"
  />

  <circle
    cx="1930"
    cy="430"
    r="830"
    stroke="#eceae8"
    strokeWidth="8"
    opacity="0.7"
    fill="none"
    filter="url(#depthRight)"
  />
</svg>
    </div>
  );
}