export function AtAGlance({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border py-6 sm:grid-cols-4">
      {rows.map((row) => (
        <div key={row.label}>
          <p className="font-mono text-[10px] text-shell uppercase text-primary">
            {row.label}
          </p>
          <p className="mt-1 text-sm">{row.value}</p>
        </div>
      ))}
    </div>
  );
}
