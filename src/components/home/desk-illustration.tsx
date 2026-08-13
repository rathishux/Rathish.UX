// Simple black-and-white line-art character — a person at a desk with a
// laptop, a plant, and a coffee cup. Original artwork, not a stock photo
// or a personal likeness, kept deliberately simple: outline shapes with
// white fills rather than solid silhouettes, so it reads as a drawn
// character instead of a dark blob.
export function DeskIllustration() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label="Illustration of a person working at a laptop">
      <g fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        {/* chair, behind everything */}
        <rect x="130" y="175" width="140" height="175" rx="46" opacity="0.5" />

        {/* desk */}
        <g fill="#1a1a1a" stroke="none">
          <rect x="55" y="352" width="290" height="10" rx="4" />
          <rect x="72" y="362" width="7" height="60" />
          <rect x="321" y="362" width="7" height="60" />
        </g>

        {/* plant, right of desk */}
        <g strokeWidth="3.5">
          <path d="M300 352 L305 320 M300 352 L292 316 M300 352 L312 318" />
          <path d="M285 352 L287 340 L313 340 L315 352 Z" fill="#1a1a1a" stroke="none" />
        </g>

        {/* coffee cup */}
        <g strokeWidth="3">
          <rect x="245" y="330" width="28" height="22" rx="4" />
          <path d="M273 335 Q284 335 284 342 Q284 349 273 349" />
          <path d="M249 330 Q252 324 258 330" strokeWidth="2" opacity="0.6" />
        </g>

        {/* laptop */}
        <g>
          <rect x="140" y="338" width="128" height="14" rx="3" fill="#1a1a1a" stroke="none" />
          <path d="M148 338 L262 338 L253 248 L157 248 Z" fill="white" />
          <rect x="170" y="264" width="60" height="5" rx="2.5" fill="#1a1a1a" stroke="none" opacity="0.7" />
          <rect x="170" y="278" width="76" height="5" rx="2.5" fill="#1a1a1a" stroke="none" opacity="0.5" />
          <rect x="170" y="292" width="44" height="5" rx="2.5" fill="#1a1a1a" stroke="none" opacity="0.5" />
        </g>

        {/* torso / shirt */}
        <path
          d="M150 320 Q150 232 200 226 Q250 232 250 320 L250 350 Q200 362 150 350 Z"
          fill="white"
        />
        {/* collar */}
        <path d="M182 228 L200 248 L218 228" strokeWidth="3" />

        {/* neck */}
        <rect x="188" y="192" width="24" height="20" fill="white" />

        {/* head */}
        <circle cx="200" cy="158" r="42" fill="white" />
        {/* hair */}
        <path
          d="M158 150 Q154 104 200 98 Q246 104 242 150 Q242 118 200 114 Q158 118 158 150 Z"
          fill="#1a1a1a"
          stroke="none"
        />
        {/* face */}
        <circle cx="184" cy="162" r="3" fill="#1a1a1a" stroke="none" />
        <circle cx="216" cy="162" r="3" fill="#1a1a1a" stroke="none" />
        <path d="M186 178 Q200 188 214 178" strokeWidth="3" />

        {/* arm reaching to keyboard */}
        <path d="M168 300 Q148 320 165 336" strokeWidth="11" />
      </g>
    </svg>
  );
}
