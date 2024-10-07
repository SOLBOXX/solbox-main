'use client'
import React from 'react';
import Image from 'next/image';

export default function page() {
  const address = '2xhn000000000000000000000000000000000000000';

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
      .then(() => alert('Address copied to clipboard!'))
      .catch((err) => console.error('Failed to copy: ', err));
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Address',
          text: `Here is my address: ${address}`,
          url: window.location.href, 
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      alert('Share not supported on your device/browser.');
    }
  };

  return (
    <div className='flex flex-col justify-center h-screen items-center'>
      <Image 
        src='/qrcode.png'
        alt='qr code'
        width={180}
        height={180}
        className='py-4'
      />

      <p className='pb-3 text-indigo text-xs font-medium'>Your address</p>

      <div className='flex flex-col items-center'>
        <p className='text-white py-2 font-semibold text-sm'>{address}</p>
        <button 
          onClick={handleCopy} 
          className='text-white font-semibold text-sm'
        >
          Copy
        </button>
      </div>

      <button 
        onClick={handleShare}
        className='text-white bg-primary w-full mt-4 rounded-2xl font-bold text-2xl py-2'
      >
        Share
      </button>
    </div>
  );
}
