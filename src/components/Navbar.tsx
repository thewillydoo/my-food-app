import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24">
      {/*LEFT LINKS*/}
      <div className="hidden md:flex gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/*LOGO*/}
      <div className="text-xl">
        <Link href="/">Viva Gusto Grille</Link>
      </div>
      {/*MOBILE MENU*/}
      <div className="md:hidden">
        <Menu />            
      </div>
      {/*RIGHT LINKS*/}
      <div className="hidden md:flex gap-4 items-center">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}/>
          <span>123 456 7890</span> 
        </div>
        {!user ? (
          <Link href="/">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon/>
      </div>
    </div>
  );
};

export default Navbar;
