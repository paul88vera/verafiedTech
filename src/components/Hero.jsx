import { Link } from "react-router-dom";
import owner from "../assets/VT_owner.png";

const Hero = () => {
  const container =
    "flex flex-col gap-8 justify-center items-center h-screen px-4 bg-hero-pattern";
  return (
    <section id="landing" className={`${container}`}>
      <h1 className="text-center">
        Our website is in development until May 1st!
      </h1>
      <h2 className="text-center text-[1.2rem] md:text-[1.5rem]">
        Come back for your Tech solutions and IT support in San Antonio, Texas!
      </h2>
      <div className="bg-white p-2 rounded-xl hover:bg-slate-300">
        <Link
          to="https://www.paulvera.com"
          target="_blank"
          className="flex flex-row justify-center items-center gap-2">
          <img
            src={owner}
            alt="VERAfied Technologies Owner/CEO"
            width="150px"
          />
          <div className="flex flex-col justify-center items-center px-4 ">
            <div className="text-center text-[1.2rem] md:text-[1.5rem]">
              You can contact me directly
              <br />
              on my personal site.
              <br />
              www.paulvera.com
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
