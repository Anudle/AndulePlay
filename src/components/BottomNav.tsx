import { useState } from 'react';

const navItems = [
  {
    id: 'games',
    label: 'Games',
    icon: (filled: boolean) => (
      // Gamepad / controller icon
      <svg viewBox="0 0 24 24" width="24" height="24" fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {filled ? (
          <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H9v2H7v-2H5v-2h2V9h2v2h2v2zm4.5 1c-.83 0-1.5-.67-1.5-1.5S14.67 11 15.5 11s1.5.67 1.5 1.5S16.33 14 15.5 14zm3-3c-.83 0-1.5-.67-1.5-1.5S17.67 8 18.5 8s1.5.67 1.5 1.5S19.33 11 18.5 11z" />
        ) : (
          <>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M7 10v4M5 12h4" />
            <circle cx="15" cy="12" r="1" />
            <circle cx="18" cy="12" r="1" />
          </>
        )}
      </svg>
    ),
  },
  {
    id: 'apps',
    label: 'Apps',
    icon: (filled: boolean) => (
      <svg viewBox="0 0 24 24" width="24" height="24" fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {filled ? (
          <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
        ) : (
          <>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </>
        )}
      </svg>
    ),
  },
  {
    id: 'search',
    label: 'Search',
    icon: () => (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 'books',
    label: 'Books',
    icon: (filled: boolean) => (
      <svg viewBox="0 0 24 24" width="24" height="24" fill={filled ? 'currentColor' : 'none'} stroke={filled ? 'none' : 'currentColor'} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        {filled ? (
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
        ) : (
          <>
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          </>
        )}
      </svg>
    ),
  },
];

export default function BottomNav() {
  const [active, setActive] = useState('games');

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-50 bg-white border-t border-[#E8EAED]"
    >
      <div className="flex items-stretch">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 transition-colors ${
                isActive ? 'text-[#1A73E8]' : 'text-[#5F6368] hover:text-[#202124]'
              }`}
            >
              {/* Pill indicator behind active icon */}
              <div className="relative flex flex-col items-center gap-0.5">
                {isActive && (
                  <div className="absolute -inset-x-4 -inset-y-1 rounded-full bg-[#E8F0FE]" />
                )}
                <span className="relative">{item.icon(isActive)}</span>
              </div>
              <span className={`text-[10px] font-medium mt-0.5 ${isActive ? 'text-[#1A73E8]' : 'text-[#5F6368]'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
