import { useRef } from "react";
import type { Game } from "../types";
import { useScrollCarousel } from "../hooks/useScrollCarousel";

interface Props {
  title: string;
  games: Game[];
}

// ── Style constants ──────────────────────────────────────────────

const FONT_ROBOTO_14: React.CSSProperties = {
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: 14,
  fontWeight: 400,
  WebkitFontSmoothing: "antialiased",
};

const FONT_TITLE: React.CSSProperties = {
  fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
  fontSize: 18,
  fontWeight: 500,
  WebkitFontSmoothing: "antialiased",
};

function CardContent({ game }: { game: Game }) {
  return (
    <div aria-hidden="true">
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <img
          src={game.bannerUrl}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/[0.08] opacity-0 group-hover/card:opacity-100 group-focus-visible/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      <div className="mt-5 flex items-start gap-2.5">
        <img src={game.iconUrl} alt="" aria-hidden="true" className="w-16 h-16 rounded-[12px] flex-shrink-0" style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }} />
        <div className="min-w-0">
          <p className="text-[#202124] truncate" style={{ ...FONT_ROBOTO_14, fontSize: 16 }}>{game.title}</p>
          <p className="text-[#5F6368] truncate" style={FONT_ROBOTO_14}>{game.tags.slice(0, 2).join(" · ")}</p>
          <p className="text-[#5F6368] flex items-center gap-0.5 mt-0.5" style={FONT_ROBOTO_14}>
            {game.rating.toFixed(1)}<span className="text-[#5f6369]">★</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GameCarousel({ title, games }: Props) {
  const { scrollRef, isAnimating, canGoPrev, canGoNext, handleNext, handlePrev } =
    useScrollCarousel({ step: 3, total: games.length });

  const midRef = useRef<HTMLDivElement>(null);

  function scrollMidNext() {
    midRef.current?.scrollBy({ left: 520, behavior: "smooth" });
  }
  function scrollMidPrev() {
    midRef.current?.scrollBy({ left: -520, behavior: "smooth" });
  }

  function handleCardKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") (e.currentTarget as HTMLElement).click();
  }

  return (
    <section className="mt-10" aria-label={title}>
      <div className="mb-3">
        <h2 className="text-[#202124]" style={FONT_TITLE}>{title}</h2>
      </div>

      {/* 769px+: animated carousel */}
      <div className="hidden md:block relative group/rec">
        {canGoPrev && (
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            aria-label={`Previous ${title} games`}
            className="absolute -left-5 top-[46%] -translate-y-1/2 z-10 w-[52px] h-[52px] bg-white rounded-full shadow-md flex items-center justify-center text-[#5F6368] hover:text-[#202124] opacity-0 group-hover/rec:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137333]/40 transition-opacity duration-200 disabled:pointer-events-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div ref={scrollRef} className="flex overflow-x-hidden">
          {games.map((game) => (
            <div
              key={game.id}
              role="button"
              tabIndex={0}
              aria-label={`${game.title}, ${game.tags.slice(0, 2).join(", ")}, rated ${game.rating.toFixed(1)} stars`}
              onKeyDown={handleCardKey}
              className="w-1/3 flex-shrink-0 p-3 first:pl-0 rounded-[8px] hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] transition-colors cursor-pointer group/card focus-visible:outline-none"
            >
              <CardContent game={game} />
            </div>
          ))}
        </div>

        {canGoNext && (
          <button
            onClick={handleNext}
            disabled={isAnimating}
            aria-label={`Next ${title} games`}
            className="absolute -right-5 top-[46%] -translate-y-1/2 z-10 w-[52px] h-[52px] bg-white rounded-full shadow-md flex items-center justify-center text-[#5F6368] hover:text-[#202124] opacity-0 group-hover/rec:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137333]/40 transition-opacity duration-200 disabled:pointer-events-none"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* 426–768px: horizontal scroll with hover arrows */}
      <div className="hidden lg:block md:hidden relative group/mid">
        <button
          onClick={scrollMidPrev}
          aria-label={`Previous ${title} games`}
          className="absolute left-0 top-[46%] -translate-y-1/2 z-10 w-[52px] h-[52px] bg-white rounded-full shadow-md flex items-center justify-center text-[#5F6368] hover:text-[#202124] opacity-0 group-hover/mid:opacity-100 focus-visible:opacity-100 focus-visible:outline-none transition-opacity duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div ref={midRef} className="flex gap-4 overflow-x-auto hide-scroll -mx-6 px-6 pb-1">
          {games.map((game) => (
            <div
              key={game.id}
              role="button"
              tabIndex={0}
              aria-label={`${game.title}, ${game.tags.slice(0, 2).join(", ")}, rated ${game.rating.toFixed(1)} stars`}
              onKeyDown={handleCardKey}
              className="flex-shrink-0 w-[500px] cursor-pointer group/card focus-visible:outline-none focus-visible:bg-[#f5f5f5] rounded-[8px]"
            >
              <CardContent game={game} />
            </div>
          ))}
        </div>

        <button
          onClick={scrollMidNext}
          aria-label={`Next ${title} games`}
          className="absolute right-0 top-[46%] -translate-y-1/2 z-10 w-[52px] h-[52px] bg-white rounded-full shadow-md flex items-center justify-center text-[#5F6368] hover:text-[#202124] opacity-0 group-hover/mid:opacity-100 focus-visible:opacity-100 focus-visible:outline-none transition-opacity duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Below 426px: mobile scroll */}
      <div className="lg:hidden flex gap-4 overflow-x-auto hide-scroll -mx-4 px-4 pb-1">
        {games.map((game) => (
          <div
            key={game.id}
            role="button"
            tabIndex={0}
            aria-label={`${game.title}, ${game.tags.slice(0, 2).join(", ")}, rated ${game.rating.toFixed(1)} stars`}
            onKeyDown={handleCardKey}
            className="flex-shrink-0 w-[72vw] max-w-[320px] cursor-pointer group/card focus-visible:outline-none focus-visible:bg-[#f5f5f5] rounded-[8px]"
          >
            <CardContent game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}
