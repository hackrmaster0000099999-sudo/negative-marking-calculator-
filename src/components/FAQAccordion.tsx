import React, { useState } from 'react';
import { HINDI_CONTENT, FAQItem } from '../data/hindiContent';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const { faqs } = HINDI_CONTENT;
  const [openIds, setOpenIds] = useState<number[]>([1, 3, 6]); // Default open popular questions
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = [
    { key: 'all', label: 'सभी सवाल (15)' },
    { key: 'basics', label: 'मूल बातें (Basics)' },
    { key: 'formula', label: 'फॉर्मूला और गणना' },
    { key: 'exams', label: 'विशिष्ट परीक्षाएं' },
    { key: 'strategy', label: 'रणनीति और एक्यूरेसी' },
  ];

  const filteredFaqs = faqs.filter(
    (faq) => selectedCategory === 'all' || faq.category === selectedCategory
  );

  return (
    <section id="faq" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Heading */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-indigo-700 tracking-wide">
            प्रश्नोत्तरी (Frequently Asked Questions)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            नेगेटिव मार्किंग से जुड़े अक्सर पूछे जाने वाले सवाल (FAQ)
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            छात्रों द्वारा सबसे अधिक पूछे जाने वाले 15 महत्वपूर्ण प्रश्नों के विस्तृत, प्रामाणिक और सरल हिंदी उत्तर यहाँ पढ़ें।
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap ${
                selectedCategory === cat.key
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {faq.id}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3.5 whitespace-pre-line bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
