import ContactSection from "../components/Form";
import Hero from "../components/Hero";
import { OurWork } from "../components/OurWork";
import { Services } from "../components/Services";

export const Landing = () => {
  const container =
    "flex flex-col lg:flex-row gap-10 h-screen px-4 w-screen snap-center";
  return (
    <div className="flex flex-col justify-center items-center snap-proximity">
      <Hero containerStyle={container} />
      <Services containerStyle={container} />
      <OurWork containerStyle={container} />
      <ContactSection containerStyle={container} />
    </div>
  );
};
