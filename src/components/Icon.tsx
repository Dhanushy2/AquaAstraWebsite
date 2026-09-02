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
