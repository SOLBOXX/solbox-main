import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex flex-col h-screen'>
      <h1 className='font-extrabold text-xl py-6 text-white text-center'>PERSONAL DETAILS</h1>
      <Image
        src='/usericon.png'
        alt='user image'
        width={100}
        height={100}
        className='mx-auto my-3'
      />
        <form action="" className='flex flex-col justify-center' autoComplete='off'>
        <fieldset className='mb-5'>
          <label htmlFor="fname" className='text-white font-bold py-1'>First Name</label>
          <input 
          type="text" 
          id='fname'
          placeholder="Enter your first name"
          autoComplete='off'
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        <fieldset className='mb-5'>
          <label htmlFor="lname" className='text-white font-bold py-1'>Last Name</label>
          <input 
          type="text" 
          id='lname'
          placeholder="Enter your last name"
          autoComplete='off'
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        <fieldset className='mb-5'>
          <label htmlFor="dob" className='text-white font-bold py-1'>Date of Birth</label>
          <input 
          type="date" 
          id='dob'
          placeholder="create a password"
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        
        <Link href="/wallet" className='mt-10 p-3 font-bold text-2xl bg-primary text-white rounded-xl w-full text-center'>Continue</Link>
      </form>
    </div>
  )
}
