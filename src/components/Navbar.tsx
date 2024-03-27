import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      {/*LOGO*/}
      <div>
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
