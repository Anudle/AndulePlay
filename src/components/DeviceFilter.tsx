import { useState, useRef, useEffect } from 'react';

// ── Style constants ──────────────────────────────────────────────

const FONT_NAV = {
  fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  WebkitFontSmoothing: 'antialiased' as const,
};

// ── Device data ──────────────────────────────────────────────────

const DEVICES = [
  {
    id: 'windows',
    label: 'Windows',
    icon: () => (
      <svg width="15" height="14" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="1" width="22" height="15" rx="2" />
        <path d="M8 21h8M12 16v5" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Phone',
    icon: () => (
      <svg width="13" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2.5" />
        <circle cx="12" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'tablet',
    label: 'Tablet',
    icon: () => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <circle cx="18.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'tv',
    label: 'TV',
    icon: () => (
      <svg width="16" height="15" viewBox="0 0 26 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="1" y="8" width="24" height="15" rx="2" />
        <path d="M13 8L7 1M13 8L19 1" />
        <path d="M13 23v3" />
        <path d="M7 27L13 25L19 27" />
      </svg>
    ),
  },
  {
    id: 'chromebook',
    label: 'Chromebook',
    icon: () => (
      <svg width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="13" rx="1.5" />
        <path d="M1 21h22" strokeWidth={2.5} />
        <path d="M9 17l2 4M15 17l-2 4" />
      </svg>
    ),
  },
  {
    id: 'watch',
    label: 'Watch',
    icon: () => (
      <svg width="13" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="6" />
        <path d="M12 6V12L15 14" strokeLinecap="round" />
        <path d="M9 3.5h6M9 20.5h6" strokeWidth={3} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'xr',
    label: 'XR headset',
    icon: () => (
      <svg width="19" height="13" viewBox="0 0 36 22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="26" height="18" rx="3.5" />
        <rect x="1" y="6" width="5" height="10" rx="2" />
        <rect x="30" y="6" width="5" height="10" rx="2" />
        <rect x="14" y="2" width="8" height="3.5" rx="1.75" />
        <rect x="7" y="7" width="9" height="10" rx="2.5" />
        <rect x="20" y="7" width="9" height="10" rx="2.5" />
      </svg>
    ),
  },
];

// ── DeviceFilter ─────────────────────────────────────────────────

export default function DeviceFilter() {
  const [selectedDevice, setSelectedDevice] = useState('phone');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const revertTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function updateScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }

  function scrollPills(dir: 'left' | 'right') {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -200 : 200, behavior: 'smooth' });
  }

  function handleSelect(id: string) {
    if (revertTimerRef.current) clearTimeout(revertTimerRef.current);
    setSelectedDevice(id);
    if (id !== 'phone') {
      revertTimerRef.current = setTimeout(() => setSelectedDevice('phone'), 700);
    }
  }

  useEffect(() => {
    updateScroll();
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateScroll);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    return () => { if (revertTimerRef.current) clearTimeout(revertTimerRef.current); };
  }, []);

  return (
    <div className="hidden lg:flex items-center py-4 relative">
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center z-10">
          <div className="w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <button
            onClick={() => scrollPills('left')}
            aria-label="Scroll left"
            className="absolute left-1 w-7 h-7 rounded-full border border-[#DADCE0] bg-white flex items-center justify-center text-[#5F6368] hover:text-[#202124] shadow-sm transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        </div>
      )}

      <div
        role="group"
        aria-label="Filter by device"
        ref={scrollRef}
        onScroll={updateScroll}
        className="flex items-center gap-2 overflow-x-auto hide-scroll w-full"
      >
        {DEVICES.map((device) => {
          const isActive = selectedDevice === device.id;
          const Icon = device.icon;
          return (
            <button
              key={device.id}
              onClick={() => handleSelect(device.id)}
              aria-pressed={isActive}
              className={[
                'flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-150 border',
                'focus-visible:outline-none',
                isActive
                  ? 'bg-[#E6F4EA] text-[#137333] border-transparent focus-visible:bg-[#d3ead9]'
                  : 'bg-white text-[#5F6368] border-[#DADCE0] hover:bg-gray-50 hover:border-gray-400 focus-visible:bg-gray-100 focus-visible:border-gray-400',
              ].join(' ')}
              style={FONT_NAV}
            >
              <Icon />
              {device.label}
            </button>
          );
        })}
      </div>

      {canScrollRight && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
          <div className="w-12 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <button
            onClick={() => scrollPills('right')}
            aria-label="Scroll right"
            className="absolute right-1 w-7 h-7 rounded-full border border-[#DADCE0] bg-white flex items-center justify-center text-[#5F6368] hover:text-[#202124] shadow-sm transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}
