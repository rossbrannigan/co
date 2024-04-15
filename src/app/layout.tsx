import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google';

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
  return (
    <html lang="en">
      <head>
        {/* Add Google Analytics tracking tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R17NJV1L4N"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R17NJV1L4N');
            `,
          }}
        />
        
        {/* Your existing meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        {/* Ensure metadata.description is always a string */}
        <meta name="description" content={metadata.description || ''} />
        <meta name="robots" content="follow, index" />
        <title>{metadata.title}</title>
        <link rel="stylesheet" href={inter.href} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
        <GoogleTagManager gtmId="G-R17NJV1L4N"/>
      </body>
    </html>
  );
}