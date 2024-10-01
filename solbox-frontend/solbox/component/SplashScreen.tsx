import Image from 'next/image';
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image 
        src="/logo-no-bg.svg"
        alt="Solbox Logo" 
        className="animate-bounce" 
        width={200} 
        height={100} 
        priority
      />
    </div>
  );
};

export default SplashScreen;
