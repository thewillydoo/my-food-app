import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between uppercase md:h-24 lg:p-20 xl:p-40'>
      <Link href='/' className='font-bold text-xl'>VIVA GUSTO GRILLE</Link>
      <p>© 2024 All rights reserved.</p>
    </div>
  )
}

export default Footer
