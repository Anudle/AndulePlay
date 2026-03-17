// ── Device Filter Icons ───────────────────────────────────────────

export function WindowsIcon() {
  return (
    <svg width="15" height="14" viewBox="0 0 24 22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="1" width="22" height="15" rx="2" />
      <path d="M8 21h8M12 16v5" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2.5" />
      <circle cx="12" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TabletIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <circle cx="18.5" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TvIcon() {
  return (
    <svg width="16" height="15" viewBox="0 0 26 28" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="8" width="24" height="15" rx="2" />
      <path d="M13 8L7 1M13 8L19 1" />
      <path d="M13 23v3" />
      <path d="M7 27L13 25L19 27" />
    </svg>
  );
}

export function ChromebookIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="13" rx="1.5" />
      <path d="M1 21h22" strokeWidth={2.5} />
      <path d="M9 17l2 4M15 17l-2 4" />
    </svg>
  );
}

export function WatchIcon() {
  return (
    <svg width="13" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="6" />
      <path d="M12 6V12L15 14" strokeLinecap="round" />
      <path d="M9 3.5h6M9 20.5h6" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

export function XrIcon() {
  return (
    <svg width="19" height="13" viewBox="0 0 36 22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="26" height="18" rx="3.5" />
      <rect x="1" y="6" width="5" height="10" rx="2" />
      <rect x="30" y="6" width="5" height="10" rx="2" />
      <rect x="14" y="2" width="8" height="3.5" rx="1.75" />
      <rect x="7" y="7" width="9" height="10" rx="2.5" />
      <rect x="20" y="7" width="9" height="10" rx="2.5" />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

// ── Bottom Nav Icons ──────────────────────────────────────────────

export function GamesIcon({ filled }: { filled: boolean }) {
  return (
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
  );
}

export function AppsIcon({ filled }: { filled: boolean }) {
  return (
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
  );
}

export function SearchIcon(_: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function BooksIcon({ filled }: { filled: boolean }) {
  return (
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
  );
}
