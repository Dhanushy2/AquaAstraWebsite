import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import { Container } from "./Layout";
import PhoneMockup from "./PhoneMockup";
import WhatsAppCards from "./WhatsAppCards";
import { appWalkthrough, hero, heroPosters, highlights } from "@/lib/content";

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

      {/* The whole hero panel slides: brand artwork, a farm photo, the pitch, then how the app works. */}
      <HeroCarousel
        slides={[
          {
            label: "Aqua Astra — Grow Together",
            content: <HeroPoster poster={heroPosters.artwork} priority />,
          },
          { label: "Harvest day on the farm", content: <HeroPoster poster={heroPosters.harvest} /> },
          { label: "What Aqua Astra does", content: <HeroPitch /> },
          { label: "How the app works", content: <HeroAppSteps /> },
        ]}
      />

      {/* Highlight band sits on the wave, half in each colour. */}
      <Container className="relative pb-16">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="bg-teal-deep/40 px-6 py-6 backdrop-blur-sm">
              {item.value ? (
                <>
                  <dt className="text-2xl font-semibold tracking-tight text-white">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-white/85">{item.label}</dd>
                </>
              ) : (
                <dt className="text-sm font-medium text-white/85">{item.label}</dt>
              )}
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
 * Slides 1 and 2 — a 16:9 picture, shown whole on every device.
 *
 * The panel takes the height of the tallest slide, so its shape swings from
 * wider-than-16:9 on desktop to tall and narrow on a phone, and any
 * `object-cover` fit crops the picture somewhere. Instead the whole picture
 * sits framed in the middle, over a blurred, slowly drifting blow-up of itself
 * that fills the rest of the panel. Below `lg`, where the framed picture is
 * small, a caption taken from the picture fills the space beneath it.
 */
