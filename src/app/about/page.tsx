import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import { Container, Section, SectionHeading } from "@/components/Layout";
import PhoneMockup from "@/components/PhoneMockup";
import { about, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} turns shrimp pond lab reports into clear health scores and advice, and builds software for the aqua industry.`,
};

/**
 * One colour per journey step — amber spark, violet build, cyan feedback,
 * green success — used for its icon tile, halo, card accent and step name, and
 * blended along the wave that joins them.
 */
const stepTones = [
  { from: "#d97706", to: "#fbbf24", halo: "rgba(251, 191, 36, 0.25)", name: "text-amber-300" },
  { from: "#6d28d9", to: "#a78bfa", halo: "rgba(167, 139, 250, 0.25)", name: "text-violet-300" },
  { from: "#0e7490", to: "#22d3ee", halo: "rgba(34, 211, 238, 0.25)", name: "text-cyan-300" },
  { from: "#0f8a5f", to: "#34d399", halo: "rgba(52, 211, 153, 0.25)", name: "text-emerald-300" },
];

/**
 * Masks an element's top 64px to a wave and leaves the rest whole — the wave
 * is the element's own background, so it matches any gradient exactly.
 */
const waveSvg = encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64" preserveAspectRatio="none"><path d="M0 32C240 0 480 0 720 32S1200 64 1440 32V64H0z"/></svg>',
);
const waveTopMask = {
  image: `url("data:image/svg+xml,${waveSvg}"), linear-gradient(#000, #000)`,
  size: "100% 64px, 100% calc(100% - 63px)",
  position: "top, bottom",
  repeat: "no-repeat",
};
const waveTop: CSSProperties = {
  maskImage: waveTopMask.image,
  maskSize: waveTopMask.size,
  maskPosition: waveTopMask.position,
  maskRepeat: waveTopMask.repeat,
  WebkitMaskImage: waveTopMask.image,
  WebkitMaskSize: waveTopMask.size,
  WebkitMaskPosition: waveTopMask.position,
  WebkitMaskRepeat: waveTopMask.repeat,
};

