"use client";

import { createContext, ReactNode } from "react";
import { Storyblok, config } from "@/utils/shared";
import { Response } from "@/utils/interfaces";
import { useState, useEffect } from "react";

export const HomePageContext = createContext<string[] | null>(null);

export default function HomePageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [availableRegions, setAvailableRegions] = useState<string[] | null>(
    null
  );
  useEffect(() => {
    Storyblok.get(`cdn/stories`, {
      token: config.token,
      is_startpage: true,
      sort_by: "position:asc",
    })
      .then(async ({ data: { stories } }: Response) => {
        setAvailableRegions(stories.map(({ slug }) => slug));
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <HomePageContext.Provider value={availableRegions}>
      {children}
    </HomePageContext.Provider>
  );
}
