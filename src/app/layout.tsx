// This line marks the component as Client-side (using Next.js syntax)
use client;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { useEffect } from "react";
import mixpanel from "mixpanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ross Brannigan | Leading Digital Business Results & Innovation",
  description: "Digital leader obsessed with commercial results, product innovation & customer satisfaction | IE MBA | APAC | ex-Etihad, ex-Airberlin, ex-Facebook",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    // Initialize Mixpanel with environment variable
    mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);

    // Track page view with specific URL
    mixpanel.track("Page View", { url: window.location.pathname });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <GoogleTagManager gtmId="G-R17NJV1L4N" />
        <GoogleAnalytics gaId="G-R17NJV1L4N" />
      </body>
    </html>
  );
}