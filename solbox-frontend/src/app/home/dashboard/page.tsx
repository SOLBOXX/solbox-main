'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='p-5 w-screen'>
        {/* Hero Section */}
      <div className="bg-lapis rounded-xl p-5 mb-3">
        <div className="flex items-center">
            <div className='w-[50px] h-[50px]'>
                <i className='bx bxs-user-circle text-white bx-lg'></i>
            </div>
            <div className='p-2'>
                <p className='font-medium text-sm'>Welcome back</p>
                <h2 className='text-white font-bold text-2xl'>Username</h2>
            </div>
        </div>
        <h2 className='text-white font-bold text-[40px] py-3'>$405.68</h2>
      </div>

      <div className='grid grid-cols-4 gap-3 my-5'>
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
            <Link href='' className='bg-lapis text-white font-bold text-sm p-1 rounded-lg text-center'>
            Dashboard
            </Link>
        </div>
      </div>

      {/* Metrics */}
      <div className="flex gap-3 my-5">
        <div className=''>
            <div className='bg-lapis rounded-xl mb-3 p-3'>
                <div className="flex items-center text-white font-bold text-sm gap-2 py-2">
                    <p>Daily
                    Stream Time</p>
                    <i className='bx bxs-stopwatch bx-sm'></i>
                </div>
                <div className="flex flex-col justify-center gap-2 text-white">
                    <h3 className='font-semibold text-2xl'>0 hours</h3>
                    <h4 className='font-medium text-base'>0 mins</h4>
                </div>
            </div>
            <div className='bg-lapis rounded-xl p-3'>
                <div className="flex items-center text-white font-bold text-sm gap-2 py-2">
                    <p>Weekly 
                    Stream Time</p>
                    <i className='bx bxs-stopwatch bx-sm'></i>
                </div>
                <div className="flex flex-col justify-center gap-2 text-white">
                    <h3 className='font-semibold text-2xl'>0 hours</h3>
                    <h4 className='font-medium text-base'>0 mins</h4>
                </div>
            </div>
        </div>
        <div className='bg-lapis rounded-xl flex flex-col justify-between w-[230px]'>
            <div className="flex text-white justify-between items-center mt-4 mx-3">
                <h3 className='font-bold text-xl'>Total 
                Stream Time</h3>
                <i className='bx bxs-stopwatch bx-lg'></i>
            </div>
            <Image 
            src='/Group.png'
            alt='Graph of stream time'
            width={240}
            height={130}
            className='px-0 w-full'
            />
        </div>
      </div>

      {/* Transactions */}
      <div className='bg-lapis rounded-lg h-[300px] w-full mt-5 p-4'>
        <div className='text-white flex justify-between py-5 px-3'>
            <h4>Transactions</h4>
            <h4>Status</h4>
        </div>
        <div className='bg-indigo p-3 rounded-lg flex justify-between items-center my-2'>
            <div className='flex gap-2 items-center text-white'>
                <Image
                src='/USDC.png'
                alt='usdc icon'
                width={30}
                height={30}
                />
                <p>0 USDT</p>
            </div>
            <p className='text-white'>--</p>
        </div>
        <div className='bg-indigo p-3 rounded-lg flex justify-between my-2 items-center'>
            <div className='flex gap-2 items-center text-white'>
                <Image
                src='/SOL.png'
                alt='sol icon'
                width={30}
                height={30}
                />
                <p>0 SOL</p>
            </div>
            <p className='text-white'>--</p>
        </div>
      </div>
    </div>
  )
}
