import React from 'react'
import SongList from './songList/page'
import Navigation from './navbar/page'

export default function Home() {
  return (
    <div>
      <SongList />
      <Navigation />
    </div>
  )
}
