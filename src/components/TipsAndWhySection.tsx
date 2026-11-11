import React from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { Lightbulb, Zap, Shield, Sparkles } from 'lucide-react';

export const TipsAndWhySection: React.FC = () => {
  const { tips, whyUseCalculator } = HINDI_CONTENT;

  return (
    <section id="tips" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section 13: उपयोगी सुझाव */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold text-indigo-700 tracking-wide">
              टॉपर स्ट्रेटेजी (Practical Exam Advice)
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              नेगेटिव मार्किंग से बचने के 6 अचूक व्यावहारिक सुझाव
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              परीक्षा भवन में एक गलत निर्णय आपके चयन को एक साल के लिए रोक सकता है। नीचे दिए गए सुझावों को अपनी अध्ययन आदत में शामिल करें।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((tip) => (
              <div
                key={tip.num}
                className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      टिप {tip.num}
                    </span>
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {tip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 14: कैलकुलेटर का उपयोग क्यों करें? */}
        <div className="space-y-8 pt-8 border-t border-slate-200">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold text-indigo-700 tracking-wide">
              स्मार्ट टूल्स (Smart Tools)
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              {whyUseCalculator.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              मॉक टेस्ट और उत्तर कुंजी (Answer Key) आने के बाद समय बचाने और सटीक विश्लेषण के लिए ऑनलाइन टूल सबसे प्रभावी माध्यम है।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUseCalculator.benefits.map((b, idx) => (
              <div
                key={b.title}
                className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
