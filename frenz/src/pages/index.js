import Image from "next/image";
import Nav from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import telegram from "../images/telegram.svg";
import twitter from "../images/twitter.png";

export default function Home() {

  return (
    <div>
      <div className="main-page text-white">
        <div className="absolute w-full h-full top-0 left-0 bg-black/40 md:bg-black/60 z-[0]"></div>
        <div className="w-screen h-[100dvh] pt-10 pb-[30px] flex flex-col justify-between">
          <Nav />
          <MobileNav />
          <div className="flex flex-col pt-[45px] md:pt-0 h-full md:h-auto justify-between md:justify-center items-center z-[2]">
            <div className="flex flex-col items-center">
              <Link href="/frenfind" className="mb-6 md:mb-[35px]">
                <button className="font-bodybold md:font-body text-[20px] md:text-[24px] text-black bg-yellow rounded-[12px] px-8 md:px-5 py-[11px] md:py-[14px] hover:brightness-75 transition">
                  Get Rich
                </button>
              </Link>
              <div className="flex gap-5 md:gap-8 items-center mb-[30px]">
                <span className="font-krona text-[20px] md:text-[32px] tracking-[1.2px] md:tracking-[1.92px]">GET RICH WITH</span>
                <span className="font-lilita text-[32px] md:text-[48px] tracking-[1.92px] md:tracking-[2.88px]">FRENZ</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a className="flex gap-2 items-center text-[16px] font-krona tracking-[0.96px]" href="" target="_blank" rel="noreferrer">
                <Image src={twitter} alt="" />
                TWITTER
              </a>
              <a className="flex gap-2 items-center text-[16px] font-krona tracking-[0.96px]" href="" target="_blank" rel="noreferrer">
                <Image src={telegram} alt="" />
                TELEGRAM
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
