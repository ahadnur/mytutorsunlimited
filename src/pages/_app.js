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
