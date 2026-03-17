import { useState, useRef, useEffect } from 'react';
import { WindowsIcon, PhoneIcon, TabletIcon, TvIcon, ChromebookIcon, WatchIcon, XrIcon, ChevronLeftIcon, ChevronRightIcon } from '../assets/icons';

// ── Device data ──────────────────────────────────────────────────

const DEVICES = [
  { id: 'windows',    label: 'Windows',    icon: WindowsIcon },
  { id: 'phone',      label: 'Phone',      icon: PhoneIcon },
  { id: 'tablet',     label: 'Tablet',     icon: TabletIcon },
  { id: 'tv',         label: 'TV',         icon: TvIcon },
  { id: 'chromebook', label: 'Chromebook', icon: ChromebookIcon },
  { id: 'watch',      label: 'Watch',      icon: WatchIcon },
  { id: 'xr',         label: 'XR headset', icon: XrIcon },
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
    <div className="hidden lg:flex items-center pt-6 pb-[30px] relative">
      {canScrollLeft && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center z-10">
          <div className="w-12 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <button
            onClick={() => scrollPills('left')}
            aria-label="Scroll left"
            className="absolute left-1 w-7 h-7 rounded-full border border-divider bg-white flex items-center justify-center text-ink-dim hover:text-ink shadow-sm transition-colors"
          >
            <ChevronLeftIcon />
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
                'flex-shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border cursor-pointer',
                'focus-visible:outline-none',
                isActive
                  ? 'bg-chart-green-bg text-chart-green border-transparent focus-visible:bg-[#d3ead9]'
                  : 'bg-white text-ink-dim border-divider hover:bg-gray-50 focus-visible:bg-gray-100',
              ].join(' ')}
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
            className="absolute right-1 w-7 h-7 rounded-full border border-divider bg-white flex items-center justify-center text-ink-dim hover:text-ink shadow-sm transition-colors"
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </div>
  );
}
