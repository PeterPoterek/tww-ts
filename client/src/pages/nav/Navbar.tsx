import { useState } from "react";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

import NavbarLink from "./NavbarLink";
import NavbarMobileModal from "./NavbarMobileModal";

import phoneIcon from "../../assets/phone-icon.svg";
import NavbarLogoLink from "./NavbarLogoLink";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed w-full z-[49] bg-background rounded shadow-xl">
      <ScrollToHashElement behavior="smooth" inline="center" block="start" />
      <div className="md  :max-w-7xl mx-auto flex justify-between items-center p-3">
        <NavbarLogoLink />

        <menu className="hidden md:flex gap-5 ">
          <NavbarLink path={"/#about"} text={"O nas"} />
          <NavbarLink path={"/#reviews"} text={"Opinie"} />
          <NavbarLink path={"/#contact"} text={"Kontakt"} />
          <NavbarLink path={"/gallery"} text={"Galeria"} />
          <NavbarLink path={"/certificates"} text={"Certyfikaty"} />
        </menu>

        <div className="hidden md:flex gap-3 justify-center items-center">
          <img src={phoneIcon} alt="Phone Icon" width="30" height="30" />
          <span className="text-xl font-bold">696-075-595</span>
        </div>

        <div className="md:hidden">
          <GiHamburgerMenu
            className="w-[40px] h-[40px]"
            onClick={() => {
              setIsModalOpen(true);
            }}
          />

          <NavbarMobileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
