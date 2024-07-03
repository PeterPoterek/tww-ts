import { Link } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion } from "framer-motion";

interface NavbarMobileModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobileModal = ({ isModalOpen, setIsModalOpen }: NavbarMobileModalProps) => {
  const modalVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: "0%",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="fixed z-50 inset-0 bg-background flex justify-center items-center"
      initial="hidden"
      animate={isModalOpen ? "visible" : "hidden"}
      variants={modalVariants}
    >
      <div className="absolute top-0 right-0">
        <RiCloseLargeFill
          className="w-[35px] h-[35px] mt-10 mr-10 cursor-pointer"
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
    </motion.div>
  );
};

export default NavbarMobileModal;
