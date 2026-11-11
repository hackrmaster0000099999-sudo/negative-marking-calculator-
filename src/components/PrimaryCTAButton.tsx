import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface PrimaryCTAButtonProps {
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
}

export const PrimaryCTAButton: React.FC<PrimaryCTAButtonProps> = ({
  text = 'अभी नेगेटिव मार्किंग कैलकुलेटर इस्तेमाल करें',
  className = '',
  size = 'md',
  showIcon = true,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold',
    md: 'px-6 py-3 text-sm font-semibold',
    lg: 'px-8 py-4 text-base font-bold shadow-sm hover:shadow',
  };

  return (
    <a
      href={SITE_CONFIG.calculatorUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white transition-colors duration-150 hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 whitespace-nowrap shrink-0 ${sizeClasses[size]} ${className}`}
    >
      <span>{text}</span>
      {showIcon && <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </a>
  );
};
