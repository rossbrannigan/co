// Layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import { useEffect } from 'react';
import mixpanel from 'mixpanel';
import { useClient } from '@next/react-use-client'; // Import useClient hook

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ross Brannigan | Leading Digital Business Results & Innovation",
  description: "Digital leader obsessed with commercial results, product innovation & customer satisfaction | IE MBA | APAC | ex-Etihad, ex-Airberlin, ex-Facebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Marking the component as client-side
  useClient();

  useEffect(() => {
    mixpanel.init("ec0d1ce4d06ee41c0de80f1869b50426");
    mixpanel.track("Page View");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <GoogleTagManager gtmId="G-R17NJV1L4N"/>
        <GoogleAnalytics gaId="G-R17NJV1L4N" />
      </body>
    </html>
  );
}