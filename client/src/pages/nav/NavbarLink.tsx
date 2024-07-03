import { Link } from "react-router-dom";

interface NavbarLinkProps {
  path: string;
  text: string;
}

const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <li className="relative overflow-hidden border-b-2 border-transparent transition duration-300 after:absolute after:bottom-0 after:right-full after:h-[2.5px] after:w-full after:bg-zinc-900 after:duration-300 hover:after:translate-x-full text-lg">
      <Link to={props.path}>{props.text}</Link>
    </li>
  );
};

export default NavbarLink;
