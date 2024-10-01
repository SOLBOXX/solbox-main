import Link from 'next/link'
import React from 'react'

export default function Start() {
  return (
    <div className='h-screen flex flex-col justify-end pb-10 mx-2 p-3'>
      <p className='text-white text-2xl font-semibold w-[350px] lg:w-auto text-start leading-relaxed py-5'>Revolutionizing music streaming on the Solana Blockchain.</p>
      <div className='my-2 flex flex-col lg:flex-row gap-5'>
        <Link href='/login' className='text-primary border border-primary p-3 font-bold text-2xl bg-transparent hover:bg-primary hover:text-white rounded-3xl w-full text-center animate-swoop delay-200'>Login</Link>
        <Link href='/signup' className='text-primary border border-primary p-3 font-bold text-2xl bg-transparent hover:bg-primary hover:text-white rounded-3xl w-full text-center animate-swoop delay-300'>Signup</Link>
      </div>
    </div>
  )
}
