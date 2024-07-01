import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div>
      Navbar
      <div>
        <Link to="/">Main</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/certificates">Certificates</Link>
        <Button variant={"outline"}>Click me</Button>
      </div>
    </div>
  );
};

export default Navbar;
