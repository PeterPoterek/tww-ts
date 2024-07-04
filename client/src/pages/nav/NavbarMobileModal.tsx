import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiCloseLargeFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface NavbarMobileModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMobileModal = ({ isModalOpen, setIsModalOpen }: NavbarMobileModalProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

  useEffect(() => {
    setIsModalOpen(false);
  }, [location, setIsModalOpen]);

  const handleLinkClick = (path: string) => {
    setIsModalOpen(false);
    setRedirectPath(path);
  };

  const handleExitComplete = () => {
    if (redirectPath) {
      navigate(redirectPath);
      setRedirectPath(null);
    }
  };

  const handleSwipeGesture = (event: TouchEvent) => {
    const touch = event.touches[0];
    const startX = touch.clientX;
    const threshold = window.innerWidth * 0.2;

    document.addEventListener("touchend", onTouchEnd);

    function onTouchMove(event: TouchEvent) {
      const touch = event.touches[0];
      const currentX = touch.clientX;
      const deltaX = currentX - startX;

      if (deltaX > threshold) {
        setIsModalOpen(true);
      }
    }

    function onTouchEnd() {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    }

    document.addEventListener("touchmove", onTouchMove);
  };

  const modalVariants = {
    hidden: {
      x: "100%",
    },
    visible: {
      x: "0%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.25,
      },
    },
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isModalOpen && (
        <motion.div
          className="fixed z-50 inset-0 bg-background flex justify-center items-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
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
                <Link
                  to={"/#about"}
                  className="text-xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("/#about");
                  }}
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  to={"/#reviews"}
                  className="text-xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("/#reviews");
                  }}
                >
                  Opinie
                </Link>
              </li>
              <li>
                <Link
                  to={"/#contact"}
                  className="text-xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("/#contact");
                  }}
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to={"/gallery"}
                  className="text-xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("/gallery");
                  }}
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to={"/certificates"}
                  className="text-xl font-bold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick("/certificates");
                  }}
                >
                  Certyfikaty
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobileModal;
