import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import Contact from "../components/Contact";

export const Navbar = () => {
  // const linkStyle = "text-white text-[1rem] md:text-[1.2rem]";

  return (
    <div className="w-screen h-[8vh] fixed top-0 p-4 md:py-4 md:px-8 flex flex-row justify-between items-center box-border bg-[#242424ba]">
      <Link to="/">
        <img src={logo} alt="VERAfied Technologies Logo" width="160px" />
      </Link>
      <ul className="flex flex-row gap-8 justify-center items-center">
        {/* <li>
          <Link to="#services" className={linkStyle}>
            Services
          </Link>
        </li>
        <li>
          <Link to="#work" className={linkStyle}>
            Our Work
          </Link>
        </li> */}
        <li>
          {/* <Link to="#contact" className={linkStyle}>
            Contact Us
          </Link> */}
          <Contact />
        </li>
      </ul>
    </div>
  );
};
