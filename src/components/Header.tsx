import { useState, useEffect } from 'react';

// ── Navigation data ──────────────────────────────────────────────

const DESKTOP_NAV = [
  { id: 'games', label: 'Games' },
  { id: 'apps', label: 'Apps' },
  { id: 'movies', label: 'Movies & TV' },
  { id: 'books', label: 'Books' },
  { id: 'kids', label: 'Kids' },
];

const MOBILE_TABS = [
  { id: 'for-you', label: 'For you' },
  { id: 'top-charts', label: 'Top charts' },
  { id: 'other-devices', label: 'Other devices' },
  { id: 'kids', label: 'Kids' },
  { id: 'new', label: 'New' },
];

// ── Icons ────────────────────────────────────────────────────────

function PlayLogo() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-label="Anudle Play" role="img">
      <path d="M8 5L8 24L40 24Z" fill="url(#p1)" />
      <path d="M8 43L8 24L40 24Z" fill="url(#p2)" />
      <path d="M8 5L8 43L13 38L13 10Z" fill="url(#p3)" />
      <defs>
        <linearGradient id="p1" x1="8" y1="5" x2="40" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C9D4" />
          <stop offset="1" stopColor="#4FC3F7" />
        </linearGradient>
        <linearGradient id="p2" x1="8" y1="43" x2="40" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01E676" />
          <stop offset="1" stopColor="#4FC3F7" />
        </linearGradient>
        <linearGradient id="p3" x1="8" y1="5" x2="13" y2="43" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00BCD4" stopOpacity="0.5" />
          <stop offset="1" stopColor="#0097A7" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  );
}

function ProfileAvatar() {
  return (
    <button
      className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-[#34A853] ring-offset-1 flex-shrink-0"
      aria-label="Account"
    >
      <div
        className="w-full h-full flex items-center justify-center text-white text-sm font-semibold"
        style={{ background: 'linear-gradient(135deg, #4285F4 0%, #0F9D58 100%)' }}
      >
        A
      </div>
    </button>
  );
}

// ── Header ───────────────────────────────────────────────────────

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileTab, setActiveMobileTab] = useState('for-you');
  const [activeDesktopNav, setActiveDesktopNav] = useState('games');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 bg-white/95 w-full transition-shadow duration-200 overflow-x-hidden"
      style={{
        backdropFilter: 'blur(8px)',
        boxShadow: scrolled
          ? '0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2)'
          : 'none',
      }}
    >
      {/* ── Desktop nav bar ── */}
      <div className="hidden lg:flex items-center h-16 px-6 gap-6">
        <div className="flex items-center gap-2 flex-shrink-0">
          <PlayLogo />
          <span className="text-[22px] font-medium text-ink">Anudle Play</span>
        </div>

        <nav aria-label="Main navigation" className="flex items-stretch h-full gap-0.5">
          {DESKTOP_NAV.map((item) => {
            const isActive = activeDesktopNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveDesktopNav(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 text-sm font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-play-green/50 focus-visible:rounded ${
                  isActive ? 'text-play-green' : 'text-ink-dim hover:text-ink'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[3px] rounded-t-full bg-play-green" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex-1" />

        <div className="flex items-center">
          <button
            className="w-9 h-9 mx-3 flex items-center justify-center rounded-full text-ink-dim hover:bg-[#F1F3F4] transition-colors"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <button
            className="w-9 h-9 mx-3 flex items-center justify-center rounded-full text-ink-dim hover:bg-[#F1F3F4] transition-colors"
            aria-label="Help"
          >
            <HelpIcon />
          </button>
          <div className="ml-3">
            <ProfileAvatar />
          </div>
        </div>
      </div>

      {/* ── Mobile wordmark row ── */}
      <div className="lg:hidden flex items-center justify-between max-w-[480px] mx-auto px-4 h-14">
        <div className="flex items-center gap-2">
          <PlayLogo />
          <span className="text-[22px] font-medium text-ink">Anudle Play</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="relative w-9 h-9 flex items-center justify-center rounded-full text-ink-dim hover:bg-[#F1F3F4] transition-colors"
            aria-label="Notifications"
          >
            <BellIcon />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#EA4335] rounded-full border-2 border-white" />
          </button>
          <div className="ml-1">
            <ProfileAvatar />
          </div>
        </div>
      </div>

      {/* ── Mobile tab strip ── */}
      <div role="tablist" aria-label="Browse" className="lg:hidden flex flex-wrap max-w-[480px] mx-auto px-2">
        {MOBILE_TABS.map((tab) => {
          const isActive = activeMobileTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveMobileTab(tab.id)}
              className={`relative px-4 py-3 text-[13px] font-medium whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue/50 focus-visible:rounded ${
                isActive ? 'text-blue' : 'text-ink-dim hover:text-ink'
              }`}
            >
              {tab.label}
              {isActive && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-t-full bg-blue" />
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
}
