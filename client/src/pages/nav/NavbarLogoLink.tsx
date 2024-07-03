import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const NavbarLogoLink = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to="/" className="text-foreground transition transform hover:scale-101" onClick={scrollToTop}>
      <img src={logo} alt="Logo" width="63" height="50" />
    </Link>
  );
};

export default NavbarLogoLink;
