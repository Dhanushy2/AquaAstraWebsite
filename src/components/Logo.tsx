/**
 * Placeholder brand mark: a droplet (aqua) holding a four-point star (astra).
 * Swap this for the real logo asset from the Flutter app when it is available.
 */
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="aa-logo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00695C" />
          <stop offset="55%" stopColor="#0E6E78" />
          <stop offset="100%" stopColor="#007ACC" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#aa-logo)" />
      <path
        d="M20 9c4.6 5.1 7 8.7 7 11.9A7 7 0 0 1 13 21c0-3.2 2.4-6.8 7-12z"
        fill="white"
        fillOpacity="0.16"
      />
      <path
        d="M20 13.5c.9 2.6 1.6 3.3 4.2 4.2c-2.6.9-3.3 1.6-4.2 4.2c-.9-2.6-1.6-3.3-4.2-4.2c2.6-.9 3.3-1.6 4.2-4.2z"
        fill="white"
      />
      <path
        d="M11 27.4c2-1.5 3.3-1.5 5.3 0s3.3 1.5 5.3 0s3.3-1.5 5.3 0"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="1.9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
