// Flat, faceless line illustration — stands in for a personal photo (this
// site doesn't use those). Ink silhouette + a single red accent, matching
// the rest of the site's palette rather than a generic stock-art style.
export function DeskIllustration() {
  return (
    <svg
      viewBox="0 0 400 500"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of a person working at a desk"
    >
      {/* floor line */}
      <line x1="30" y1="392" x2="370" y2="392" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />

      {/* plant, back-left */}
      <g className="text-ink" fill="currentColor">
        <ellipse cx="62" cy="352" rx="16" ry="7" transform="rotate(-25 62 352)" opacity="0.85" />
        <ellipse cx="70" cy="340" rx="16" ry="7" transform="rotate(10 70 340)" opacity="0.85" />
        <ellipse cx="58" cy="332" rx="14" ry="6" transform="rotate(55 58 332)" opacity="0.85" />
        <path d="M45 366 L48 390 H80 L83 366 Z" opacity="0.9" />
      </g>

      {/* lamp, back-right */}
      <g className="text-ink" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
        <path d="M355 60 L320 95 L300 85" />
        <circle cx="355" cy="60" r="6" fill="var(--primary)" stroke="none" />
      </g>

      {/* chair */}
      <g className="text-ink" stroke="currentColor" fill="none" strokeWidth="6">
        <rect x="140" y="188" width="100" height="150" rx="40" />
        <ellipse cx="190" cy="366" rx="34" ry="6" strokeWidth="4" />
        <line x1="190" y1="340" x2="190" y2="358" strokeWidth="6" />
      </g>

      {/* desk */}
      <g className="text-ink" fill="currentColor">
        <rect x="55" y="330" width="290" height="14" rx="6" />
        <rect x="72" y="344" width="8" height="66" />
        <rect x="320" y="344" width="8" height="66" />
      </g>

      {/* monitor */}
      <g className="text-ink" fill="currentColor">
        <rect x="188" y="308" width="6" height="20" />
        <rect x="170" y="326" width="42" height="5" rx="2" />
        <rect x="135" y="228" width="112" height="82" rx="8" />
      </g>
      <rect x="150" y="248" width="56" height="6" rx="3" fill="var(--primary)" />
      <rect x="150" y="264" width="76" height="5" rx="2.5" fill="var(--paper)" opacity="0.6" />
      <rect x="150" y="278" width="40" height="5" rx="2.5" fill="var(--paper)" opacity="0.6" />

      {/* person */}
      <g className="text-ink" fill="currentColor">
        {/* torso / hoodie */}
        <path d="M150 300 Q150 228 190 224 Q230 228 230 300 L230 332 Q190 347 150 332 Z" />
        {/* head */}
        <circle cx="190" cy="195" r="30" />
        {/* arms to keyboard */}
        <path
          d="M156 292 Q138 312 150 326"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M224 292 Q244 312 232 326"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      {/* hood seam */}
      <path
        d="M163 232 Q190 252 217 232"
        stroke="var(--paper)"
        strokeOpacity="0.5"
        strokeWidth="3"
        fill="none"
      />
      {/* drawstrings — the one red detail on the figure itself */}
      <circle cx="178" cy="246" r="3.5" fill="var(--primary)" />
      <circle cx="202" cy="246" r="3.5" fill="var(--primary)" />

      {/* keyboard */}
      <rect x="146" y="320" width="98" height="14" rx="4" className="text-ink" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
