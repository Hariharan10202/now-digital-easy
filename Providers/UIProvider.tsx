"use client";
import { PrimeReactProvider } from "primereact/api";
import React from "react";

type UIProviderProps = {
  children: React.ReactNode;
};

const UIProvider = ({ children }: UIProviderProps) => {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
};

export default UIProvider;
