import { FaComputer, FaHeadset, FaServer } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
export const Services = ({ containerStyle }) => {
  const divStyle =
    "flex flex-col items-center justify-center px-8 snap-center hover:scale-[115%] ease-in-ou duration-500";
  const iconStyle = "text-[4rem] text-gray-300 ";
  const h4Style =
    "text-[2rem] text-[--accent-green-color] select-none font-semibold text-center";

  return (
    <div
      id="services"
      className={`${containerStyle} h-[20svh] pt-0 w-full justify-evenly filter-[blur(10px)]`}>
      <div className="flex flex-row items-center justify-around gap-10 snap-x-mandatory snap-x overflow-x-scroll">
        <div className={`${divStyle}`}>
          <FaComputer className={`${iconStyle}`} />
          <h4 className={`${h4Style}`}>DEVELOPMENT</h4>
        </div>
        <div className={`${divStyle}`}>
          <FaHeadset className={`${iconStyle}`} />
          <h4 className={`${h4Style}`}>IT SUPPORT</h4>
        </div>
        <div className={`${divStyle}`}>
          <FaServer className={`${iconStyle}`} />
          <h4 className={`${h4Style}`}>WEB HOSTING</h4>
        </div>
        <div className={`${divStyle}`}>
          <TbSocial className={`${iconStyle}`} />
          <h4 className={`${h4Style}`}>MARKETING</h4>
        </div>
      </div>
    </div>
  );
};
