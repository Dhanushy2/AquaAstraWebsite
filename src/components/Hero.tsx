import Image from "next/image";
import BrandLockup from "./BrandLockup";
import HeroCarousel from "./HeroCarousel";
import { Container } from "./Layout";
import PhoneMockup from "./PhoneMockup";
import { hero, highlights } from "@/lib/content";

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden bg-brand-gradient">
      {/* Decorative water texture. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, rgba(255,255,255,.8), transparent 70%)",
          backgroundSize: "40rem 40rem",
          backgroundPosition: "80% -10%",
          backgroundRepeat: "no-repeat",
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1 left-0 h-24 w-full text-canvas"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0 64c160 32 320 48 480 32s320-64 480-64 320 32 480 48v40H0z"
        />
      </svg>

      {/* The whole hero panel slides: brand card, pitch, then a farm photo. */}
      <HeroCarousel
        slides={[
          { label: "Aqua Astra — Grow Together", content: <HeroBrand /> },
          { label: "What Aqua Astra does", content: <HeroPitch /> },
          { label: "Harvest day on the farm", content: <HeroPhoto /> },
        ]}
      />

      {/* Highlight band sits on the wave, half in each colour. */}
      <Container className="relative pb-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="bg-teal-deep/40 px-6 py-6 backdrop-blur-sm">
              <dt className="text-2xl font-semibold tracking-tight text-white">
                {item.value}
              </dt>
              <dd className="mt-1 text-sm font-medium text-white/85">{item.label}</dd>
              <dd className="mt-0.5 text-xs leading-relaxed text-white/60">
                {item.detail}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}

/**
 * Slide 1 — the brand card. Same pond photo and teal family as the pitch slide
 * so the two read as one system, but the scrim is pushed heavier and more even
 * here: the lockup is centred, so it needs steady contrast right across the
 * panel rather than the pitch slide's dark-on-the-left fade. Pushing the photo
 * down to a texture also stops slide 1 and slide 2 looking like the same frame
 * twice. Bottom padding clears the carousel controls.
 */
function HeroBrand() {
  return (
    <div className="absolute inset-0">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/hero-pond.webp"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-deep/95 via-teal-ink/92 to-brand-800/88" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6 pb-20 pt-10 sm:px-10 lg:pb-24">
        <BrandLockup />
      </div>
    </div>
  );
}

/**
 * Slide 2 — the headline, the pitch, the calls to action and the app mockup,
 * over a photo of an aerated pond. The scrim runs top-to-bottom on mobile
 * (copy sits at the top) and left-to-right on desktop (copy sits at the left),
 * so the text always has a dark ground while the pond stays visible.
 */
function HeroPitch() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/hero-pond.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/92 via-teal-deep/72 to-teal-deep/55 lg:bg-gradient-to-r lg:from-teal-deep/92 lg:via-teal-deep/60 lg:to-teal-deep/25" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 lg:py-28">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={hero.primaryCta.href}
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-teal-deep shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-full border border-white/35 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </Container>
    </div>
  );
}

/**
 * Slide 3 — the 16:9 farm photo filling the panel edge to edge. The hero is a
 * little wider than 16:9, so `object-cover` trims some sky and foreground; the
 * crop is biased upward (35%) to keep the whole sign and the farmer's face in.
 */
function HeroPhoto() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/hero-farm-harvest.webp"
        alt="A shrimp farmer holding a handful of fresh vannamei in front of aerated ponds, beside blue crates of the day’s harvest and an Aqua Astra farm sign."
        fill
        sizes="100vw"
        className="object-cover object-[50%_35%]"
      />
    </div>
  );
}