export default function AboutPage() {
  const { app, industry } = about;

  return (
    <>
      <Header home={false} />
      <main id="main" className="relative">
        {/* A faint blue swell drifting behind the blue section's wavy top. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-16 overflow-hidden"
        >
          <svg
            viewBox="0 0 2880 64"
            preserveAspectRatio="none"
            className="wave-drift absolute bottom-0 left-0 h-full w-[200%]"
            fill="rgba(10, 99, 163, 0.16)"
          >
            <path d="M0 24Q360 -8 720 24T1440 24T2160 24T2880 24V64H0z" />
          </svg>
        </div>

        {/* 1 — software for the aqua industry, its top edge masked to a wave. */}
        <section
          className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36"
          style={{
            backgroundImage: "linear-gradient(135deg, #12466f 0%, #0a63a3 50%, #007acc 100%)",
            ...waveTop,
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
          />
          <Container className="relative">
            {/* A size container, so the one-line headline can scale with its width. */}
            <div className="@container">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-100">
                {industry.eyebrow}
              </p>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:whitespace-nowrap sm:text-[min(3.7cqw,3rem)]">
                {industry.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{industry.lead}</p>

              {/* Who we build for, as chips. */}
              <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Who we build for">
                {industry.audiences.map((audience) => (
                  <li
                    key={audience.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-brand-700">
                      <Icon name={audience.icon} className="h-4 w-4" />
                    </span>
                    {audience.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Idea → Prototype → Review → Achieve: icon tiles joined by a
                flowing wave on desktop, and by a dashed line when stacked. */}
            {/* Positioned and lifted: unlayered, the gradient's descenders
                were painted over by the layers that follow it. */}
            <h2
              className="relative z-30 mx-auto mt-20 w-fit bg-clip-text pb-2 text-center text-3xl font-semibold leading-normal tracking-tight text-transparent sm:text-4xl"
              style={{
                backgroundImage: `linear-gradient(90deg, ${stepTones.map((tone) => tone.to).join(", ")})`,
              }}
            >
              {industry.journeyTitle}
            </h2>

            {/* Leaves 40px+ above the tiles for the loop's upper arc. */}
            <div className="relative mt-16">
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
                className="absolute left-[12.5%] top-3 hidden h-10 w-3/4 opacity-80 lg:block"
                fill="none"
                stroke="url(#journey-wave)"
                strokeWidth="2"
              >
                <defs>
                  {/* In user space, so both pieces share one amber → green sweep. */}
                  <linearGradient
                    id="journey-wave"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    x2="1000"
                    y1="0"
                    y2="0"
                  >
                    {stepTones.map((tone, i) => (
                      <stop key={tone.to} offset={i / (stepTones.length - 1)} stopColor={tone.to} />
                    ))}
                  </linearGradient>
                </defs>
                {/* 1 → 2 and 3 → 4 only; the loop arcs join 2 and 3. */}
                {["M0 20C83 0 250 0 333 20", "M666 20C749 0 916 0 1000 20"].map((d) => (
                  <path
                    key={d}
                    className="flow-dash"
                    strokeDasharray="8 8"
                    vectorEffect="non-scaling-stroke"
                    d={d}
                  />
                ))}
              </svg>

              {/* Desktop: the prototype ⇄ review loop. An arc over the tiles
                  carries 2 → 3 and an arc under them carries 3 → 2. The box
                  starts 40px above the tiles, so the lower arc's 122px is 82px
                  down the row, clear of the tiles' 64px plus their 8px halo. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[37.5%] top-[-40px] z-20 hidden h-[152px] w-1/4 lg:block"
              >
                <LoopArc id="loop-forward" className="top-0" d="M2 30C10 0 90 0 98 30" />
                <svg viewBox="0 0 12 12" className="absolute left-[calc(98%-6px)] top-[21px] h-3 w-3">
                  <path d="M1 4l5 7l5-7" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <LoopArc id="loop-back" className="top-[122px]" d="M98 0C90 30 10 30 2 0" />
                <svg viewBox="0 0 12 12" className="absolute left-[calc(2%-6px)] top-[111px] h-3 w-3">
                  <path d="M1 8l5-7l5 7" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="sr-only">Prototype and Review repeat until the product fits.</p>

              <ol className="relative grid gap-6 lg:grid-cols-4">
                {industry.steps.map((step, i) => {
                  const last = i === industry.steps.length - 1;
                  const tone = stepTones[i];
                  const fill = `linear-gradient(135deg, ${tone.from}, ${tone.to})`;
                  return (
                    <li
                      key={step.name}
                      className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
                    >
                      {!last && (
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-6 left-8 top-16 border-l-2 border-dashed border-white/25 lg:hidden"
                        />
                      )}

                      {/* Stacked: the prototype ⇄ review loop sits midway down the connector. */}
                      {step.icon === "prototype" && (
                        <span
                          aria-hidden="true"
                          className="absolute left-8 top-[calc(50%+1.5rem)] z-10 -translate-x-1/2 lg:hidden"
                        >
                          <LoopBadge />
                        </span>
                      )}

                      {/* The idea step's tile sits in a warm, breathing glow. */}
                      {step.icon === "idea" && (
                        <span
                          aria-hidden="true"
                          className="bulb-halo absolute -left-4 -top-4 z-0 h-24 w-24 rounded-full bg-amber-300/50 blur-2xl lg:left-1/2 lg:-translate-x-1/2"
                        />
                      )}

                      <span
                        className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-white shadow-xl shadow-black/25 ring-8"
                        style={
                          { backgroundImage: fill, "--tw-ring-color": tone.halo } as CSSProperties
                        }
                      >
                        {step.icon === "idea" ? (
                          <GlowingBulb />
                        ) : (
                          <Icon name={step.icon} className="h-8 w-8" />
                        )}
                        <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-brand-900 text-[0.7rem] font-bold text-white ring-2 ring-white">
                          {i + 1}
                        </span>
                      </span>

                      <div
                        className={`relative flex-1 overflow-hidden rounded-2xl border p-5 backdrop-blur-sm transition-transform hover:-translate-y-1 lg:mt-14 lg:w-full ${
                          last ? "border-white/35 bg-white/20" : "border-white/15 bg-white/10"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-0 top-0 h-1"
                          style={{ backgroundImage: fill }}
                        />
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-1 -top-5 select-none text-8xl font-bold text-white/[0.06]"
                        >
                          0{i + 1}
                        </span>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                          {step.tag}
                        </p>
                        <h3 className={`mt-1 text-xl font-semibold ${tone.name}`}>{step.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/75">{step.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-20 rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-10">
              <h3 className="text-2xl font-semibold text-white">What we can build with you</h3>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {industry.offers.map((offer) => (
                  <li
                    key={offer.title}
                    className="rounded-2xl bg-white p-5 shadow-lg shadow-black/15 transition-transform hover:-translate-y-1"
                  >
                    <span
                      className="grid h-11 w-11 place-items-center rounded-xl text-white"
                      style={{ backgroundImage: "linear-gradient(135deg, #0a63a3, #2aa2f7)" }}
                    >
                      <Icon name={offer.icon} className="h-6 w-6" />
                    </span>
                    <p className="mt-4 text-sm font-semibold leading-snug text-ink">{offer.title}</p>
                  </li>
                ))}
                <li className="rounded-2xl border-2 border-dashed border-white/35 p-5 text-white">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/15">
                    <Icon name="more" className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-sm font-semibold">and more…</p>
                </li>
              </ul>

              <div className="mt-10 flex flex-col items-start gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg font-medium text-white">{industry.prompt}</p>
                <a
                  href={industry.cta.href}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-800 shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
                >
                  {industry.cta.label}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </Container>

          {/* A translucent swell drifting just above the green wave, for depth. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 overflow-hidden"
          >
            <svg
              viewBox="0 0 2880 112"
              preserveAspectRatio="none"
              className="wave-drift absolute bottom-0 left-0 h-full w-[200%]"
              fill="rgba(255, 255, 255, 0.08)"
            >
              {/* One crest and trough per 1440 units, so sliding by half loops seamlessly. */}
              <path d="M0 40Q360 0 720 40T1440 40T2160 40T2880 40V112H0z" />
            </svg>
          </div>
        </section>

        {/* 2 — the app. Pulled up over the blue and masked to a wave along its
            top edge, so its own gradient forms the wave. */}
        <div
          className="relative -mt-16 overflow-hidden pt-16"
          style={{
            backgroundImage: "linear-gradient(135deg, #065f46 0%, #0f8a5f 50%, #20b09c 100%)",
            ...waveTop,
          }}
        >
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
          <Container className="relative">
            <div className="grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  {about.title}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl">
                  {app.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                  {about.lead}
                </p>
                <div className="mt-6 max-w-2xl space-y-4 leading-relaxed text-white/70">
                  {app.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <PhoneMockup />
              </div>
            </div>
          </Container>
        </div>

        <Section>
          <SectionHeading
            eyebrow={app.eyebrow}
            title="What the app does"
            lead="Four things, done simply, so a report turns into a decision."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {app.points.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl border border-hairline bg-white p-6 shadow-sm shadow-ink/5"
              >
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-white"
                  style={{ backgroundImage: "linear-gradient(135deg, #0f8a5f, #20b09c)" }}
                >
                  <Icon name={point.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-semibold text-ink">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </Section>

      </main>
      <Footer />
    </>
  );
}

/** A lit bulb: a pale-yellow glass with rays, glowing through a drop-shadow. */
function GlowingBulb() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="bulb-glow h-9 w-9"
      aria-hidden="true"
    >
      <path className="bulb-rays" d="M12 1v1.6M4.4 4.4l1.1 1.1M19.6 4.4l-1.1 1.1M2 11h1.6M20.4 11h1.6" />
      <path
        d="M12 5a5.5 5.5 0 0 0-3.3 9.9c.6.5 1 1.2 1 2.1h4.6c0-.9.4-1.6 1-2.1A5.5 5.5 0 0 0 12 5z"
        fill="#fef9c3"
      />
      <path d="M10.6 11.5l1.4 1.5l1.4-1.5M12 13v4" stroke="#d97706" strokeWidth={1.2} />
      <path d="M9.8 19.2h4.4M10.7 21.4h2.6" />
    </svg>
  );
}

/** Circular arrows between prototype and review: build, review, repeat. */
function LoopBadge() {
  return (
    <span
      className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white shadow-lg shadow-black/25 backdrop-blur-sm lg:h-12 lg:w-12"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(109, 40, 217, 0.7), rgba(14, 116, 144, 0.7))",
      }}
    >
      <Icon name="cycle" className="loop-spin h-5 w-5 lg:h-6 lg:w-6" />
    </span>
  );
}

/**
 * One half of the prototype ⇄ review loop: a dashed arc that stretches to the
 * gap between the two tiles, its dashes flowing in the direction it is drawn.
 * Shaded violet at step 2's end and cyan at step 3's, whichever way it runs.
 */
function LoopArc({ id, d, className }: { id: string; d: string; className: string }) {
  return (
    <svg
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      className={`absolute inset-x-0 h-[30px] w-full overflow-visible ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        className="flow-dash"
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2"
        strokeDasharray="8 8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
