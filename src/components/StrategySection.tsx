import React from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { Target, TrendingUp, CheckCircle, HelpCircle } from 'lucide-react';

export const StrategySection: React.FC = () => {
  const { accuracySection, strategySection } = HINDI_CONTENT;

  return (
    <section id="accuracy" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 10: Accuracy (सटीकता) */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-semibold text-indigo-700 tracking-wide">
              सटीकता विश्लेषण (Accuracy Analytics)
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {accuracySection.title}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {accuracySection.intro}
            </p>
          </div>

          {/* Accuracy Formula Card */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
              <Target className="w-5 h-5" />
              <span>सटीकता (Accuracy) निकालने का गणितीय सूत्र:</span>
            </div>
            <div className="p-4 bg-slate-900 text-white rounded-lg font-mono text-sm sm:text-base font-bold">
              {accuracySection.formulaLatex}
            </div>
            <div className="text-xs sm:text-sm text-slate-600 font-medium">
              {accuracySection.formulaHindi}
            </div>
            <div className="p-3 bg-indigo-50/60 rounded-lg text-xs text-indigo-900 leading-relaxed">
              <strong className="font-semibold">महत्वपूर्ण नोट: </strong>
              यदि किसी अभ्यर्थी ने कोई भी प्रश्न हल नहीं किया (0 प्रयास), तो गणितीय रूप से 0/0 होने के कारण एक्यूरेसी को शून्य (0%) कहने के बजाय ‘अपरिभाषित (Undefined)’ माना जाता है।
            </div>
          </div>

          {/* Break-even Accuracy Explanation */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {accuracySection.breakEvenTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {accuracySection.breakEvenDesc}
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 font-mono text-xs sm:text-sm text-indigo-900 font-bold">
              {accuracySection.breakEvenFormula}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {accuracySection.ratiosBreakEven.map((item) => (
                <div
                  key={item.ratio}
                  className="p-5 bg-white rounded-xl border border-slate-200 space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="font-bold text-slate-900 text-sm">{item.ratio}</div>
                    <div className="text-xs font-mono text-slate-500">{item.math}</div>
                    <div className="text-base font-extrabold text-indigo-700 font-mono">
                      {item.breakeven}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 11: कितने प्रश्न Attempt करने चाहिए? */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="space-y-3">
            <div className="text-xs font-semibold text-indigo-700 tracking-wide">
              परीक्षा रणनीति (Attempt Strategy)
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {strategySection.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {strategySection.subtitle} – जानिए वास्तविक परीक्षा कक्ष में आपको कितने प्रश्न हल करने चाहिए और कब रुकना चाहिए।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {strategySection.points.map((pt, idx) => (
              <div
                key={pt.title}
                className="p-6 bg-white rounded-xl border border-slate-200 space-y-2.5 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 shrink-0 text-emerald-600" />
                  <h4>{pt.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
