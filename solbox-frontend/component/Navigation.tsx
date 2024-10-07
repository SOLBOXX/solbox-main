'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className=''>
      <ul className='flex py-2 px-5 justify-between items-center rounded-3xl bg-lapis mb-2'>
        <li>
            <Link href='/home' className='flex flex-col items-center text-white hover:text-indigo'>
                <i className='bx bxs-home bx-sm'></i>
                <p className='text-sm'>Home</p>
            </Link>
        </li>
        <li>
            <Link href='/discover' className='flex flex-col items-center text-white hover:text-indigo'>
                <Image
                  src='/discover icon.png'
                  alt='search icon'
                  width={30}
                  height={30}
                  className='hover:bg-indigo'
                 /> 
                <p className='text-sm'>Discover</p>
            </Link>
        </li>
        <li>
            <Link href='' className='flex flex-col items-center text-white hover:text-indigo'>
                <i className='bx bxs-collection bx-sm' ></i>
                <p className='text-sm'>Playlist</p>
            </Link>
        </li>
        <li>
            <Link href='/dashboard' className='flex flex-col items-center text-white hover:text-indigo'>
                <i className='bx bx-cog bx-sm' ></i>
                <p className='text-sm'>Settings</p>
            </Link>
        </li>
      </ul>
    </div>
  )
}
