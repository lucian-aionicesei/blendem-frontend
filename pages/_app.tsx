import Layout from "@/components/Layout";
import { LoadingContext } from "@/components/AppContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ParallaxProvider>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LoadingContext.Provider>
    </ParallaxProvider>
  );
}
