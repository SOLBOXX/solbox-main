import React from 'react'
import SongList from './songList/page'
import Navigation from './navbar/page'

export default function Home() {
  return (
    <div className='h-full px-4'>
      <SongList />
      <Navigation />
    </div>
  )
}
