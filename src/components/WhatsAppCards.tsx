"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * A WhatsApp chat in a phone frame: the report cards arrive one by one, each
 * sliding in as a message bubble after a short "typing" beat. Auto-play is off
 * under reduced-motion; the dots still switch cards.
 */
const CARD_MS = 3200;

export type ChatCard = { src: string; alt: string };

export default function WhatsAppCards({
  from,
  cards,
}: {
  from: string;
  cards: readonly ChatCard[];
}) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setTimeout(
      () => setIndex((i) => (i + 1) % cards.length),
      CARD_MS,
    );
    return () => window.clearTimeout(timer);
  }, [index, reduceMotion, cards.length]);

  const card = cards[index];

  return (
    <div className="flow-float w-[15rem] rotate-2 [--tilt:2deg] sm:w-[16rem]">
      <div className="overflow-hidden rounded-[1.75rem] border-4 border-slate-900 bg-[#efeae2] shadow-xl shadow-black/40">
        <div className="flex items-center gap-2 bg-white px-3 py-2">
          <Image
            src="/whatsapp-avatar.webp"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-full"
          />
          <p className="flex items-center gap-1.5 text-sm font-medium text-slate-800">
            {from}
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#25d366]" aria-label="WhatsApp" role="img">
              <path
                fill="currentColor"
                d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.17-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.07.9.92-2.99-.2-.31a8.2 8.2 0 1 1 6.83 3.72Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.29Z"
              />
            </svg>
          </p>
        </div>

        <div className="relative flex aspect-[4/5] flex-col justify-end p-2.5">
          <div
            key={card.src}
            className={`rounded-xl rounded-tl-none bg-white p-1 shadow-sm ${
              reduceMotion ? "" : "flow-bubble"
            }`}
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={720}
              height={720}
              sizes="16rem"
              className="h-auto w-full rounded-lg"
            />
            <p className="px-1 pb-0.5 pt-1 text-right text-[0.6rem] text-slate-400">
              Aqua Astra
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {cards.map((c, i) => (
          <button
            key={c.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show report card ${i + 1}`}
            aria-pressed={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
