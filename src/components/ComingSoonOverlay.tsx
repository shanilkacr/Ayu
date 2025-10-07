import React from 'react';

export const ComingSoonOverlay: React.FC = () => {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-[64px] font-normal uppercase z-10 max-md:text-5xl max-sm:text-4xl">
        <h2>Coming Soon</h2>
      </div>
      <div className="absolute -translate-x-2/4 text-white text-center text-base font-normal uppercase z-10 left-2/4 bottom-6 max-md:text-sm max-md:bottom-5 max-sm:text-xs max-sm:bottom-[15px]">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="Follow us on Instagram"
        >
          instagram
        </a>
      </div>
    </>
  );
};
