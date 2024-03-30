import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "../images/logo.png";
const Navbar = ({ activeTab }) => {
   return (
      <div className="navbar w-full hidden lg:block z-[3]">
         <div className="max-w-[1166px] mx-auto w-full flex items-center justify-between">
            <Link href="/">
               <Image src={logo} alt="" />
            </Link>
            <Link className='text-[24px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="https://frenfind-6b3d86bd2f7d.herokuapp.com/">
               FRENFIND
            </Link>
            <Link className='text-[24px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/vision">
               VISION
            </Link>
            <Link className='text-[24px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/airdrop">
               AIRDROP
            </Link>
            <Link className='text-[24px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/airdrop">
               SCORES
            </Link>
            <Link className='text-[24px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/faq">
               FAQ
            </Link>
            <Link className='text-[24px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/frenfind">
               WALLET
            </Link>
         </div>
      </div>
   );
};

export default Navbar;