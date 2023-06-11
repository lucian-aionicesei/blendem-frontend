"use client";

import { createContext, ReactNode } from "react";

export const HomePageContext = createContext({});

export default function HomePageProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <HomePageContext.Provider value="dark">{children}</HomePageContext.Provider>
  );
}
