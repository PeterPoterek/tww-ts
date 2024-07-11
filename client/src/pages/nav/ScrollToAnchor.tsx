import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function ScrollToAnchor(): null {
  const location = useLocation();
  const lastHash = useRef("");
  const navbarHeight = 110;

  useEffect(() => {
    if (location.hash.length > 0) {
      lastHash.current = location.hash.slice(1);
    } else if (location.pathname === "/") {
      lastHash.current = "";
    }

    if (lastHash.current.length > 0) {
      const element = document.getElementById(lastHash.current);

      if (element) {
        setTimeout(() => {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    } else if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
