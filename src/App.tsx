import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';

export default function App() {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    // Check hash first (e.g. #/about-us) for GitHub Pages compatibility
    const hash = window.location.hash;
    if (hash.startsWith('#/')) {
      return hash.slice(1);
    }
    const path = window.location.pathname;
    // Normalize path if deployed under subfolder
    if (path.includes('/about-us')) return '/about-us';
    if (path.includes('/contact-us')) return '/contact-us';
    if (path.includes('/privacy-policy')) return '/privacy-policy';
    if (path.includes('/terms-and-conditions')) return '/terms-and-conditions';
    if (path.includes('/disclaimer')) return '/disclaimer';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getInitialPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path.startsWith('/#')) {
      // Anchored section on home page
      if (currentPath !== '/') {
        setCurrentPath('/');
        window.history.pushState({}, '', path);
        setTimeout(() => {
          const id = path.substring(2);
          const elem = document.getElementById(id);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const id = path.substring(2);
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    setCurrentPath(path);
    window.history.pushState({}, '', path === '/' ? '/' : `#${path}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about-us':
        return <AboutPage onNavigateHome={() => navigateTo('/')} />;
      case '/contact-us':
        return <ContactPage onNavigateHome={() => navigateTo('/')} />;
      case '/privacy-policy':
        return <PrivacyPolicyPage onNavigateHome={() => navigateTo('/')} />;
      case '/terms-and-conditions':
        return <TermsPage onNavigateHome={() => navigateTo('/')} />;
      case '/disclaimer':
        return <DisclaimerPage onNavigateHome={() => navigateTo('/')} />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      <SEOHead currentPath={currentPath} />
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <div className="flex-1">{renderCurrentPage()}</div>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
