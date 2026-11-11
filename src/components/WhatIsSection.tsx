import React from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { ShieldCheck, BookOpen, Scale, Target } from 'lucide-react';

export const WhatIsSection: React.FC = () => {
  const { whatIs, howItWorks } = HINDI_CONTENT;

  const reasonIcons = [ShieldCheck, BookOpen, Scale, Target];

  return (
    <section id="what-is" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 2: नेगेटिव मार्किंग क्या है? */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {whatIs.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              {whatIs.intro}
            </p>
          </div>

          {/* Reasons */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              {whatIs.reasonsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatIs.reasons.map((reason, idx) => {
                const IconComponent = reasonIcons[idx % reasonIcons.length];
                return (
                  <div
                    key={reason.title}
                    className="p-5 bg-white rounded-xl border border-slate-200 space-y-2"
                  >
                    <div className="flex items-center gap-2.5 text-indigo-700 font-semibold text-base">
                      <IconComponent className="w-5 h-5 shrink-0" />
                      <h4>{reason.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Positive vs Negative Marking Comparison Table */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold text-slate-900">
              {whatIs.positiveVsNegativeTitle}
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th scope="col" className="p-3.5 sm:p-4">पक्ष (Aspect)</th>
                    <th scope="col" className="p-3.5 sm:p-4">केवल पॉजिटिव मार्किंग</th>
                    <th scope="col" className="p-3.5 sm:p-4">नेगेटिव मार्किंग प्रणाली</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {whatIs.comparison.map((row) => (
                    <tr key={row.aspect} className="hover:bg-slate-50 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900 whitespace-nowrap">
                        {row.aspect}
                      </td>
                      <td className="p-3.5 sm:p-4 text-slate-600">{row.positiveOnly}</td>
                      <td className="p-3.5 sm:p-4 text-slate-800 font-medium">{row.negativeMarking}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Section 3: नेगेटिव मार्किंग कैसे काम करती है? */}
        <div className="max-w-4xl mx-auto space-y-8 pt-6 border-t border-slate-200">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {howItWorks.title}
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              {howItWorks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.steps.map((step) => (
              <div
                key={step.num}
                className="p-5 bg-white rounded-xl border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-indigo-600 tracking-wider">
                    {step.num}
                  </span>
                  <h4 className="text-base font-semibold text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
