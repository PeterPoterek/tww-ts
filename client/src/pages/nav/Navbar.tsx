import phoneIcon from "../../assets/phone-icon.svg";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";
import NavbarLink from "./NavbarLink";
import NavbarLogoLink from "./NavbarLogoLink";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarMobileModal from "./NavbarMobileModal";

const Navbar = () => {
  return (
    <div className="fixed w-full z-[49] bg-background rounded shadow-xl">
      <ScrollToHashElement behavior="smooth" inline="center" block="start" />
      <div className="xl:max-w-7xl mx-auto flex justify-between items-center p-3">
        <NavbarLogoLink />

        <menu className="hidden xl:flex gap-5 ">
          <NavbarLink path={"/#about"} text={"O nas"} />
          <NavbarLink path={"/#reviews"} text={"Opinie"} />
          <NavbarLink path={"/#contact"} text={"Kontakt"} />
          <NavbarLink path={"/gallery"} text={"Galeria"} />
          <NavbarLink path={"/certificates"} text={"Certyfikaty"} />
        </menu>

        <div className="hidden xl:flex gap-3 justify-center items-center">
          <img src={phoneIcon} alt="Phone Icon" width="30" height="30" />
          <span className="text-xl font-bold">696-075-595</span>
        </div>

        <div className="xl:hidden">
          <GiHamburgerMenu className="w-[40px] h-[40px] " />

          <NavbarMobileModal />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
