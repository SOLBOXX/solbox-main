import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col h-screen mx-2 my-4 justify-center'>
      <h1 className='text-white text-center font-extrabold text-2xl py-10'>LOG INTO SOLBOX</h1>
      <form action="" className='' autoComplete='off'>
        <fieldset className='flex flex-col mb-5'>
          <label htmlFor="email" className='text-white font-bold py-1'>Email</label>
          <input 
          type="email" 
          placeholder="email@domain.com"
          autoComplete='off'
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
        </fieldset>
        <fieldset className='flex flex-col mb-10'>
          <label htmlFor="password" className='text-white font-bold py-1'>Password</label>
          <input 
          type="password" 
          placeholder=""
          className={`w-full bg-[url('/bg.png')] bg-no-repeat bg-cover rounded outline-none px-3 py-5 text-white`}
          />
          <Link href="" className='text-white font-bold leading-6 py-1 self-end'>FORGOT PASSWORD</Link>
        </fieldset>
        <button className='mt-10 p-3 font-bold text-2xl bg-primary text-white rounded-xl w-full text-center'>Log in</button>
        <p className='text-white py-2 font-semibold text-center'>{`Don't have an account?`} <Link href='/signup' className='text-primary pl-3'>Sign Up</Link></p>
      </form>
    </div>
  )
}
