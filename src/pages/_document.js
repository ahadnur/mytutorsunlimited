import FacebookMsg from "@/components/FacebookMsg";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

      </Head>
      <body>
        <Main />
        <NextScript />

          {/* Vercel Analytics and Speed Insights */}
          <Analytics />
          <SpeedInsights />
        <FacebookMsg />
      </body>
    </Html>
  );
}
