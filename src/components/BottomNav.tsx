import { useState } from 'react';
import { GamesIcon, AppsIcon, SearchIcon, BooksIcon } from '../assets/icons';

const navItems = [
  { id: 'games',  label: 'Games',  Icon: GamesIcon },
  { id: 'apps',   label: 'Apps',   Icon: AppsIcon },
  { id: 'search', label: 'Search', Icon: SearchIcon },
  { id: 'books',  label: 'Books',  Icon: BooksIcon },
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
                <span className="relative"><item.Icon filled={isActive} /></span>
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
