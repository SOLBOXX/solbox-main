'use client'
import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='bottom-1 fixed w-11/12 animate-slideUp'>
      <ul className='flex justify-between px-7 py-3 rounded-[2rem] bg-lapis mb-2'>
        <li>
            <Link href='/home' className='flex flex-col items-center text-white hover:text-indigo'>
                <i className='bx bxs-home bx-sm'></i>
                <p className='text-sm'>Home</p>
            </Link>
        </li>
        <li>
            <Link href='' className='flex flex-col items-center text-white hover:text-indigo'>
                <i className='bx bx-search bg-white rounded-full text-lapis hover:bg-indigo hover:text-white w-[25px] h-[25px] flex items-center justify-center' ></i>
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
            <Link href='/home/dashboard'>
                <div className='flex flex-col items-center text-white hover:text-indigo'>
                <i className='bx bx-cog bx-sm' ></i>
                <p className='text-sm'>Settings</p>
                </div>
            </Link>
        </li>
      </ul>
    </div>
  )
}
