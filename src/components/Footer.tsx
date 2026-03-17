const PLAY_LINKS = [
  'Play Pass',
  'Play Points',
  'Gift cards',
  'Redeem',
  'Refund policy',
];

const KIDS_LINKS = ['Parent Guide', 'Family sharing'];

const LEGAL_LINKS = [
  'Terms of Service',
  'Privacy',
  'About Anudle Play',
  'Developers',
  'Anudle Store',
];

export default function Footer() {
  return (
    <footer className="hidden lg:block border-t border-[#E0E0E0] mt-16 text-sm">
      <div className="max-w-[1290px] mx-auto py-10">
        {/* Top columns */}
        <div className="flex gap-24 mb-10">
          <div>
            <p className="text-[#202124] mb-3">Anudle Play</p>
            <ul className="space-y-2.5">
              {PLAY_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5F6368] hover:text-[#202124] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#202124] mb-3">Kids &amp; family</p>
            <ul className="space-y-2.5">
              {KIDS_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#5F6368] hover:text-[#202124] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 flex-wrap">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#5F6368] hover:text-[#202124] transition-colors whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          <button className="flex items-center gap-2 text-[#5F6368] hover:text-[#202124] transition-colors flex-shrink-0">
            <svg width="18" height="13" viewBox="0 0 18 13" aria-hidden="true">
              <rect width="18" height="13" rx="2" fill="#F0F0F0" />
              {/* Red stripes */}
              <rect y="0" width="18" height="1.5" fill="#B22234" />
              <rect y="3" width="18" height="1.5" fill="#B22234" />
              <rect y="6" width="18" height="1.5" fill="#B22234" />
              <rect y="9" width="18" height="1.5" fill="#B22234" />
              <rect y="11.5" width="18" height="1.5" fill="#B22234" />
              {/* Blue canton */}
              <rect width="7.5" height="7" fill="#3C3B6E" />
            </svg>
            United States (English (United States))
          </button>
        </div>
      </div>
    </footer>
  );
}
