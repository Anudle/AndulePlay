import type { Game } from "../types";
import { useScrollCarousel } from "../hooks/useScrollCarousel";

interface Props {
  games: Game[];
}

export default function FeaturedHero({ games }: Props) {
  const { scrollRef, isAnimating, canGoPrev, canGoNext, handleNext, handlePrev } =
    useScrollCarousel({ step: 2, total: games.length, clamp: true });

  return (
    <div className="relative group/feat">
      {canGoPrev && (
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          aria-label="Previous"
          className="hidden lg:flex absolute -left-5 top-[46%] -translate-y-1/2 z-10 w-[52px] h-[52px] bg-white rounded-full shadow-md items-center justify-center text-ink-dim hover:text-ink opacity-0 group-hover/feat:opacity-100 transition-opacity duration-200 disabled:pointer-events-none"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <div ref={scrollRef} className="flex overflow-x-auto hide-scroll px-4 lg:px-0">
        {games.map((game) => (
          <div
            key={game.id}
            className="w-[calc(100%-36px+24px)] lg:w-[550px] flex-shrink-0 px-3 first:pl-0 py-2 rounded-[8px] hover:bg-[#f5f5f5] transition-colors cursor-pointer group/card"
          >
            <div
              className="w-full rounded-[8px] overflow-hidden shadow-sm transition-shadow flex flex-col h-[320px]"
              style={{ backgroundColor: game.themeColor ?? "#ffffff" }}
            >
              <div className="relative overflow-hidden flex-1">
                <img
                  src={game.bannerUrl}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/[0.08] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />
                {game.badge && (
                  <span
                    className="absolute top-0 left-0 px-3 py-1 rounded-[8px] text-white text-sm font-medium"
                    style={{ background: "rgba(0,0,0,0.45)" }}
                  >
                    {game.badge}
                  </span>
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 pt-14 pb-3"
                  style={{
                    background: game.themeColor
                      ? `linear-gradient(to top, ${game.themeColor} 0%, transparent 100%)`
                      : "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)",
                  }}
                >
                  <p className="text-white leading-snug text-lg font-medium">
                    {game.tagline ?? game.title}
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 flex items-center gap-3">
                <img
                  src={game.iconUrl}
                  alt={`${game.title} icon`}
                  className="w-[52px] h-[52px] rounded-[14px] flex-shrink-0"
                  style={{
                    border: game.themeColor
                      ? "1px solid rgba(255,255,255,0.15)"
                      : "1px solid rgba(0,0,0,0.06)",
                  }}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className="truncate text-sm"
                    style={{ color: game.themeColor ? "#ffffff" : "#111827" }}
                  >
                    {game.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5 flex-wrap">
                    <span
                      className="truncate max-w-[120px] text-xs"
                      style={{ color: game.themeColor ? "rgba(255,255,255,0.65)" : "#6B7280" }}
                    >
                      {game.developer}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: game.themeColor ? "rgba(255,255,255,0.35)" : "#D1D5DB" }}
                    >
                      ·
                    </span>
                    <span
                      className="text-xs flex items-center gap-0.5"
                      style={{ color: game.themeColor ? "rgba(255,255,255,0.65)" : "#4B5563" }}
                    >
                      {game.rating.toFixed(1)}
                      <span style={{ color: game.themeColor ? "rgba(255,255,255,0.9)" : "#5f6369" }}>★</span>
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 flex flex-col items-end gap-1">
                  <button
                    className="px-5 py-2 text-[13px] font-medium rounded-[8px] text-white transition-colors"
                    style={{ background: game.themeColor ? "rgba(255,255,255,0.18)" : "#1A73E8" }}
                  >
                    Install
                  </button>
                  <span
                    className="text-[10px]"
                    style={{ color: game.themeColor ? "rgba(255,255,255,0.45)" : "#9CA3AF" }}
                  >
                    In-app purchases
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {canGoNext && (
        <button
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next"
          className="hidden lg:flex absolute -right-5 top-[46%] -translate-y-1/2 z-10 w-[52px] h-[52px] bg-white rounded-full shadow-md items-center justify-center text-ink-dim hover:text-ink opacity-0 group-hover/feat:opacity-100 transition-opacity duration-200 disabled:pointer-events-none"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}
