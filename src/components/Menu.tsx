"use client"

import React from 'react'
import Image from "next/image";

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Image
        src="/open.png"
        alt=""
        width={20}
        height={20}/>
    </div>
  )
}

export default Menu
