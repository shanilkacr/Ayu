import React from 'react';
import { Header } from '@/components/Header';
import { ImageSection } from '@/components/ImageSection';
import { ComingSoonOverlay } from '@/components/ComingSoonOverlay';

const Index: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center h-screen bg-white">
      <Header />
      <main className="flex flex-1 justify-between items-start w-full relative max-md:h-auto max-md:flex-col max-sm:h-auto">
        <ImageSection
          leftImageSrc="https://api.builder.io/api/v1/image/assets/TEMP/15bedf722afd75669ab182bc9c85e339db68f309?width=1440"
          rightImageSrc="https://api.builder.io/api/v1/image/assets/TEMP/d53fbb489b259a93ac3af2813cfcb334defee2db?width=1440"
          leftImageAlt="AYU brand aesthetic - left panel"
          rightImageAlt="AYU brand aesthetic - right panel"
        />
        <ComingSoonOverlay />
      </main>
    </div>
  );
};

export default Index;
