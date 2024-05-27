import { Link } from "react-router-dom";
import logo from "../assets/VT_logo_new.png";
// import Contact from "../components/Contact";

export const Navbar = () => {
  const linkStyle = "text-white text-[1rem] md:text-[1.2rem]";

  return (
    <div className="w-screen h-[10vh] fixed top-0 p-4 md:py-8 md:px-8 flex flex-row justify-between items-center box-border z-50 antialiased">
      <Link to="#landing">
        <img src={logo} alt="VERAfied Technologies Logo" width="160px" />
      </Link>
      <ul className="flex flex-row gap-8 justify-center items-center">
        <li>
          <Link to="#services" className={linkStyle}>
            Services
          </Link>
        </li>
        <li>
          <Link to="#work" className={linkStyle}>
            Our Work
          </Link>
        </li>
        <li>
          <Link
            to="#contact"
            className={`${linkStyle} py-2 px-4 rounded-full hover:text-white bg-[--accent-purple-color] hover:bg-[--accent-green-color]`}>
            Contact Us
          </Link>
          {/* <Contact linkStyle={linkStyle} /> */}
        </li>
      </ul>
    </div>
  );
};
