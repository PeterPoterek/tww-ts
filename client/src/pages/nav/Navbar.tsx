import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <div>
        <Link to="/">Main</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/certificates">Certificates</Link>
      </div>
    </div>
  );
};

export default Navbar;
