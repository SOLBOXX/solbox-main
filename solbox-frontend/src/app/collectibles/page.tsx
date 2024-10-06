'use client'
//import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className=''>
        {/* Hero Section */}
      <div className="bg-lapis rounded-xl p-5 my-4 flex flex-col items-center justify-center">
        <i className='bx bxs-user-circle text-white bx-lg'></i>
        <h2 className='text-white font-bold text-[40px] py-3'>Collectibles</h2>
      </div>

      <div className='grid grid-cols-4 gap-3 my-6'>
        <Link href='' className='bg-lapis text-white font-bold text-sm px-3 rounded-lg flex flex-col justify-center items-center'>
            <i className='bx bx-arrow-to-bottom bx-md'></i>
            <p className='py-1'>Deposit</p>
        </Link>
        <Link href='' className='bg-lapis text-white font-bold text-sm px-3 rounded-lg flex flex-col justify-center items-center'>
            <i className='bx bx-arrow-to-top bx-md'></i>
            <p className='py-1'>Withdraw</p>
        </Link>
        <Link href='' className='bg-lapis text-white font-bold text-base px-3 rounded-lg flex justify-center items-center'>
            Stake
        </Link>
        <div className="flex flex-col gap-2 h-full">
            <Link href='' className='bg-lapis text-white font-bold text-sm p-1 rounded-lg text-center'>
            Tokens
            </Link>
            <Link href='/dashboard' className='bg-lapis text-white font-bold text-sm p-1 rounded-lg text-center'>
            Dashboard
            </Link>
        </div>
      </div>

      
    </div>
  )
}
