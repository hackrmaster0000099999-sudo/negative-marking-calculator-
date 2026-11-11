import React, { useState } from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { LEGAL_CONTENT } from '../data/legalContent';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const { title, subtitle, intro, emailLabel, emailValue, responseNotice, disclaimerNotice } =
    LEGAL_CONTENT.contactUs;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [examName, setExamName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <LegalPageLayout title={title} subtitle={subtitle} onNavigateHome={onNavigateHome}>
      <div className="space-y-8">
        <p className="text-base text-slate-700 leading-relaxed">
          {intro}
        </p>

        {/* Email card */}
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
            <Mail className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-semibold text-slate-500">{emailLabel}</div>
            <a
              href={`mailto:${emailValue}`}
              className="text-base font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              {emailValue}
            </a>
            <div className="text-xs text-slate-500">{responseNotice}</div>
          </div>
        </div>

        {/* Advisory */}
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>{disclaimerNotice}</p>
        </div>

        {/* Contact / Feedback Form */}
        <div className="pt-4 border-t border-slate-200 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            सुझाव या त्रुटि सुधार फॉर्म (Feedback / Correction Form)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            यदि किसी परीक्षा की मार्किंग स्कीम में कोई नया संशोधन हुआ है, तो हमें सूचित करें ताकि हम गाइड को तुरंत अपडेट कर सकें।
          </p>

          {formSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="font-bold text-emerald-900 text-base">
                धन्यवाद! आपका संदेश सफलतापूर्वक दर्ज कर लिया गया है।
              </div>
              <p className="text-xs text-emerald-700">
                हमारी टीम आपके सुझाव की समीक्षा करेगी और आवश्यकतानुसार लेख में सुधार करेगी।
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setName('');
                  setEmail('');
                  setExamName('');
                  setMessage('');
                }}
                className="mt-3 text-xs text-indigo-600 hover:text-indigo-800 font-semibold underline"
              >
                दूसरा संदेश भेजें
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                    आपका नाम (Full Name) *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="अपना नाम लिखें"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                    ई-मेल पता (Email Address) *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="exam" className="block text-xs font-semibold text-slate-700">
                  संबंधित परीक्षा (Exam Name)
                </label>
                <input
                  id="exam"
                  type="text"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  placeholder="उदा. SSC CGL 2026, NEET UG, UPSC"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
                  आपका संदेश या सुझाव (Message) *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="कृपया अपना सुझाव या सुधार यहाँ विस्तार से लिखें..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>संदेश भेजें</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </LegalPageLayout>
  );
};
