import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";

const NavbarMobileModal = () => {
  return (
    <div className="fixed z-50 inset-0 bg-background flex justify-center items-center">
      <div className="absolute top-0 right-0 ">
        <RiCloseLargeFill className="w-[50px] h-[50px] pt-5 pr-5" />
      </div>

      <div className="p-5">
        <ul className="flex flex-col gap-[3rem] justify-center items-center">
          <li>
            <Link to={"/#about"} className="text-xl font-bold">
              O nas
            </Link>
          </li>
          <li>
            <Link to={"/#reviews"} className="text-xl font-bold">
              Opinie
            </Link>
          </li>
          <li>
            <Link to={"/#contact"} className="text-xl font-bold">
              Kontakt
            </Link>
          </li>
          <li>
            <Link to={"/gallery"} className="text-xl font-bold">
              Galeria
            </Link>
          </li>
          <li>
            <Link to={"/certificates"} className="text-xl font-bold">
              Certyfikaty
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobileModal;
