import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '../config/siteConfig';
import { PrimaryCTAButton } from './PrimaryCTAButton';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#') && currentPath === '/') {
      // Smooth scroll on same page
      e.preventDefault();
      const targetId = path.substring(2);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-2 text-slate-900 hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              NM
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900">
                {SITE_CONFIG.hindiName}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600" aria-label="मुख्य नेविगेशन">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className="hover:text-indigo-600 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <PrimaryCTAButton text="कैलकुलेटर खोलें" size="sm" />
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <PrimaryCTAButton text="कैलकुलेटर" size="sm" showIcon={false} />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={mobileMenuOpen ? 'मेनू बंद करें' : 'मेनू खोलें'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2" aria-label="मोबाइल नेविगेशन">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <PrimaryCTAButton
              text="GoUtilix नेगेटिव मार्किंग कैलकुलेटर"
              className="w-full text-center"
              size="md"
            />
          </div>
        </div>
      )}
    </header>
  );
};
