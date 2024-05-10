import Head from "next/head";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import Layout from "@/components/Layout";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import FacebookMsg from "@/components/FacebookMsg";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });    
          `}
      </Script>
      <Head>
        <title>My Tutor Unlimited</title>
        <meta
          name="description"
          content="Your personalized online tutoring service. Find your best tutors for python, c/c++, javascript, mathematics."
        ></meta>

        {/* Icons for Browsers and devices */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        {/* Google Adsense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-1197114634944870"
        ></meta>
      </Head>
      <Layout className={poppins.className}>
        <main
          className={`${poppins.className} relative mt-[73px] container mx-auto py-16`}
        >
          <Component {...pageProps} />

          {/* Google Tag Manager */}
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}
          />

          {/* Vercel Analytics and Speed Insights */}
          <Analytics />
          <SpeedInsights />

          {/* Facebook Messenger */}
          <FacebookMsg />
        </main>
      </Layout>
    </>
  );
}
