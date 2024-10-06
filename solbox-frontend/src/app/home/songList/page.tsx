'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Skeleton from '../../../../component/utils/Skeleton';
import Link from 'next/link';


export default function SongList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='mt-8 flex flex-col justify-center'>
      <div className='my-2'>
        <h2 className='text-white font-bold text-2xl py-4'>Recently Played</h2>
        <div className="flex gap-3">
          {loading ? (
              <>
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              <>
              <Link href='/home/songList/playing'>
                <Image 
                    src='/artist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                /></Link>
                <Image 
                    src='/guitarist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                />
              </>
          )}
        </div>
      </div>  
      <div className='my-2'>
        <h2 className='text-white font-bold text-2xl py-4'>Trending</h2>
        <div className="flex gap-3">{loading ? (
              <>
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              <>
                <Image 
                    src='/artist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                />
                <Image 
                    src='/guitarist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                />
              </>
          )}
        </div>
      </div>
      <div className='my-2'>
        <h2 className='text-white font-bold text-2xl py-4'>Try something else</h2>
        <div className="flex gap-3">{loading ? (
              <>
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              <>
                <Image 
                    src='/artist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                />
                <Image 
                    src='/guitarist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                />
              </>
          )}
        </div>
      </div>
      <div className='my-2'>
        <h2 className='text-white font-bold text-2xl py-4'>Artists you like</h2>
        <div className="flex gap-3">{loading ? (
              <>
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              <>
                <Image 
                    src='/artist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                />
                <Image 
                    src='/guitarist.png'
                    alt="image of an artist"
                    width={300}
                    height={400}
                    className='rounded-2xl'
                    priority
                />
              </>
          )}
        </div>
      </div>
    </div>
  )
}
