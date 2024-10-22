import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Start() {
  const [activeLink, setActiveLink] = useState<'login' | 'signup'>('login');

  return (
    <div className='h-screen flex flex-col justify-center items-center mx-2 p-3'>
      <Image 
        src='/Solbox.png'
        alt='solbox logo'
        width={230}
        height={230}
        className='my-3 mx-auto'
      />  
      <p className='text-white text-2xl font-semibold w-[350px] pl-2 lg:w-auto text-center leading-relaxed py-5'>Empowering Artists and
      Rewarding Music Lovers.</p>
      <div className='my-2 flex flex-col lg:flex-row gap-5 w-full'>
      <Link
        href="/login"
        className={`p-3 font-bold text-2xl rounded-3xl w-full text-center animate-swoop delay-200 ${activeLink === 'login' ? 'bg-primary text-white' : 'border border-primary bg-transparent text-primary'}`}
        onClick={() => setActiveLink('login')}
      >
        Login
      </Link>
      <Link
        href="/signup"
        className={`p-3 font-bold text-2xl rounded-3xl w-full text-center animate-swoop delay-300 ${activeLink === 'signup' ? 'bg-primary text-white' : 'border border-primary bg-transparent text-primary'}`}
        onClick={() => setActiveLink('signup')}
      >
        Signup
      </Link>
      </div>
    </div>
  )
}
