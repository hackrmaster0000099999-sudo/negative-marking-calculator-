import React, { useEffect } from 'react';
import { HINDI_CONTENT } from '../data/hindiContent';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOHeadProps {
  currentPath: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPath }) => {
  useEffect(() => {
    // Dynamic page title based on path
    let title = 'नेगेटिव मार्किंग कैलकुलेटर – परीक्षा में अपने सही अंक जानें | Negative Marking Guide';
    let description =
      'नेगेटिव मार्किंग कैलकुलेटर – प्रतियोगी परीक्षाओं के लिए नेगेटिव मार्किंग फॉर्मूला, 1/4, 1/3, 1/2 अनुपात और स्कोर गणना की संपूर्ण जानकारी।';

    if (currentPath === '/about-us') {
      title = 'हमारे बारे में (About Us) | Negative Marking Guide';
      description = 'नेगेटिव मार्किंग गाइड का परिचय, शैक्षिक मिशन और प्रतियोगी परीक्षा मार्गदर्शन।';
    } else if (currentPath === '/contact-us') {
      title = 'संपर्क करें (Contact Us) | Negative Marking Guide';
      description = 'नेगेटिव मार्किंग गाइड सहायता, सुझाव और परीक्षा स्कीम सुधार संपर्क।';
    } else if (currentPath === '/privacy-policy') {
      title = 'गोपनीयता नीति (Privacy Policy) | Negative Marking Guide';
      description = 'नेगेटिव मार्किंग गाइड की गोपनीयता नीति और डेटा सुरक्षा विवरण।';
    } else if (currentPath === '/terms-and-conditions') {
      title = 'नियम व शर्तें (Terms & Conditions) | Negative Marking Guide';
      description = 'नेगेटिव मार्किंग गाइड के नियम, उपयोग की शर्तें और दायित्व की सीमा।';
    } else if (currentPath === '/disclaimer') {
      title = 'अस्वीकरण (Disclaimer) | Negative Marking Guide';
      description = 'नेगेटिव मार्किंग गाइड का आधिकारिक अस्वीकरण और परीक्षा बोर्ड सूचना।';
    }

    document.title = title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update JSON-LD structured data script
    const scriptId = 'json-ld-schema';
    let scriptElem = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElem) {
      scriptElem = document.createElement('script');
      scriptElem.id = scriptId;
      scriptElem.type = 'application/ld+json';
      document.head.appendChild(scriptElem);
    }

    // Generate comprehensive schema: WebSite + FAQPage + WebPage
    const faqSchema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_CONFIG.canonicalUrl}#website`,
          url: SITE_CONFIG.canonicalUrl,
          name: SITE_CONFIG.name,
          alternateName: SITE_CONFIG.hindiName,
          description: description,
          inLanguage: 'hi',
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_CONFIG.canonicalUrl}${currentPath}`,
          url: `${SITE_CONFIG.canonicalUrl}${currentPath}`,
          name: title,
          description: description,
          inLanguage: 'hi',
          isPartOf: {
            '@id': `${SITE_CONFIG.canonicalUrl}#website`,
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: HINDI_CONTENT.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer.replace(/\n/g, '<br/>'),
            },
          })),
        },
      ],
    };

    scriptElem.textContent = JSON.stringify(faqSchema);
  }, [currentPath]);

  return null;
};
