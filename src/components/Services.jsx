import { useState } from "react";
import { FaComputer, FaHeadset, FaServer } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
export const Services = ({ containerStyle }) => {
  const [openService, setOpenService] = useState(false);

  // Duplicate styles for elements
  const divStyle =
    "flex flex-col items-center justify-center px-10 ease-in-out duration-500 w-full md:w-[33.3%] hover:w-[100%] h-[900px] hover:bg-[--accent-green-color] hover:text-white text-[--accent-green-color]";
  const iconStyle = "text-[4rem] text-gray-300";
  const h4Style = "text-[2rem] select-none font-semibold text-center pb-4";

  // Services Icons
  const computerIcon = <FaComputer className={`${iconStyle}`} />;
  const headsetIcon = <FaHeadset className={`${iconStyle}`} />;
  const serverIcon = <FaServer className={`${iconStyle}`} />;
  const seoIcon = <TbSocial className={`${iconStyle}`} />;

  // Services Data Array
  const serviceDataArr = [
    {
      name: "IT SUPPORT",
      icon: headsetIcon,
      image: "",
      color: "bg-red-900",
      vid: "IT",
    },
    {
      name: "WEB DEVELOPMENT",
      icon: computerIcon,
      image: "",
      color: "bg-blue-900",
      vid: "WebDev",
    },
    {
      name: "WEB HOSTING",
      icon: serverIcon,
      image: "",
      color: "bg-orange-900",
      vid: "Hosting",
    },
    {
      name: "SEO ANALYSIS",
      icon: seoIcon,
      image: "",
      color: "bg-yellow-900",
      vid: "SEO",
    },
  ];

  return (
    <div
      id="services"
      className={`${containerStyle} pt-0 px-0 justify-center filter-[blur(10px)] sm:mt-[10rem] snap-center`}>
      <div className="flex xl:flex-row w-screen items-center justify-between overflow-y-hidden lg:overflow-x-hidden snap-x snap-mandatory">
        {/* Map all services */}
        {serviceDataArr.map((data, index) => (
          <div className={`${divStyle}`} key={index}>
            {data.icon}
            <h4 className={`${h4Style}`}>{data.name}</h4>
            {/* If the service button is not pressed than show the button */}
            {!openService && (
              <button
                onClick={() => setOpenService(index - 1)}
                className="text-white">
                Learn More
              </button>
            )}
            {/* If the button has been pressed than change the state to open and show the card */}
            {openService === index - 1 && (
              <Card
                id={index}
                vid={data.vid}
                onClose={() => setOpenService(false)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
