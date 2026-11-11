import React from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { PrimaryCTAButton } from './PrimaryCTAButton';
import { CheckCircle2 } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const { heading, subheading, buttonText } = HINDI_CONTENT.finalCta;

  const features = [
    'तत्काल और सटीक नेट स्कोर',
    'सटीकता (Accuracy %) गणना',
    'सभी प्रतियोगी परीक्षाओं के लिए अनुकूल',
    '100% निःशुल्क और विज्ञापन-मुक्त अनुभव',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-900 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl space-y-6 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
              {subheading}
            </p>
          </div>

          <div className="relative pt-2">
            <PrimaryCTAButton
              text={buttonText}
              size="lg"
              className="bg-white text-indigo-900 hover:bg-slate-100 font-bold shadow-lg"
            />
          </div>

          <div className="relative pt-6 border-t border-indigo-800/80 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-indigo-200">
            {features.map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
