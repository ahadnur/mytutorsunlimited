import Head from "next/head";
import Script from "next/script";

import "@/styles/globals.css";

import { Poppins } from "next/font/google";
import Layout from "@/components/Layout";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
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

        {/* Google Tag Manager */}
        <Script>
          {`

          
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KNB5WW7J');
          

        `}
        </Script>
        {/* End Google Tag Manager */}

        <title>My Tutors Unlimited</title>
      </Head>
      <Layout className={poppins.className}>
        <main
          className={`${poppins.className} relative mt-[73px] container mx-auto py-16`}
        >
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
