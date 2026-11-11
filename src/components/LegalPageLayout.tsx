import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { PrimaryCTAButton } from './PrimaryCTAButton';
import { SITE_CONFIG } from '../config/siteConfig';

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onNavigateHome: () => void;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  children,
  onNavigateHome,
}) => {
  return (
    <div className="py-12 md:py-16 bg-slate-50 min-h-[calc(100vh-16rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb & Back */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>मुख्य पृष्ठ (Home) पर वापस जाएं</span>
          </button>
          <div className="text-xs text-slate-500">
            {SITE_CONFIG.hindiName}
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm text-slate-700 leading-relaxed space-y-6">
          {children}
        </div>

        {/* Bottom CTA Card */}
        <div className="p-6 bg-indigo-50/70 rounded-2xl border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              नेगेटिव मार्किंग की गणना के लिए टूल खोज रहे हैं?
            </h4>
            <p className="text-xs text-slate-600">
              GoUtilix पर हमारे मुख्य नेगेटिव मार्किंग कैलकुलेटर का निःशुल्क उपयोग करें।
            </p>
          </div>
          <PrimaryCTAButton text="कैलकुलेटर खोलें" size="sm" />
        </div>
      </div>
    </div>
  );
};
