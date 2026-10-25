import Image from "next/image";

/** The full Aqua Astra logo (A with shrimp, wordmark, wave, "Grow Together") on a transparent background. */
export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/aqua-astra-logo.webp"
      alt=""
      aria-hidden="true"
      width={343}
      height={240}
      className={`object-contain ${className}`}
    />
  );
}
