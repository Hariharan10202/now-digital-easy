"use client";

import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box = ({ children, className }: BoxProps) => {
  return <div className={`${className} lg:p-20 p-10`}>{children}</div>;
};

export default Box;
