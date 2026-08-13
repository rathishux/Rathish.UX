// Spotify's mark isn't in the icon set the rest of the site uses, so this
// is a minimal geometric stand-in: the three arcs inside a circle. Used
// only to label an outbound link to Spotify.
export function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <g stroke="var(--card)" strokeWidth="1.6" strokeLinecap="round" fill="none">
        <path d="M7 9.2q5-1.4 10 1" />
        <path d="M7.6 12.3q4.2-1.1 8.4 0.9" />
        <path d="M8.2 15.2q3.4-0.9 6.8 0.8" />
      </g>
    </svg>
  );
}
