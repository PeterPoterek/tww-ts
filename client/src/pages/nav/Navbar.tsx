import logo from "../../assets/logo.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Link } from "react-router-dom";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

const Navbar = () => {
  return (
    <div className="fixed w-full z-50 bg-background rounded shadow-xl">
      <ScrollToHashElement behavior="smooth" inline="center" block="start" />
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-foreground">
          <img src={logo} alt="Logo" width="63" height="50" />
        </Link>

        <menu className="flex gap-5 uppercase">
          <li className="relative overflow-hidden border-b-2 border-transparent transition duration-300 after:absolute after:bottom-0 after:right-full after:h-[2.5px] after:w-full after:bg-zinc-900 after:duration-300 hover:after:translate-x-full">
            <Link to="/#about">O nas</Link>
          </li>
          <li className="relative overflow-hidden border-b-2 border-transparent transition duration-300 after:absolute after:bottom-0 after:right-full after:h-[2.5px] after:w-full after:bg-zinc-900 after:duration-300 hover:after:translate-x-full">
            <Link to="/#reviews">Opinie</Link>
          </li>
          <li className="relative overflow-hidden border-b-2 border-transparent transition duration-300 after:absolute after:bottom-0 after:right-full after:h-[2.5px] after:w-full after:bg-zinc-900 after:duration-300 hover:after:translate-x-full">
            <Link to="/#contact">Kontakt</Link>
          </li>
          <li className="relative overflow-hidden border-b-2 border-transparent transition duration-300 after:absolute after:bottom-0 after:right-full after:h-[2.5px] after:w-full after:bg-zinc-900 after:duration-300 hover:after:translate-x-full">
            <Link to="/gallery">Galeria</Link>
          </li>
          <li className="relative overflow-hidden border-b-2 border-transparent transition duration-300 after:absolute after:bottom-0 after:right-full after:h-[2.5px] after:w-full after:bg-zinc-900 after:duration-300 hover:after:translate-x-full">
            <Link to="/certificates">Certyfikaty</Link>
          </li>
        </menu>

        <div className="flex gap-5 justify-center items-center">
          <img src={phoneIcon} alt="Phone Icon" />
          <span className="text-xl font-bold">696-075-595</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
