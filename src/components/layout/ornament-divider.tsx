export function OrnamentDivider() {
  return (
    <div
      className="h-2 w-full opacity-40"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--color-primary) 1px, transparent 1.5px)",
        backgroundSize: "14px 100%",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
      }}
      aria-hidden="true"
    />
  );
}
