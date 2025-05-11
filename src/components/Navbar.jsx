import React from 'react'
import cat from "../assets/cat-smart.png"

export const Navbar = () => {
  return (
    <nav className='bg-gray-500 text-white py-2 px-5'>
      <div className='flex justify-between items-center min-w-full'>
        <span className='mr-auto text-2xl'>
          <h1>Blog de aprendizaje Javier Apen</h1>
        </span>
        <img src={cat} alt="Cat Smart" className='w-20 h-auto justify-center'/>
      </div>
    </nav>
  )
}
