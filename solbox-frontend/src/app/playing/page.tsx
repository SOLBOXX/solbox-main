'use client'
import Image from 'next/image'
import React, { useState } from 'react';


export default function Playing() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className='py-6 px-5 flex flex-col'>
      <div className="flex justify-between mt-4 mb-8">
        <i className='bx bx-chevrons-down bx-lg text-primary'></i>
        <p className='text-white bg-primary rounded-2xl w-[180px] h-[30px] self-center extra-bold text-xl text-center'>Album Name</p>
        <i className='bx bx-dots-vertical-rounded bx-lg text-primary'></i>
      </div>
      <Image 
        src='/artist.png'
        alt='Image of artist'
        width={400}
        height={400}
        priority
        className='rounded-xl py-7 w-full'
      />  
      <div className='items-end my-4'>
        <div className="flex justify-between">
          <div className='text-white text-start'>
            <p className='font-bold text-base'>Song Title</p>
            <p className='font-semibold text-sm'>Artist name Ft. Artist</p>
          </div>
          <div className="flex gap-2">
          <i className='bx bx-lg bx-arrow-to-bottom text-white hover:text-primary'></i>
          <i
            className={`bx bx-lg ${liked ? 'bxs-heart text-primary' : 'bx-heart text-white'}`}
            onClick={toggleLike}
            style={{ transition: 'color 0.3s ease, transform 0.3s ease'
            }} 
          ></i>
          </div>
        </div>

      </div>
    </div>
  )
}
