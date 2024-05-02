"use client";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import React from "react";

type UIProviderProps = {
  children: React.ReactNode;
};

const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      {children}
    </PrimeReactProvider>
  );
};

export default UIProvider;
