import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const CategoryPage = () => {
  return (
    <div className='flex text-red-500'> 
    {pizzas.map((item)=>(
      <Link className='' href={`/product/${item.id}`}>
        {/* IMAGE CONTAINER */}
        {item.img && (
          <div>
            <Image src={item.img} alt="" fill/>
          </div>
        )}
        {/* TEXT CONTAINER */}
      </Link>
    ))}
    </div>
  )
}

export default CategoryPage
