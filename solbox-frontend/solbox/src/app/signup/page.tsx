import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='flex flex-col h-screen mx-2 my-4 justify-center'>
      <h1 className='text-white text-center font-extrabold text-2xl py-10'>CREATE AN ACCOUNT</h1>
      <form action="" className='flex flex-col justify-center' autoComplete='off'>
        <fieldset className='mb-5'>
          <label htmlFor="email" className='text-white font-bold py-1'>Email</label>
          <input 
          type="email" 
          placeholder="email@domain.com"
          autoComplete='off'
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        <fieldset className='mb-5'>
          <label htmlFor="email" className='text-white font-bold py-1'>Username</label>
          <input 
          type="text" 
          placeholder="Enter display username"
          autoComplete='off'
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        <fieldset className='mb-5'>
          <label htmlFor="password" className='text-white font-bold py-1'>Password</label>
          <input 
          type="password" 
          placeholder="create a password"
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        <fieldset className=''>
          <label htmlFor="password" className='text-white font-bold py-1'>Confirm Password</label>
          <input 
          type="password" 
          placeholder="confirm password"
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        <p className='text-white font-bold leading-6 py-5 text-center'>By signing up on <Link href='/' className='text-primary'>SOLBOX</Link>, you agree to our 
        <Link href='' className='text-primary'>Terms of Service</Link> and <Link href='' className='text-primary'>Privacy Policy</Link>.</p>

        <Link href="/wallet" className='mt-10 p-3 font-bold text-2xl bg-primary text-white rounded-xl w-full text-center'>Sign up</Link>
        <p className='text-white py-2 font-semibold text-center'>Have a user account? <Link href='/login' className='text-primary pl-3'>Log in</Link></p>
      </form>
    </div>

  )
}
