export function DoubleRule() {
  return (
    <div className="relative py-[3px]">
      <div className="flex flex-col gap-[3px]">
        <span className="h-px bg-foreground/70" />
        <span className="h-px bg-foreground/70" />
      </div>
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 font-serif text-sm italic text-primary"
        aria-hidden="true"
      >
        &#10035;
      </span>
    </div>
  );
}
