import Header from "./Header";
import LoadingAnimation from "./LoadingAnimation";
import SiteFooter from "./SiteFooter";
import React, { useState } from "react";

const LoadingContext = React.createContext(true);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={isLoading}>
      <LoadingAnimation />
      <Header />
      {children}
      <SiteFooter />
    </LoadingContext.Provider>
  );
};

export default Layout;
