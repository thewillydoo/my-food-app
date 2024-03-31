"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //TEMPORARY
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      <div className="bg-red-500 text-white absolute top-24 left-0 w-full h-[calc(100vh-6rem)] z-10 flex flex-col gap-8 items-center justify-center text-3xl">
        {links.map((item) => (
          <Link href={item.url}>{item.title}</Link>
        ))}

        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <Link href="/cart"><CartIcon/></Link>
      </div>
    </div>
  );
};

export default Menu;
