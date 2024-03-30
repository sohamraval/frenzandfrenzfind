import React from 'react';
import cloud1 from "../images/clouds/cloud1.svg";
import cloud2 from "../images/clouds/cloud2.svg";
import cloud3 from "../images/clouds/cloud3.svg";
import cloud4 from "../images/clouds/cloud4.svg";
import cloud5 from "../images/clouds/cloud5.svg";
import Image from 'next/image';

const Clouds = () => {
    return (
        <div className='fixed w-screen h-screen top-0 left-0 z-[0]'>
            <Image src={cloud1} alt="" className='hidden md:flex absolute top-[184px] left-0 adjust' />
            <Image src={cloud2} alt="" className='hidden md:flex absolute top-[184px] right-[152px] adjust' />
            <Image src={cloud3} alt="" className='hidden md:flex absolute bottom-[223px] left-[76px] adjust' />
            <Image src={cloud4} alt="" className='hidden md:flex absolute bottom-[337px] right-[136px] adjust' />
            <Image src={cloud5} alt="" className='hidden md:flex absolute bottom-[0px] right-[120px] adjust' />
            <Image src={cloud2} alt="" className='md:hidden absolute top-[30%] left-[-60px]' />
            <Image src={cloud2} alt="" className='md:hidden absolute top-[50%] right-[-30px]' />
            <Image src={cloud2} alt="" className='md:hidden absolute top-[70%] left-[-40px]' />
        </div>
    );
};

export default Clouds;