import Head from "next/head";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { appWithTranslation } from "next-i18next";
import { Analytics } from '@vercel/analytics/react';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../styles/globals.css";

// Create a client
const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Your analytics code here
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <title>TrungNguyen Blog - Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png"></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E1P0FRENZE"
        ></script>
        {/* <script
          data-ad-client="ca-pub-9218747748878734"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9218747748878734"
          crossOrigin="anonymous"
        ></script> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-E1P0FRENZE');
              `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (
              localStorage.theme === "dark" ||
              (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
            `,
          }}
        ></script>
      </Head>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
      <Analytics />
    </div>
  );
}

export default appWithTranslation(App);
