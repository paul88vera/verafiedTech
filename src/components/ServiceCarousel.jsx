import { useState } from "react";

export const ServiceCarousel = () => {
  const serviceArr = [
    "web design",
    "marketing",
    "optimization",
    "hosting",
    "web dev",
    "interaction",
  ];

  let serviceTitle = Math.floor(Math.random() * serviceArr.length);
  let services = serviceArr[serviceTitle];
  const [service, setService] = useState(services);
  let count = 0;
  const serviceChange = () => {
    count++;
    const serviceToggleBubble = document.querySelector("#service-span");
    serviceToggleBubble.classList.toggle("turnService");
    serviceToggleBubble.classList.toggle("animate-pulse");

    let newServiceTitle = Math.floor(Math.random() * serviceArr.length);
    let newService = serviceArr[newServiceTitle];

    setService(newService);
    if (count > 0) {
      clearInterval(serviceChange);
      count = 0;
    }
  };

  setTimeout(serviceChange, 5000);

  return (
    <div className="border-4 border-[--accent-green-color] px-8 rounded-[45px] ease-in-out duration-500">
      <span id="service-span">{service}</span>
    </div>
  );
};
