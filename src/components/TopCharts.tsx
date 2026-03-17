import { useState } from "react";
import type { Game } from "../types";

interface Props {
  topFree: Game[];
  topGrossing: Game[];
  topPaid: Game[];
}

type Tab = "free" | "grossing" | "paid";

const TABS = [
  { id: "free" as Tab, label: "Top free" },
  { id: "grossing" as Tab, label: "Top grossing" },
  { id: "paid" as Tab, label: "Top paid" },
];

// ── Style constants ──────────────────────────────────────────────

const FONT_ROBOTO_16: React.CSSProperties = {
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: 16,
  fontWeight: 400,
  WebkitFontSmoothing: "antialiased",
};

const FONT_TAB: React.CSSProperties = {
  fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  WebkitFontSmoothing: "antialiased",
};

export default function TopCharts({ topFree, topGrossing, topPaid }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("free");
  const [touched, setTouched] = useState(false);

  const title = !touched ? "Top charts" : activeTab === "free" ? "Top free" : activeTab === "grossing" ? "Top grossing" : "Top paid";
  const games = activeTab === "free" ? topFree : activeTab === "grossing" ? topGrossing : topPaid;

  function handleTabChange(id: Tab) {
    setActiveTab(id);
    setTouched(true);
  }

  function handleCardKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") (e.currentTarget as HTMLElement).click();
  }

  return (
    <section className="mt-8" aria-label="Top charts">
      <div className="mb-3">
        <h2 className="text-[#202124]" style={FONT_ROBOTO_16}>{title}</h2>
      </div>

      <div role="tablist" aria-label="Chart type" className="flex gap-2 mb-4">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls="top-charts-panel"
            onClick={() => handleTabChange(tab.id)}
            className={[
              'px-4 py-1.5 rounded-full transition-all duration-150 border',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137333]/50',
              activeTab === tab.id
                ? 'bg-[#E6F4EA] text-[#137333] border-transparent'
                : 'bg-white text-[#5F6368] border-[#DADCE0] hover:bg-gray-50',
            ].join(' ')}
            style={FONT_TAB}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id="top-charts-panel"
        role="tabpanel"
        aria-label={title}
        className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 lg:grid-flow-col lg:gap-x-6"
      >
        {games.map((game, i) => (
          <div
            key={game.id}
            role="button"
            tabIndex={0}
            aria-label={`${game.title}, ranked ${i + 1}, rated ${game.rating.toFixed(1)} stars`}
            onKeyDown={handleCardKey}
            className="flex items-center gap-3 py-2.5 hover:bg-[#f5f5f5] active:bg-[#eeeeee] cursor-pointer rounded-xl -mx-2 px-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#137333]/40"
          >
            <span className="w-5 text-center text-[#5F6368] flex-shrink-0" style={FONT_ROBOTO_16} aria-hidden="true">{i + 1}</span>
            <img
              src={game.iconUrl}
              alt=""
              aria-hidden="true"
              className="w-14 h-14 rounded-2xl flex-shrink-0 border border-black/[0.05]"
            />
            <div className="flex-1 min-w-0" aria-hidden="true">
              <p className="font-medium text-[14px] text-[#202124] truncate">{game.title}</p>
              <p className="text-[12px] text-[#5F6368] truncate">{game.tags.join(' · ')}</p>
              <p className="text-[12px] text-[#5F6368] flex items-center gap-0.5 mt-0.5">
                {game.rating.toFixed(1)}
                <span className="text-[#5f6369]">★</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
