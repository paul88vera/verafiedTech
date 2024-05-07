import ContactSection from "../components/Form";
import Hero from "../components/Hero";
import { OurWork } from "../components/OurWork";
import { Services } from "../components/Services";

export const Landing = () => {
  const container = "flex flex-col lg:flex-row gap-10 h-screen px-4 w-screen ";
  return (
    <div className="flex flex-col justify-center items-center snap-y snap-mandatory">
      {/* <section
        id="landing"
        className={`${container} bg-hero-pattern bg-bottom bg-no-repeat bg-cover`}>
        <h1 className="text-center">
          Our website is in development until May 1st!
        </h1>
        <h2 className="text-center text-[1.2rem] md:text-[1.5rem]">
          Come back for your Tech solutions and IT support in San Antonio,
          Texas!
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
            <div className="flex flex-col justify-center items-center px-4 max-w-80">
              <div className="text-center text-[1.2rem] md:text-[1.5rem] text-black">
                You can contact me directly by email or view our work on my
                personal site.{" "}
                <span className="text-[#646cff] hover:text-black">
                  www.paulvera.com
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section> */}
      <Hero containerStyle={container} />
      <Services containerStyle={container} />
      <OurWork containerStyle={container} />
      <ContactSection containerStyle={container} />
    </div>
  );
};
