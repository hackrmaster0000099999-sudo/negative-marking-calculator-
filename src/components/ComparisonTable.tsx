import React from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { Table, Check, X, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const { examplesTable } = HINDI_CONTENT;

  return (
    <section id="examples" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-indigo-700 tracking-wide">
            व्यावहारिक विश्लेषण (Real Case Studies)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            नेगेटिव मार्किंग के वास्तविक उदाहरण और स्कोर तुलना
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            नीचे दी गई तालिका में विभिन्न अभ्यर्थियों के प्रयासों की तुलना देखें। ध्यान दें कि कैसे समान सही उत्तर होने के बावजूद गलत तुक्के लगाने से कट-ऑफ के अंक हाथ से निकल जाते हैं।
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
              <tr>
                <th scope="col" className="p-3.5 sm:p-4 whitespace-nowrap">अभ्यर्थी / परिदृश्य</th>
                <th scope="col" className="p-3.5 sm:p-4 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-1 text-emerald-700">
                    <Check className="w-4 h-4" />
                    <span>सही उत्तर</span>
                  </div>
                </th>
                <th scope="col" className="p-3.5 sm:p-4 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-1 text-rose-700">
                    <X className="w-4 h-4" />
                    <span>गलत उत्तर</span>
                  </div>
                </th>
                <th scope="col" className="p-3.5 sm:p-4 text-center whitespace-nowrap">
                  <div className="flex items-center justify-center gap-1 text-slate-600">
                    <Minus className="w-4 h-4" />
                    <span>छोड़े प्रश्न</span>
                  </div>
                </th>
                <th scope="col" className="p-3.5 sm:p-4 text-right whitespace-nowrap">सकारात्मक अंक</th>
                <th scope="col" className="p-3.5 sm:p-4 text-right whitespace-nowrap">नकारात्मक कटौती</th>
                <th scope="col" className="p-3.5 sm:p-4 text-right whitespace-nowrap">अंतिम स्कोर</th>
                <th scope="col" className="p-3.5 sm:p-4 text-center whitespace-nowrap">सटीकता (Accuracy)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700 font-mono">
              {examplesTable.map((row) => (
                <tr key={row.candidate} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-sans">
                    <div className="font-bold text-slate-900">{row.candidate}</div>
                    <div className="text-xs text-slate-500 font-normal">{row.scenarioType}</div>
                  </td>
                  <td className="p-3.5 sm:p-4 text-center text-emerald-700 font-bold">
                    {row.correctAnswers}
                  </td>
                  <td className="p-3.5 sm:p-4 text-center text-rose-700 font-bold">
                    {row.wrongAnswers}
                  </td>
                  <td className="p-3.5 sm:p-4 text-center text-slate-500">
                    {row.unattempted}
                  </td>
                  <td className="p-3.5 sm:p-4 text-right text-slate-900">
                    +{row.positiveMarks.toFixed(2)}
                  </td>
                  <td className="p-3.5 sm:p-4 text-right text-rose-600">
                    -{row.negativeMarks.toFixed(2)}
                  </td>
                  <td className="p-3.5 sm:p-4 text-right font-extrabold text-indigo-700 text-base">
                    {row.netScore.toFixed(2)}
                  </td>
                  <td className="p-3.5 sm:p-4 text-center font-bold text-slate-800 font-sans">
                    {row.accuracy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detailed Insights from the comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/80 space-y-1.5">
            <h4 className="font-bold text-amber-900">
              अभ्यर्थी 1 बनाम अभ्यर्थी 2 का महत्वपूर्ण सबक:
            </h4>
            <p className="text-amber-800 leading-relaxed">
              दोनों ने 75 प्रश्न सही किए थे। लेकिन अभ्यर्थी 2 ने 100% प्रश्न हल करने के लालच में 15 अतिरिक्त तुक्के लगाए और अपने 3.75 मूल्यवान नेट अंक गंवा दिए। प्रतियोगी परीक्षा में 3.75 अंकों से सैकड़ों अभ्यर्थियों की मेरिट बदल जाती है।
            </p>
          </div>

          <div className="p-4 bg-rose-50 rounded-xl border border-rose-200/80 space-y-1.5">
            <h4 className="font-bold text-rose-900">
              अभ्यर्थी 6 (माइनस स्कोर) का सबक:
            </h4>
            <p className="text-rose-800 leading-relaxed">
              नेगेटिव मार्किंग में स्कोर शून्य से भी नीचे (-5.00) जा सकता है। इसलिए यदि आपको किसी प्रश्न का कोई अता-पता न हो, तो उसे खाली छोड़ देना ही बुद्धिमानी है।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
