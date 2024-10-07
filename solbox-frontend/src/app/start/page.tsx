import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Start() {
  return (
    <div className='h-screen flex flex-col justify-center mx-2 p-3'>
      <Image 
        src='/Solbox.png'
        alt='solbox logo'
        width={230}
        height={230}
        className='my-3 mx-auto'
      />  
      <p className='text-white text-2xl font-semibold w-[350px] pl-2 lg:w-auto text-center leading-relaxed py-5'>Revolutionizing music streaming on the Solana Blockchain.</p>
      <div className='my-2 flex flex-col lg:flex-row gap-5'>
        <Link href='/login' className='text-primary border border-primary p-3 font-bold text-2xl bg-transparent hover:bg-primary hover:text-white rounded-3xl w-full text-center animate-swoop delay-200'>Login</Link>
        <Link href='/signup' className='text-primary border border-primary p-3 font-bold text-2xl bg-transparent hover:bg-primary hover:text-white rounded-3xl w-full text-center animate-swoop delay-300'>Signup</Link>
      </div>
    </div>
  )
}
