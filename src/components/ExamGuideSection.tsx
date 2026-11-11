import React, { useState } from 'react';
import { HINDI_CONTENT, ExamDetail } from '../data/hindiContent';
import { PrimaryCTAButton } from './PrimaryCTAButton';
import { GraduationCap, AlertTriangle, Search } from 'lucide-react';

export const ExamGuideSection: React.FC = () => {
  const { examsList } = HINDI_CONTENT;
  const [filterText, setFilterText] = useState('');

  const filteredExams = examsList.filter(
    (exam) =>
      exam.examName.toLowerCase().includes(filterText.toLowerCase()) ||
      exam.organizingBody.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <section id="exams" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold text-indigo-700 tracking-wide">
            परीक्षा-वार विश्लेषण (Exam-Wise Scheme Guide)
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            प्रमुख भारतीय प्रतियोगी परीक्षाओं में नेगेटिव मार्किंग के नियम
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            प्रत्येक परीक्षा बोर्ड की अपनी विशिष्ट अंकन योजना (Marking Scheme) होती है। नीचे भारत की शीर्ष प्रतियोगी परीक्षाओं की नेगेटिव मार्किंग और दंड अनुपात का प्रामाणिक विवरण दिया गया है।
          </p>
        </div>

        {/* Important Warning Banner as per PRD */}
        <div className="p-4 sm:p-5 bg-amber-50 rounded-xl border border-amber-200/80 flex items-start gap-3.5 text-xs sm:text-sm text-amber-900">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1 leading-relaxed">
            <span className="font-bold">महत्वपूर्ण सूचना (Candidate Advisory): </span>
            परीक्षा प्राधिकरण (जैसे UPSC, SSC, NTA, RRB, IBPS) समय-समय पर अपने परीक्षा पैटर्न, टियर और नेगेटिव मार्किंग नियमों में संशोधन कर सकते हैं। नीचे दी गई जानकारी सामान्य अधिसूचनाओं पर आधारित है। कृपया अपनी विशिष्ट परीक्षा के नवीनतम आधिकारिक सूचना विवरणिका (Official Information Bulletin) की पुष्टि अवश्य करें।
          </div>
        </div>

        {/* Filter Input */}
        <div className="flex items-center gap-3 max-w-md">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              placeholder="परीक्षा का नाम खोजें (उदा. UPSC, SSC, NEET, Banking)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
            />
          </div>
          {filterText && (
            <button
              type="button"
              onClick={() => setFilterText('')}
              className="text-xs text-slate-500 hover:text-slate-800 underline whitespace-nowrap"
            >
              साफ़ करें
            </button>
          )}
        </div>

        {/* Exam Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-slate-50/70 rounded-xl border border-slate-200 p-6 space-y-4 hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2 border-b border-slate-200/80 pb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {exam.examName}
                    </h3>
                    <div className="text-xs text-slate-500 font-medium">
                      {exam.organizingBody}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-white border border-slate-200 px-2.5 py-1 rounded whitespace-nowrap">
                    {exam.ratio}
                  </span>
                </div>

                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-700">पैटर्न सारांश: </span>
                  {exam.patternSummary}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="block text-[11px] text-slate-500 font-sans">सही उत्तर पर अंक:</span>
                    <span className="font-bold text-emerald-700">{exam.positiveMark}</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="block text-[11px] text-slate-500 font-sans">गलत उत्तर पर पेनल्टी:</span>
                    <span className="font-bold text-rose-600">{exam.negativeMark}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 leading-relaxed bg-white p-3 rounded-lg border border-slate-100">
                  <span className="font-semibold text-slate-800">विशेष निर्देश: </span>
                  {exam.criticalNotes}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PRD CTA Placement 4: After the examination-specific information */}
        <div className="p-6 sm:p-8 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-white text-base sm:text-lg">
              अपनी परीक्षा के अनुसार वास्तविक स्कोर अभी चेक करें
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              UPSC, SSC, NEET, JEE, RRB और Banking के लिए GoUtilix नेगेटिव मार्किंग कैलकुलेटर का निःशुल्क उपयोग करें।
            </p>
          </div>
          <PrimaryCTAButton
            text="कैलकुलेटर पर जाएं"
            size="md"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
