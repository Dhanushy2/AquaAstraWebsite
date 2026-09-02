/**
 * A CSS/SVG rendering of the app's analysis screen. No screenshots are shipped
 * yet — replace this with a real device shot once the screen is final.
 */

const parameters = [
  { name: "pH", value: "8.1", state: "ok" as const },
  { name: "Ammonia", value: "0.9 ppm", state: "warn" as const },
  { name: "Alkalinity", value: "142 ppm", state: "ok" as const },
  { name: "Dissolved O₂", value: "3.2 mg/L", state: "bad" as const },
];

const stateStyles = {
  ok: { dot: "bg-teal-brand", text: "text-teal-ink", label: "In range" },
  warn: { dot: "bg-warn", text: "text-warn", label: "Watch" },
  bad: { dot: "bg-danger", text: "text-danger", label: "Act now" },
};

export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[19rem]">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[3rem] bg-white/10 blur-2xl"
      />

      <div className="relative rounded-[2.5rem] border border-white/20 bg-slate-900 p-2.5 shadow-2xl shadow-black/40">
        <div className="overflow-hidden rounded-[2rem] bg-canvas">
          {/* App header */}
          <div className="bg-brand-gradient px-5 pb-8 pt-6 text-white">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-white/30" />
            <p className="text-[11px] uppercase tracking-widest text-white/70">
              Pond A · Water analysis
            </p>
            <p className="mt-1 text-sm font-medium text-white/90">
              Report · 12 Aug 2026
            </p>
          </div>

          {/* Health score card */}
          <div className="-mt-5 px-4">
            <div className="rounded-2xl border border-hairline bg-white p-4 shadow-sm">
              <div className="flex items-center gap-4">
                <ScoreRing score={68} />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                    Health score
                  </p>
                  <p className="text-lg font-semibold leading-tight text-ink">
                    Needs attention
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-muted">
                    2 of 4 parameters outside range
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Parameters */}
          <div className="px-4 pb-4 pt-4">
            <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
              Parameters
            </p>
            <div className="space-y-1.5">
              {parameters.map((p) => {
                const s = stateStyles[p.state];
                return (
                  <div
                    key={p.name}
                    className="flex items-center gap-3 rounded-xl border border-hairline bg-white px-3 py-2.5"
                  >
                    <span className={`h-2 w-2 shrink-0 rounded-full ${s.dot}`} />
                    <span className="flex-1 text-xs font-medium text-ink">{p.name}</span>
                    <span className="text-xs tabular-nums text-ink-muted">{p.value}</span>
                    <span className={`text-[10px] font-semibold ${s.text}`}>{s.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 rounded-xl bg-brand-50 p-3">
              <p className="text-[11px] font-semibold text-teal-ink">
                Recommended action
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-muted">
                Increase aeration through the night and hold feed at 80% until
                dissolved oxygen recovers above 4 mg/L.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const filled = (score / 100) * circumference;

  return (
    <div className="relative h-14 w-14 shrink-0">
      <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90">
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="var(--color-hairline)"
          strokeWidth="6"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          fill="none"
          stroke="var(--color-warn)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circumference}`}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-ink">
        {score}
      </span>
    </div>
  );
}
