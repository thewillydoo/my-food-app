import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      {/*LOGO*/}
      <div className='h-12 text-red-500 p-4 flex items-center justify-between'>
        <Link href="/">
        Willy's Pizza Creations
        </Link>
      </div>
      {/*MOBILE MENU*/}
      <div>
        <Menu/>
      </div>
    </div>
  )
}

export default Navbar
