import { createPortal } from "react-dom";
import { FaComputer, FaHeadset, FaServer } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
export const Services = ({ containerStyle }) => {
  const divStyle =
    "flex flex-col items-center justify-center px-8 snap-center hover:scale-[115%] ease-in-out duration-500";
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

  return (
    <div
      id="services"
      className={`${containerStyle} h-[20svh] pt-0 w-full justify-evenly filter-[blur(10px)]`}>
      <div className="flex flex-row items-center justify-around gap-10 snap-x-mandatory snap-x overflow-x-scroll">
        {/* TODO: need to fix the onClick function to run a module in Notifications or Module DOM element */}
        {serviceDataArr.map((data) => (
          <div
            className={`${divStyle}`}
            key={data.id}
            onClick={() => {
              return alert(
                <div
                  className="absolute flex flex-col justify-center items-center text-black bg-white"
                  key={data.id}>
                  hi {data.id}
                </div>
              );
            }}>
            {data.icon}
            <h4 className={`${h4Style}`}>{data.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
