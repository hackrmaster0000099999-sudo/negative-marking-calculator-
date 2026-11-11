import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { WhatIsSection } from '../components/WhatIsSection';
import { FormulaBlock } from '../components/FormulaBlock';
import { RatioCards } from '../components/RatioCards';
import { ComparisonTable } from '../components/ComparisonTable';
import { StrategySection } from '../components/StrategySection';
import { ExamGuideSection } from '../components/ExamGuideSection';
import { TipsAndWhySection } from '../components/TipsAndWhySection';
import { FAQAccordion } from '../components/FAQAccordion';
import { FinalCTASection } from '../components/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2 & 3. What is Negative Marking & How it Works */}
      <WhatIsSection />

      {/* 4. Negative Marking Formula & Step-by-Step Examples (with CTA 2) */}
      <FormulaBlock />

      {/* 5, 6, 7, 8. Ratios (1/4, 1/3, 1/2, 1/5) & Matrix (with CTA 3) */}
      <RatioCards />

      {/* 9. Comprehensive Comparison Table */}
      <ComparisonTable />

      {/* 10 & 11. Accuracy Formula, Break-even Probability & Strategic Attempt */}
      <StrategySection />

      {/* 12. Exam-Wise Guidelines (UPSC, SSC, NEET, JEE, RRB, Banking) (with CTA 4) */}
      <ExamGuideSection />

      {/* 13 & 14. Actionable Tips to Avoid Penalties & Why Use Online Tool */}
      <TipsAndWhySection />

      {/* 16. 15 Comprehensive FAQs with Category Filters */}
      <FAQAccordion />

      {/* 15. Final High-Conversion CTA Section */}
      <FinalCTASection />
    </main>
  );
};
