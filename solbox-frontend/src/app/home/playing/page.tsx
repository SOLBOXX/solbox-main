import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='p-3'>
      <div className="flex justify-between">
        <i className='bx bx-chevrons-down bx-sm text-primary'></i>
        <p className='text-white bg-primary rounded-2xl p-3 extra-bold text-xl'>Album Name</p>
        <i className='bx bx-dots-vertical-rounded bx-sm text-primary'></i>
      </div>
      <Image 
        src='/artist.png'
        alt='Image of artist'
        width={400}
        height={400}
        priority
        className='rounded-xl my-3'
      />  
    </div>
  )
}