function HeroPoster({
  poster,
  priority = false,
}: {
  poster: (typeof heroPosters)[keyof typeof heroPosters];
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        aria-hidden="true"
        alt=""
        src={poster.src}
        fill
        sizes="100vw"
        loading={priority ? "eager" : "lazy"}
        className="poster-drift scale-110 object-cover opacity-70 blur-2xl"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-teal-deep/35" />

      {/* A size container, so the frame can be as large as fits both ways:
          the full width, or the full height (less 9rem for the caption below
          lg) times the picture's aspect ratio, whichever is smaller. */}
      <div className="absolute inset-0 px-4 pb-20 pt-6 sm:px-8 lg:px-10 lg:pb-24 lg:pt-10">
        {/* Below lg the panel is far taller than the screen, so the group
            sits near the top of the first screen instead of mid-panel. */}
        <div className="flex h-full w-full flex-col items-center justify-start pt-[10svh] [container-type:size] lg:justify-center lg:pt-0">
          <div
            className="relative w-[min(100cqw,calc((100cqh_-_9rem)*var(--ratio)))] shrink-0 overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/40 sm:rounded-3xl lg:w-[min(100cqw,calc(100cqh*var(--ratio)))]"
            style={
              {
                "--ratio": poster.width / poster.height,
                aspectRatio: `${poster.width} / ${poster.height}`,
              } as CSSProperties
            }
          >
            <Image
              src={poster.src}
              alt={poster.alt}
              fill
              sizes="(min-width: 1440px) 1360px, 100vw"
              loading={priority ? "eager" : "lazy"}
              className="object-cover"
            />
          </div>

          <div className="mt-6 text-center lg:hidden">
            <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {poster.title}
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {poster.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Slide 3 — the headline, the pitch, the calls to action and the app screens,
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
        <div className="grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-12 lg:py-28">
          {/* A size container, so the one-line headline can scale with its column. */}
          <div className="@container">
            <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90">
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:whitespace-nowrap sm:text-[5cqw]">
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
 * Slide 4 — how the app works, as one flow over the pond photo: a report is
 * shared in, it shows up as scores in the app, and the same report card is
 * sent on to WhatsApp from Aqua Astra's number. Runs left to right on
 * desktop. Below lg the steps scroll sideways instead of stacking: stacked,
 * this slide stood ~2000px tall on a phone, and since every slide takes the
 * tallest one's height, the picture slides were lost in a sea of blur. The
 * bottom padding keeps the carousel controls clear.
 */
function HeroAppSteps() {
  const { steps, screens, whatsappFrom } = appWalkthrough;
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute inset-0">
        <Image src="/hero-pond.webp" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep/92 to-teal-deep/80" />
      </div>

      <Container className="relative pb-24 pt-14 sm:pt-16 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90">
            {appWalkthrough.eyebrow}
          </p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {appWalkthrough.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/75">
            {appWalkthrough.subtitle}
          </p>
        </div>

        <ol className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-3 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {/* 1 — share */}
          <FlowStep n={1} step={steps[0]}>
            <div className="flow-float relative mx-auto -rotate-3 [--tilt:-3deg]">
              <PhoneShot
                {...screens.upload}
                aspect="aspect-[738/1600]"
                className="w-[12rem] sm:w-[13rem]"
              >
                {/* Points at the Upload Report button (about 52–57% down the screen). */}
                <span aria-hidden="true" className="absolute inset-x-[6%] top-[51%] h-[7%]">
                  <span className="flow-ring absolute inset-0 rounded-full bg-amber-300/40" />
                  <span className="absolute inset-0 rounded-full ring-[3px] ring-amber-300 shadow-[0_0_14px_3px_rgba(252,211,77,0.7)]" />
                  <svg viewBox="0 0 24 24" className="flow-tap absolute right-[14%] top-[45%] h-9 w-9 drop-shadow-lg">
                    <path
                      d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10l5.2 1.2a2 2 0 0 1 1.5 1.9L18 19a2 2 0 0 1-2 1.8h-4.3a2 2 0 0 1-1.6-.8L6 15.2a1.5 1.5 0 0 1 2.3-1.9L9 14.2Z"
                      fill="#fff"
                      stroke="#0f172a"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </PhoneShot>
              <span className="flow-pop absolute -bottom-4 -right-4 grid h-12 w-12 place-items-center rounded-full bg-white text-teal-deep shadow-lg shadow-black/30">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 15V4m0 0L8 8m4-4 4 4" />
                  <path d="M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
                </svg>
              </span>
            </div>
          </FlowStep>

          <FlowArrow />

          {/* 2 — in the app: two screens fanned */}
          <FlowStep n={2} step={steps[1]}>
            <div className="relative mx-auto h-[27rem] w-[19rem]">
              <PhoneShot
                {...screens.reports}
                className="absolute right-0 top-10 w-[10rem] rotate-6 sm:w-[11rem]"
              />
              <PhoneShot
                {...screens.home}
                className="flow-float absolute left-0 top-0 w-[12rem] -rotate-3 [--tilt:-3deg] sm:w-[12.5rem]"
              />
            </div>
          </FlowStep>

          <FlowArrow />

          {/* 3 — on WhatsApp, from the Aqua Astra number */}
          <FlowStep n={3} step={steps[2]}>
            <WhatsAppCards from={whatsappFrom} cards={screens.cards} />
          </FlowStep>
        </ol>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-white/65 lg:hidden">
          {appWalkthrough.swipeHint}
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </p>
      </Container>
    </div>
  );
}

function FlowStep({
  n,
  step,
  children,
}: {
  n: number;
  step: { title: string; body: string };
  children: ReactNode;
}) {
  return (
    <li className="flex w-[88%] shrink-0 snap-center flex-col items-center text-center sm:w-[60%] lg:w-auto">
      <div className="flex min-h-[28rem] items-center justify-center">
        {children}
      </div>
      <p className="mt-8 flex items-center gap-2 text-base font-semibold text-white">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-sm font-bold text-teal-deep">
          {n}
        </span>
        {step.title}
      </p>
      <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-white/70">{step.body}</p>
    </li>
  );
}

/** Dashed connector between steps on desktop; the swiping row below lg has none. */
function FlowArrow() {
  return (
    <li aria-hidden="true" className="hidden items-center justify-center lg:flex lg:pt-[13rem]">
      <svg viewBox="0 0 64 24" className="h-6 w-14 text-white/70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path className="flow-dash" strokeDasharray="4 4" d="M2 12h50" />
        <path d="m46 5 9 7-9 7" />
      </svg>
    </li>
  );
}

/** A screenshot in a dark phone bezel. */
function PhoneShot({
  src,
  alt,
  className = "",
  aspect = "aspect-[9/16]",
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.5rem] border-4 border-slate-900 bg-slate-100 shadow-xl shadow-black/40 ${className}`}
    >
      <div className={`relative ${aspect}`}>
        <Image src={src} alt={alt} fill sizes="(min-width: 640px) 13rem, 12rem" className="object-cover object-top" />
        {children}
      </div>
    </div>
  );
}
