import React from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { PrimaryCTAButton } from './PrimaryCTAButton';
import { Calculator, CheckCircle2, AlertTriangle, HelpCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { kicker, mainHeading, subHeading, ctaText, ctaNote } = HINDI_CONTENT.hero;

  const quickJumps = [
    { label: 'फॉर्मूला समझें', href: '#formula', icon: Calculator },
    { label: 'मार्किंग अनुपात', href: '#ratios', icon: CheckCircle2 },
    { label: 'स्कोर उदाहरण', href: '#examples', icon: AlertTriangle },
    { label: 'अक्सर पूछे जाने वाले सवाल', href: '#faq', icon: HelpCircle },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Background subtle graphic accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Quiet unboxed kicker */}
          <div className="text-xs font-semibold text-indigo-700 tracking-wide">
            {kicker}
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight text-balance">
            {mainHeading}
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {subHeading}
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimaryCTAButton
              text={ctaText}
              size="lg"
              className="w-full sm:w-auto shadow-md"
            />
          </div>

          <p className="text-xs text-slate-500 font-medium">
            {ctaNote}
          </p>

          {/* Clean Quick Section Jump Strip */}
          <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-600">
            <span className="font-semibold text-slate-700">त्वरित नेविगेशन:</span>
            {quickJumps.map((jump) => (
              <a
                key={jump.label}
                href={jump.href}
                onClick={(e) => handleScroll(e, jump.href)}
                className="inline-flex items-center gap-1.5 hover:text-indigo-600 transition-colors py-1 px-2 rounded hover:bg-slate-50"
              >
                <jump.icon className="w-3.5 h-3.5 text-slate-400" />
                <span>{jump.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
