import { useState } from "react";
import { FaComputer, FaHeadset, FaServer } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
export const Services = ({ containerStyle }) => {
  const [openService, setOpenService] = useState(false);

  // Duplicate styles for elements
  const divStyle =
    "flex flex-col items-center justify-center px-8 snap-center ease-in-out duration-500";
  const iconStyle = "text-[4rem] text-gray-300 ";
  const h4Style =
    "text-[2rem] text-[--accent-green-color] select-none font-semibold text-center pb-4";

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
      desc: [
        "We create your design to your vision and branding.",
        "Let our devs be your subject matter experts.",
        "We take care of your website edits for you.",
        "Cost efficient and quick development!",
      ],
    },
    {
      name: "WEB DEVELOPMENT",
      icon: computerIcon,
      image: "",
      desc: [
        "We create your design to your vision and branding.",
        "Let our devs be your subject matter experts.",
        "We take care of your website edits for you.",
        "Cost efficient and quick development!",
      ],
    },
    {
      name: "WEB HOSTING",
      icon: serverIcon,
      image: "",
      desc: [
        "We create your design to your vision and branding.",
        "Let our devs be your subject matter experts.",
        "We take care of your website edits for you.",
        "Cost efficient and quick development!",
      ],
    },
    {
      name: "SEO ANALYSIS",
      icon: seoIcon,
      image: "",
      desc: [
        "We create your design to your vision and branding.",
        "Let our devs be your subject matter experts.",
        "We take care of your website edits for you.",
        "Cost efficient and quick development!",
      ],
    },
  ];

  //! TODO need to stylize Service Cards!!!
  return (
    <div
      id="services"
      className={`${containerStyle} h-[80svh] pt-0 w-full justify-center filter-[blur(10px)] sm:mt-[10rem]`}>
      <div className="flex xl:flex-row items-center justify-around gap-[10rem] md:gap-20 overflow-y-hidden lg:overflow-x-hidden ml-[22%] mr-[22%] lg:mr-0 lg:ml-0 p-20">
        {serviceDataArr.map((data, index) => (
          <div className={`${divStyle}`} key={index}>
            {data.icon}
            <h4 className={`${h4Style}`}>{data.name}</h4>
            {!openService && (
              <button
                onClick={() => (
                  setOpenService(index - 1), console.log("clicked to open")
                )}>
                Learn More
              </button>
            )}
            {openService === index - 1 && (
              <Card
                id={index}
                name={data.name}
                desc={data.desc}
                onClose={() => (
                  setOpenService(false), console.log("clicked to close")
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
