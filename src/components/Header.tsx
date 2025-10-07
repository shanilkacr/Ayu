import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex h-[10vh] justify-center items-center w-full bg-white p-10 max-md:p-[30px] max-sm:p-5">
      <h1 className="text-black text-4xl font-normal max-md:text-[32px] max-sm:text-[28px]">
        AYU
      </h1>
    </header>
  );
};
