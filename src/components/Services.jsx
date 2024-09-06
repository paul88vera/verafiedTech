import { useState } from "react";
import { FaComputer, FaHeadset, FaServer } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
export const Services = ({ containerStyle }) => {
  const [openService, setOpenService] = useState(false);

  // Duplicate styles for elements
  const divStyle =
    "flex flex-col items-center justify-center px-10 ease-in-out duration-500 w-full md:w-[33.3%] hover:w-[100%] h-[900px] hover:bg-[--accent-green-color] hover:text-white";
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
      desc: [
        "We create your design to your vision and branding.",
        "Let our devs be your subject matter experts.",
        "We take care of your website edits for you.",
        "Cost efficient and quick development!",
      ],
      color: "bg-red-900",
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
      color: "bg-blue-900",
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
      color: "bg-orange-900",
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
      color: "bg-yellow-900",
    },
  ];

  return (
    <div
      id="services"
      className={`${containerStyle} pt-0 justify-center filter-[blur(10px)] sm:mt-[10rem] snap-center`}>
      <div className="flex xl:flex-row w-screen items-center justify-between overflow-y-hidden lg:overflow-x-hidden snap-x snap-mandatory">
        {serviceDataArr.map((data, index) => (
          <div
            className={`${divStyle}`}
            key={index}
            onMouseEnter={() => {
              <button onClick={() => setOpenService(index - 1)}>
                Learn More
              </button>;
            }}>
            {data.icon}
            <h4 className={`${h4Style}`}>{data.name}</h4>
            {!openService && (
              <button onClick={() => setOpenService(index - 1)}>
                Learn More
              </button>
            )}
            {openService === index - 1 && (
              <Card
                id={index}
                name={data.name}
                desc={data.desc}
                onClose={() => setOpenService(false)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
