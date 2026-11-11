# Negative Marking Calculator – SEO Landing Page & Guide (नेगेटिव मार्किंग गाइड)

एक अत्यधिक अनुकूलित (highly optimized), समृद्ध और प्रामाणिक हिंदी शैक्षिक वेबसाइट जो भारतीय प्रतियोगी परीक्षा अभ्यर्थियों को नेगेटिव मार्किंग की गणना, 1/4, 1/3, 1/2 अनुपात, फॉर्मूला, उदाहरण और सटीकता (Accuracy) के बारे में शिक्षित करती है।

मुख्य ऑनलाइन कैलकुलेटर लिंक: [GoUtilix Negative Marking Calculator](https://goutilix.com/negative-marking-calculator)

---

## मुख्य विशेषताएं (Key Features)

- **100% शुद्ध और स्वाभाविक हिंदी सामग्री**: शीर्षकों, पैराग्राफों, तालिकाओं और कानूनी पेजों सहित संपूर्ण सामग्री मानक देवनागरी में।
- **विस्तृत गणितीय सूत्र एवं चरण-दर-चरण उदाहरण**: 1 अंक, 2 अंक और 4 अंक वाले प्रश्नों के लिए 1/4, 1/3 और 1/2 मार्किंग के स्पष्ट गणना चरण।
- **वास्तविक स्कोर तुलना तालिका**: 6 वास्तविक छात्र परिदृश्यों (संतुलित प्रयास, अधिक तुक्के, माइनस स्कोर) का सांख्यिकीय विश्लेषण।
- **Accuracy एवं Break-even Probability**: एक्यूरेसी निकालने का फॉर्मूला और तुक्का लगाने के जोखिम का गणितीय विश्लेषण।
- **प्रमुख भारतीय परीक्षाएं**: UPSC Civil Services, SSC CGL/CHSL/GD, RRB NTPC/Group D, NEET UG, JEE Main, Banking (IBPS/SBI) और State PSCs की विस्तृत जानकारी।
- **15+ विस्तृत FAQs**: सर्च इंजन के लिए संरचित उत्तर और Schema.org FAQPage मार्कअप।
- **कानूनी एवं सूचनात्मक पृष्ठ**: About Us, Contact Us, Privacy Policy, Terms & Conditions और Disclaimer।
- **Google Search Console & SEO Ready**:
  - `robots.txt` और `sitemap.xml`
  - OpenGraph और Twitter Cards
  - Schema.org JSON-LD (WebSite, WebPage, FAQPage)
  - `<html lang="hi">` घोषणा

---

## तकनीकी ढांचा (Tech Stack)

- **React 19**
- **Vite 8**
- **Tailwind CSS v4**
- **TypeScript**
- **Lucide React Icons**

---

## स्थानीय विकास और निर्माण (Local Development & Build)

```bash
# निर्भरताएं इंस्टॉल करें
npm install

# यूनिट टेस्ट चलाएं
npx tsx --test src/utils/markingCalculations.test.ts

# डेवलपमेंट सर्वर शुरू करें (Port 3000)
npm run dev

# प्रोडक्शन बिल्ड तैयार करें
npm run build
```

---

## GitHub Pages पर डिप्लॉयमेंट (Deployment to GitHub Pages)

यह प्रोजेक्ट GitHub Pages के लिए पूरी तरह अनुकूलित है:
1. `vite.config.ts` में `base: process.env.VITE_BASE_PATH || './'` कॉन्फ़िगर किया गया है ताकि यह सबडायरेक्टरी में भी बिना किसी रूट त्रुटि के काम करे।
2. रिपॉजिटरी में पुश करने के बाद GitHub Actions या `npm run build` से उत्पन्न `dist` फोल्डर को `gh-pages` ब्रांच पर पब्लिश करें।
