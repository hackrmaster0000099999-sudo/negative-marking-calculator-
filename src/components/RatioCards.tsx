import React from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { PrimaryCTAButton } from './PrimaryCTAButton';
import { Percent, AlertCircle } from 'lucide-react';

export const RatioCards: React.FC = () => {
  const { ratios } = HINDI_CONTENT;

  return (
    <section id="ratios" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="text-xs font-semibold text-indigo-700 tracking-wide">
            अनुपात तुलना (Marking Ratios Comparison)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            1/4, 1/3, 1/2 और 1/5 नेगेटिव मार्किंग क्या होती है?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            विभिन्न परीक्षाओं में प्रश्नों के मान और दंड अनुपात अलग-अलग होते हैं। जानिए प्रत्येक अनुपात का आपकी परीक्षा रणनीति और अंतिम स्कोर पर क्या प्रभाव पड़ता है।
          </p>
        </div>

        {/* 4 Ratio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ratios.map((item) => (
            <div
              key={item.ratio}
              className="bg-white rounded-xl border border-slate-200 p-6 space-y-5 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm font-mono">
                      {item.ratio}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    Ratio {item.ratio}
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {item.description}
                </p>

                {/* Penalties breakdown */}
                <div className="p-3.5 bg-slate-50 rounded-lg text-xs space-y-2 border border-slate-100">
                  <div className="font-semibold text-slate-800">विभिन्न अंक वाले प्रश्नों पर कटौती:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-600 font-mono">
                    <div className="p-1.5 bg-white rounded border border-slate-200">
                      <div className="text-[11px] text-slate-500">1 अंक का प्रश्न</div>
                      <div className="font-bold text-slate-900">{item.penaltyPerOneMark}</div>
                    </div>
                    <div className="p-1.5 bg-white rounded border border-slate-200">
                      <div className="text-[11px] text-slate-500">2 अंक का प्रश्न</div>
                      <div className="font-bold text-slate-900">{item.penaltyPerTwoMarks}</div>
                    </div>
                    <div className="p-1.5 bg-white rounded border border-slate-200">
                      <div className="text-[11px] text-slate-500">4 अंक का प्रश्न</div>
                      <div className="font-bold text-slate-900">{item.penaltyPerFourMarks}</div>
                    </div>
                  </div>
                </div>

                {/* Impact */}
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>रणनीतिक प्रभाव:</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-5">
                    {item.impactAnalysis}
                  </p>
                </div>
              </div>

              {/* Common exams */}
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">प्रमुख परीक्षाएं: </span>
                <span>{item.commonExams}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Ratio Summary Matrix */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Percent className="w-5 h-5 text-indigo-600" />
            <h4 className="font-bold text-slate-900 text-base">
              अनुपातों का त्वरित तुलनात्मक सारांश (Quick Comparison)
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
                <tr>
                  <th scope="col" className="p-3">अनुपात</th>
                  <th scope="col" className="p-3">प्रतिशत पेनल्टी</th>
                  <th scope="col" className="p-3">1 सही उत्तर खत्म करने के लिए गलत उत्तर</th>
                  <th scope="col" className="p-3">जोखिम स्तर</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">1/4</td>
                  <td className="p-3">25.00%</td>
                  <td className="p-3">4 गलत उत्तर</td>
                  <td className="p-3 text-emerald-600 font-semibold font-sans">मध्यम (Moderate)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">1/3</td>
                  <td className="p-3">33.33%</td>
                  <td className="p-3">3 गलत उत्तर</td>
                  <td className="p-3 text-amber-600 font-semibold font-sans">उच्च (High Risk)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">1/2</td>
                  <td className="p-3">50.00%</td>
                  <td className="p-3">2 गलत उत्तर</td>
                  <td className="p-3 text-rose-600 font-semibold font-sans">अति-उच्च (Very High)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">1/5</td>
                  <td className="p-3">20.00%</td>
                  <td className="p-3">5 गलत उत्तर</td>
                  <td className="p-3 text-slate-600 font-semibold font-sans">न्यूनतम (Low Risk)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PRD CTA Placement 3: After the marking ratio examples */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">
              क्या आपकी परीक्षा में 1/3 या 1/4 मार्किंग है?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              GoUtilix पर अपनी परीक्षा के अनुसार सही सकारात्मक अंक और नकारात्मक दंड चुनकर तुरंत परिणाम देखें।
            </p>
          </div>
          <PrimaryCTAButton
            text="GoUtilix कैलकुलेटर खोलें"
            size="md"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
