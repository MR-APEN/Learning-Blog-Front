import React from 'react'
import { Navbar } from '../components/Navbar.jsx'
import { PublicationsList } from '../components/PublicationsList.jsx'

export const Home = () => {
  return (
    <main className='min-h-screen flex flex-col'>
      <Navbar/>
      <PublicationsList/>
    </main>
  )
}
