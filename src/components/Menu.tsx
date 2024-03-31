"use client"

import  React, { useState } from 'react'
import Image from "next/image";

const links = [
  {id: 1, title: "Homepage", url: "/"},
  {id: 2, title: "Menu", url: "/menu"},
  {id: 3, title: "Working Hours", url: "/"},
  {id: 4, title: "Contact", url: "/"},
]

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
       {!open ?
      <Image
        src="/open.png"
        alt=""
        width={20}
        height={20}
        onClick={()=>setOpen(true)}/>
        :
      <Image
        src="/close.png"
        alt=""
        width={20}
        height={20}
        onClick={()=>setOpen(false)}/>
       }
    </div>
  )
}

export default Menu
