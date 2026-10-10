import type { IconName } from "@/lib/content";

const paths: Record<IconName, React.ReactNode> = {
  scan: (
    <>
      <path d="M3 8V6a3 3 0 0 1 3-3h2M16 3h2a3 3 0 0 1 3 3v2M21 16v2a3 3 0 0 1-3 3h-2M8 21H6a3 3 0 0 1-3-3v-2" />
      <path d="M7 12h10" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4.5-5" />
      <circle cx="12" cy="18" r="1.4" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h17M3.5 15h17" />
      <path d="M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18z" />
    </>
  ),
  checklist: (
    <>
      <path d="M9 5h11M9 12h11M9 19h11" />
      <path d="M3.5 5l1.4 1.4L7.5 3.8M3.5 12l1.4 1.4l2.6-2.6M3.5 19l1.4 1.4l2.6-2.6" />
    </>
  ),
  history: (
    <>
      <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
      <path d="M3 4v4h4" />
      <path d="M12 8v4.5l3 1.8" />
    </>
  ),
  bell: (
    <>
      <path d="M6 9a6 6 0 1 1 12 0c0 3.4.8 5.1 1.8 6.2c.5.6.1 1.5-.7 1.5H4.9c-.8 0-1.2-.9-.7-1.5C5.2 14.1 6 12.4 6 9z" />
      <path d="M10 20.5a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  pond: (
    <>
      <path d="M3 15.5c2-1.6 3.5-1.6 5.5 0s3.5 1.6 5.5 0s3.5-1.6 5.5 0" />
      <path d="M3 19.5c2-1.6 3.5-1.6 5.5 0s3.5 1.6 5.5 0s3.5-1.6 5.5 0" />
      <path d="M15.5 9.5c0 2-1.6 3.5-3.5 3.5S8.5 11.5 8.5 9.5S12 3 12 3s3.5 4.5 3.5 6.5z" />
    </>
  ),
  weather: (
    <>
      <path d="M7.5 17.5a4 4 0 0 1 .4-8a5.5 5.5 0 0 1 10.5 1.6a3.4 3.4 0 0 1-.6 6.4H7.5z" />
      <path d="M9 21l-.7 1.5M13 21l-.7 1.5M17 21l-.7 1.5" />
    </>
  ),
  idea: (
    <>
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z" />
      <path d="M9.5 19h5M10.5 21.5h3" />
    </>
  ),
  // Layer classes let the about page fan the stack open and closed.
  prototype: (
    <>
      <path className="stack-top" d="M12 3L3 7.5l9 4.5l9-4.5L12 3z" />
      <path className="stack-mid" d="M3 12l9 4.5l9-4.5" />
      <path className="stack-bottom" d="M3 16.5l9 4.5l9-4.5" />
    </>
  ),
  review: (
    <>
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H9l-5 4V5.5z" />
      {/* pathLength 1 lets the about page draw the tick in with a dash. */}
      <path className="review-tick" pathLength={1} d="M8.5 10l2.2 2.2L15.5 7.5" />
    </>
  ),
  cycle: (
    <>
      <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </>
  ),
  // A rocket for "launch & grow". The about page lifts the body and flickers
  // the flame, which rides inside the body group so it moves with it.
  achieve: (
    <g className="rocket-body">
      <path
        className="rocket-flame"
        fill="#fde68a"
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
      />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      <circle cx="15.5" cy="8.5" r="1.5" />
    </g>
  ),
  dashboard: (
    <>
      <path d="M3 21h18" />
      <rect x="5" y="11" width="3" height="7" rx="1" />
      <rect x="10.5" y="6" width="3" height="12" rx="1" />
      <rect x="16" y="13" width="3" height="5" rx="1" />
    </>
  ),
  lab: (
    <>
      <path d="M9 3h6M10 3v6l-5.5 9.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" />
      <path d="M7 15h10" />
    </>
  ),
  mobile: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  hatchery: (
    <>
      <path d="M12 3c3.5 0 6.5 5.5 6.5 10a6.5 6.5 0 0 1-13 0C5.5 8.5 8.5 3 12 3z" />
      <path d="M9 13.5a3 3 0 0 0 3 3" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l5 3v-3l5 3v-3l5 3V4h3v17H3z" />
      <path d="M7 17h2M11 17h2M15 17h2" />
    </>
  ),
  more: <path d="M12 5v14M5 12h14" />,
};

type Props = {
  name: IconName;
  className?: string;
};

export default function Icon({ name, className = "h-6 w-6" }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
