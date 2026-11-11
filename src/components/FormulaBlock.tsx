import React, { useState } from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { PrimaryCTAButton } from './PrimaryCTAButton';
import { Copy, Check, Calculator } from 'lucide-react';

export const FormulaBlock: React.FC = () => {
  const { formula } = HINDI_CONTENT;
  const [copied, setCopied] = useState(false);

  const handleCopyFormula = () => {
    navigator.clipboard.writeText(formula.formulaLatex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="formula" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-indigo-700 tracking-wide">
            गणितीय विश्लेषण (Mathematical Formulation)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {formula.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            नेगेटिव मार्किंग की गणना के लिए अखिल भारतीय स्तर पर एक सार्वभौमिक मानक सूत्र का उपयोग किया जाता है।
          </p>
        </div>

        {/* Formula Display Container */}
        <div className="p-6 sm:p-8 bg-slate-900 rounded-2xl text-white shadow-sm space-y-4">
          <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold">
              <Calculator className="w-4 h-4" />
              <span>मानक अंकन सूत्र (Standard Formula)</span>
            </div>
            <button
              type="button"
              onClick={handleCopyFormula}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700"
              aria-label="फॉर्मूला कॉपी करें"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'कॉपी हो गया' : 'कॉपी करें'}</span>
            </button>
          </div>

          <div className="space-y-3">
            <div className="font-mono text-base sm:text-xl font-bold text-indigo-300 tracking-wide break-words">
              {formula.formulaLatex}
            </div>
            <div className="text-sm sm:text-base text-slate-300 font-medium">
              {formula.formulaHindi}
            </div>
          </div>
        </div>

        {/* Variables Explanation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-slate-900">
            सूत्र में प्रयुक्त चरों (Variables) की विस्तृत व्याख्या:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {formula.variables.map((v) => (
              <div
                key={v.symbol}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5"
              >
                <div className="font-bold text-slate-900 text-sm">{v.symbol}</div>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.meaning}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Calculation Examples */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900">
            विभिन्न मार्किंग योजनाओं के 3 विस्तृत उदाहरण:
          </h3>

          <div className="grid grid-cols-1 gap-5">
            {formula.examples.map((ex) => (
              <div
                key={ex.id}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <h4 className="font-bold text-base text-slate-900">{ex.title}</h4>
                  <span className="text-xs font-mono font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded">
                    अनुपात: {ex.ratio}
                  </span>
                </div>

                <p className="text-sm text-slate-600 italic">
                  परिदृश्य: {ex.scenario}
                </p>

                <div className="bg-slate-50 p-4 rounded-lg font-mono text-xs sm:text-sm text-slate-800 space-y-1.5 border border-slate-100">
                  <div className="font-semibold text-indigo-900 pb-1">{ex.formulaDisplay}</div>
                  {ex.steps.map((st, i) => (
                    <div key={i} className="text-slate-700">
                      • {st}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm pt-1">
                  <span className="font-medium text-slate-600">अभ्यर्थी का शुद्ध प्राप्तांक:</span>
                  <span className="font-mono font-bold text-indigo-600 text-base">{ex.netScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRD CTA Placement 2: After the explanation of the calculation formula */}
        <div className="p-6 sm:p-8 bg-indigo-50/70 rounded-2xl border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-base">
              क्या आप अपनी परीक्षा का सटीक स्कोर निकालना चाहते हैं?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              मैन्युअल गणना में समय न गंवाएं। GoUtilix ऑनलाइन कैलकुलेटर से कुछ ही सेकंड में रिजल्ट पाएं।
            </p>
          </div>
          <PrimaryCTAButton
            text="कैलकुलेटर में स्कोर निकालें"
            size="md"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
