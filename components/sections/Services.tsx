"use client";

import Sheild from "../../public/assets/Services/sheild.svg";
import Tools from "../../public/assets/Services/tools.svg";
import Pricing from "../../public/assets/Services/pricing.svg";
import Experience from "../../public/assets/Services/experience.svg";
import Customers from "../../public/assets/Services/customers.svg";
import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [active, setActive] = useState("Safe and Secure");

  const serviceItems = [
    { id: 1, name: "Safe and Secure", icon: Sheild },
    { id: 2, name: "User Friendly Tools", icon: Tools },
    { id: 3, name: "Budget-Friendly Pricing", icon: Pricing },
    { id: 4, name: "10+ Years Experience", icon: Experience },
    { id: 5, name: "12,000+ Customers", icon: Customers },
  ];

  const onActiveHandler = (name: string) => {
    setActive(name);
  };

  return (
    <div className="px-20 py-10">
      <div className="text-center flex flex-col gap-y-5 w-[70%] m-auto">
        <h1 className="text-3xl font-extrabold">
          Businesses hire us because of the results we provide.
        </h1>
        <span className="text-xl font-semibold">
          We transform businesses wholly, across all the digital touch-points
          with targeted, highly relevant and personalized experiences.
        </span>
      </div>
      <div className="flex py-10">
        <div className="flex-[2] flex items-center justify-center">
          GIF goes here
        </div>
        <div className="flex-1 flex flex-col gap-y-5">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onActiveHandler(item.name)}
              className={`${
                active === item.name
                  ? "border-2 border-bg-primary [&_h2]:text-bg-primary icon:fill-bg-primary"
                  : ""
              } flex transition-all delay-75 border-2 items-center w-full gap-10 p-5 bg-[#F8F9FA] rounded-[30px] cursor-pointer`}
            >
              <div className="relative w-[60px] h-[60px] flex items-center justify-center">
                <Image src={item.icon} alt={item.name} className="fill-white" />
              </div>
              <h2 className="text-[24px] font-bold">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;