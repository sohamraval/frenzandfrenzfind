import React, { useState } from 'react';
import Link
    from 'next/link';
import logo from "../images/logo.png";
import Image from 'next/image';
import menu from "../images/menu.svg";
import close from "../images/close.svg";
import navclouds from "../images/clouds/navclouds.svg";

const MobileNav = ({ activeTab }) => {
    const [open, setOpen] = useState(false);
    const menuClass = `menu-container ${open ? 'open' : ''}`;
    return (
        <div className="block lg:hidden">
            <div className="relative flex w-full items-center justify-start pl-4">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="PacMoon"
                    />
                </Link>
                <button onClick={() => setOpen(true)} className="absolute flex h-full top-0 right-0 items-center">
                    <div className='bg-yellow p-3 rounded-full mr-5'>
                        <Image src={menu} alt="" />
                    </div>
                </button>
            </div>
            <div className={menuClass}>
                <div className="relative h-full">
                    <Image src={navclouds} className='absolute bottom-[180px] right-0' alt="" />
                    <button onClick={() => setOpen(false)} className="absolute top-5 right-5">
                        <Image src={close} alt="" />
                    </button>
                    <div className="pt-[92px] flex flex-col pl-[25px] gap-8">
                        <Link className='text-[16px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/frenfind">
                            FRENFIND
                        </Link>
                        <Link className='text-[16px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/vision">
                            VISION
                        </Link>
                        <Link className='text-[16px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/airdrop">
                            AIRDROP
                        </Link>
                        <Link className='text-[16px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/airdrop">
                            SCORES
                        </Link>
                        <Link className='text-[16px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/faq">
                            FAQ
                        </Link>
                        <Link className='text-[16px] font-krona tracking-[0.48px] text-white hover:brightness-75 transition' href="/frenfind">
                            WALLET
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;