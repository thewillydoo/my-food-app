import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className=''>
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
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
