import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";

interface NavbarMobileModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobileModal = ({ isModalOpen, setIsModalOpen }: NavbarMobileModalProps) => {
  return (
    isModalOpen && (
      <>
        <div className="fixed z-50 inset-0 bg-background flex justify-center items-center">
          <div className="absolute top-0 right-0 ">
            <RiCloseLargeFill
              className="w-[35px] h-[35px] mt-10 mr-10"
              onClick={() => {
                setIsModalOpen(false);
              }}
            />
          </div>

          <div
            className="p-5"
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
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
      </>
    )
  );
};

export default NavbarMobileModal;
