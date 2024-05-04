"use client";

import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return (
    <div className={`${className} lg:px-20 lg:py-10 sm:p-10 p-3`}>
      {children}
    </div>
  );
};

export default Box;
