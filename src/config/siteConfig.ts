/**
 * Centralized Configuration for Negative Marking Calculator Guide
 */

export const SITE_CONFIG = {
  name: 'Negative Marking Guide',
  hindiName: 'नेगेटिव मार्किंग गाइड',
  tagline: 'परीक्षा में अपने सही अंक और नेगेटिव मार्किंग का प्रभाव जानें',
  calculatorUrl: 'https://goutilix.com/negative-marking-calculator',
  siteUrl: 'https://negativemarkingcalculator.pages.dev',
  canonicalUrl: 'https://negativemarkingcalculator.pages.dev',
  author: 'GoUtilix Educational Team',
  targetExamYear: '2026-2027',
  contactEmailPlaceholder: 'support@goutilix.com',
};

export const NAV_LINKS = [
  { label: 'होम', path: '/' },
  { label: 'फॉर्मूला', path: '/#formula' },
  { label: 'मार्किंग अनुपात', path: '/#ratios' },
  { label: 'एग्जाम गाइड', path: '/#exams' },
  { label: 'अक्सर पूछे जाने वाले सवाल', path: '/#faq' },
  { label: 'हमारे बारे में', path: '/about-us' },
];

export const FOOTER_LINKS = {
  guide: [
    { label: 'नेगेटिव मार्किंग क्या है?', href: '/#what-is' },
    { label: 'नेगेटिव मार्किंग का फॉर्मूला', href: '/#formula' },
    { label: '1/4 और 1/3 मार्किंग अंतर', href: '/#ratios' },
    { label: 'स्कोर और एक्यूरेसी उदाहरण', href: '/#examples' },
    { label: 'प्रतियोगी परीक्षाओं की सूची', href: '/#exams' },
    { label: 'नेगेटिव मार्किंग से बचने के टिप्स', href: '/#tips' },
    { label: 'एफएक्यू (FAQ)', href: '/#faq' },
  ],
  legal: [
    { label: 'हमारे बारे में (About Us)', href: '/about-us' },
    { label: 'संपर्क करें (Contact Us)', href: '/contact-us' },
    { label: 'गोपनीयता नीति (Privacy Policy)', href: '/privacy-policy' },
    { label: 'नियम व शर्तें (Terms & Conditions)', href: '/terms-and-conditions' },
    { label: 'अस्वीकरण (Disclaimer)', href: '/disclaimer' },
  ],
  tool: [
    {
      label: 'नेगेटिव मार्किंग कैलकुलेटर (GoUtilix)',
      href: 'https://goutilix.com/negative-marking-calculator',
      external: true,
    },
  ],
};
