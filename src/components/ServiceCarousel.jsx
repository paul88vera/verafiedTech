import { useState } from "react";

export const ServiceCarousel = () => {
  // Service array of descriptions
  const serviceArr = [
    "web design",
    "support",
    "optimization",
    "hosting",
    "web dev",
    "interaction",
  ];

  // Creates a random number fro the length of the array
  let serviceTitle = Math.floor(Math.random() * serviceArr.length);
  // Plugs in the random number to the array
  let services = serviceArr[serviceTitle];
  // Updates the state to the current service title from the array
  const [service, setService] = useState(services);
  // Number of intervals start at zero
  let count = 0;
  // Function to interate the array and animation the transition
  const serviceChange = () => {
    // Adds 1 to the interval count
    count++;
    const serviceToggleBubble = document.querySelector("#service-span");
    serviceToggleBubble.classList.toggle("turnService");
    serviceToggleBubble.classList.toggle("animate-pulse");

    // Recalls the random number from the array
    let newServiceTitle = Math.floor(Math.random() * serviceArr.length);
    let newService = serviceArr[newServiceTitle];

    // Update state with new random title from the service array
    setService(newService);

    // Checks to see if more than 0 intervals are set off and clears the interval if there is
    if (count > 0) {
      clearInterval(serviceChange);
      count = 0;
    }
  };

  // Timeout after 5 seconds
  setTimeout(serviceChange, 5000);

  return (
    <div className="border-4 border-[--accent-green-color] px-8 rounded-[45px] ease-in-out duration-500">
      <span id="service-span">{service}</span>
    </div>
  );
};
