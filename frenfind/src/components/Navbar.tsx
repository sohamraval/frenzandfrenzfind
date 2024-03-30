import React from 'react';
import logo from '../../src/assets/images/logo.png';

interface NavbarProps {
  activeTab: string; // Adjust the type according to your requirements
}

const Navbar: React.FC<NavbarProps> = ({ activeTab }) => {
  return (
    <div className="navbar w-full hidden lg:block z-3">
      <div className="max-w-1166px mx-auto w-full flex items-center justify-evenly ">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <a href="https://frenfind-6b3d86bd2f7d.herokuapp.com/" className="text-24px font-krona tracking-0.48px text-white hover:brightness-75 transition">
          FRENFIND
        </a>
        <a href="https://mellifluous-wisp-ecd5cd.netlify.app/vision" className="text-24px font-krona tracking-0.48px text-white hover:brightness-75 transition">
          VISION
        </a>
        <a href="https://mellifluous-wisp-ecd5cd.netlify.app/airdrop" className="text-24px font-krona tracking-0.48px text-white hover:brightness-75 transition">
          AIRDROP
        </a>
        <a href="https://mellifluous-wisp-ecd5cd.netlify.app/airdrop" className="text-24px font-krona tracking-0.48px text-white hover:brightness-75 transition">
          SCORES
        </a>
        <a href="https://mellifluous-wisp-ecd5cd.netlify.app/faq" className="text-24px font-krona tracking-0.48px text-white hover:brightness-75 transition">
          FAQ
        </a>
        <a href="https://mellifluous-wisp-ecd5cd.netlify.app/frenfind" className="text-24px font-krona tracking-0.48px text-white hover:brightness-75 transition">
          WALLET
        </a>
      </div>
    </div>
  );
};

export default Navbar;
