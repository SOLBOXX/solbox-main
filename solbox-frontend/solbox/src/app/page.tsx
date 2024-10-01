'use client';
import SplashScreen from "../../component/SplashScreen";
import React, { useState, useEffect } from 'react';
import Start from "./start/page";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
    }, 2500); 

    const hideSplashScreenTimer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(hideSplashScreenTimer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className={`transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <SplashScreen />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Start />
        </div>
      )}
    </>
  );
}
