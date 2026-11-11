import React from 'react';
import { LegalPageLayout } from '../components/LegalPageLayout';
import { LEGAL_CONTENT } from '../data/legalContent';

interface DisclaimerPageProps {
  onNavigateHome: () => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onNavigateHome }) => {
  const { title, subtitle, sections } = LEGAL_CONTENT.disclaimer;

  return (
    <LegalPageLayout title={title} subtitle={subtitle} onNavigateHome={onNavigateHome}>
      <div className="space-y-8">
        {sections.map((sec) => (
          <div key={sec.heading} className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              {sec.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {sec.text}
            </p>
          </div>
        ))}
      </div>
    </LegalPageLayout>
  );
};
