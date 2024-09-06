import { IoIosArrowDown } from "react-icons/io";
import { ServiceCarousel } from "./ServiceCarousel";

// eslint-disable-next-line react/prop-types
const Hero = ({ containerStyle }) => {
  return (
    <section
      id="landing"
      className={`${containerStyle} justify-center items-center bg-hero-pattern bg-bottom bg-no-repeat bg-cover items-flex-start w-screen lg:px-[8rem] snap-center`}>
      <div className="flex flex-col text-center justify-center items-center w-full max-w-[1200px] select-none">
        <div className="flex flex-col text-center items-center gap-20 z-10 h-[85vh] justify-center">
          <div>
            <h1 className="flex flex-col text-[6rem] md:text-[8rem] font-black">
              Grow your
              <br />
              business
            </h1>
            <div className="border-green text-[3.5rem] md:text-[5rem] font-thin flex flex-row gap-4 items-center justify-center">
              <span className="text-[2.5rem] md:text-[5rem]">with</span>
              <ServiceCarousel />
            </div>
          </div>
        </div>

        <a
          href="#services"
          className="flex flex-col text-center w-screen items-center gap-2 text-white hover:text-white hover:bg-black/5 ease-in-out duration-500">
          <p className="font-thin text-[1.2rem]">Check out our services!</p>
          <IoIosArrowDown className="text-[30px] animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
