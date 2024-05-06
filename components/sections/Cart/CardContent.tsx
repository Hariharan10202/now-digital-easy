"use client";

import { useState } from "react";
import Login from "./Login";
import Payment from "./Payment";
import Signup from "./Signup";
import Summary from "./Summary";

interface CardContentProps {
  setActiveIndex: (activeIndex: number) => void;
  activeIndex: number;
}

const CardContent = ({ setActiveIndex, activeIndex }: CardContentProps) => {
  const [isUser, setUser] = useState<boolean>(false);

  return (
    <div className="w-full">
      {activeIndex == 0 ? (
        <Summary setActiveIndex={setActiveIndex} content="Summary" />
      ) : activeIndex == 1 ? (
        <>
          {!isUser ? (
            <Login setUser={setUser} setActiveIndex={setActiveIndex} />
          ) : (
            <Signup setUser={setUser} />
          )}
        </>
      ) : (
        <Payment setActiveIndex={setActiveIndex} />
      )}
    </div>
  );
};

export default CardContent;
