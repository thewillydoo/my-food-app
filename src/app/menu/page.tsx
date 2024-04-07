import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {menu.map((category) => (
        <Link href={category.slug}>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage
