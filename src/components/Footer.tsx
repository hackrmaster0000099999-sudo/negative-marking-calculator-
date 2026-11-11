import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SITE_CONFIG, FOOTER_LINKS } from '../config/siteConfig';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('http')) return; // external link
    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Purpose */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                NM
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {SITE_CONFIG.hindiName}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              भारतीय प्रतियोगी परीक्षाओं के लिए समर्पित प्रामाणिक शैक्षिक गाइड। नेगेटिव मार्किंग के
              फॉर्मूले, उदाहरण, सटीकता और स्कोर विश्लेषण की संपूर्ण जानकारी।
            </p>
            <div className="pt-2">
              <a
                href={SITE_CONFIG.calculatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>GoUtilix कैलकुलेटर खोलें</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Guide Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider mb-4">
              महत्वपूर्ण विषय (Guide)
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.guide.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider mb-4">
              वैधानिक पृष्ठ (Legal)
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Tool Reference */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider mb-4">
              ऑनलाइन टूल (GoUtilix)
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              यह वेबसाइट एक शैक्षिक सूचना पोर्टल है। त्वरित और स्वचालित स्कोर गणना के लिए GoUtilix के
              नेगेटिव मार्किंग कैलकुलेटर का उपयोग करें।
            </p>
            <a
              href={SITE_CONFIG.calculatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors"
            >
              <span>मुख्य कैलकुलेटर पर जाएं</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">अस्वीकरण (Disclaimer):</strong> यह वेबसाइट केवल शैक्षिक और
            मार्गदर्शन उद्देश्यों के लिए बनाई गई है। इसका किसी भी सरकारी परीक्षा प्राधिकरण (जैसे UPSC,
            SSC, NTA, RRB, IBPS, आदि) से कोई आधिकारिक संबंध नहीं है। परीक्षा में बैठने से पहले छात्र
            संबधित परीक्षा बोर्ड की नवीनतम आधिकारिक अधिसूचना से मार्किंग स्कीम की पुष्टि अवश्य करें।
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Negative Marking Calculator Guide. सर्वाधिकार सुरक्षित।</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">हिंदी संस्करण · भारत</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
