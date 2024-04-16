import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

const inter = Inter({ subsets: ["latin"] });

// Import Mixpanel dynamically to avoid server-side rendering issues
const Mixpanel = dynamic(() => import('mixpanel-browser'), { ssr: false });

export const metadata: Metadata = {
  title: "Ross Brannigan | Leading Digital Business Results & Innovation",
  description: "Digital leader obsessed with commercial results, product innovation & customer satisfaction | IE MBA | APAC | ex-Etihad, ex-Airberlin, ex-Facebook",
};

// Function to track page views
function trackPageView(url: string) {
  Mixpanel.track('Page View', { url });
}

// Hook to track page views on route changes
function usePageViewTracking() {
  const useEffect = dynamic(() => import('react').then(mod => mod.useEffect), { ssr: false });

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url);
    };

    // Add event listener for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Remove event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Run the hook to initiate page view tracking
  usePageViewTracking();

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
