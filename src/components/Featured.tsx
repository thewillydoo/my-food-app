import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500 '>
      {/* WRAPPER */}
      <div className=''>
        {/* SINGLE ITEM */}
        <div className=''>
          {/* IMAGE CONTAINER */}
          <div className='relative'>
            <Image src='' alt=''/>
          </div>
          {/* TEXT CONTAINER  */}
          <div className=''>
            <h1>title</h1>
            <p>description</p>
            <span>Price</span>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
