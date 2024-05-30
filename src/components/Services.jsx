import { useState } from "react";
import { FaComputer, FaHeadset, FaServer } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";
import Card from "./Card";

// eslint-disable-next-line react/prop-types
export const Services = ({ containerStyle }) => {
  const [openService, setOpenService] = useState(false);
  const divStyle =
    "flex flex-col items-center justify-center px-8 snap-center hover:scale-[115%] ease-in-out duration-500 cursor-pointer";
  const iconStyle = "text-[4rem] text-gray-300 ";
  const h4Style =
    "text-[2rem] text-[--accent-green-color] select-none font-semibold text-center";

  const computerIcon = <FaComputer className={`${iconStyle}`} />;
  const headsetIcon = <FaHeadset className={`${iconStyle}`} />;
  const serverIcon = <FaServer className={`${iconStyle}`} />;
  const seoIcon = <TbSocial className={`${iconStyle}`} />;

  const serviceDataArr = [
    {
      id: 0,
      name: "DEVELOPMENT",
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
      id: 1,
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
      id: 2,
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
      id: 3,
      name: "SEO",
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

  // TODO this needs to be fixed... cycles through all index at whatever increment was giving '-' or '+'
  const openServiceCard = (index) => {
    const newIndex = index - true;
    setOpenService(newIndex);
  };

  const closeServiceCard = () => {
    setOpenService(false);
  };

  //! TODO need to fix the onClick function to run a module in Notifications or Module DOM element
  return (
    <div
      id="services"
      className={`${containerStyle} h-[100%] md:h-[100svh] pt-0 w-full justify-evenly filter-[blur(10px)]`}>
      <div className="flex flex-col mt-[10rem] xl:flex-row items-center justify-around gap-[20rem] md:gap-40 snap-x-mandatory snap-x overflow-y-hidden lg:overflow-x-hidden">
        {serviceDataArr.map((data) => (
          <div
            className={`${divStyle}`}
            key={data.id}
            onClick={() => openServiceCard(data.id)}>
            {data.icon}
            <h4 className={`${h4Style}`}>{data.name}</h4>
            {openService === data.id && (
              <Card
                id={data.id}
                name={data.name}
                desc={data.desc}
                onClose={closeServiceCard}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
