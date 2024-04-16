import * as Mixpanel from 'mixpanel-browser';
import { useRouter } from 'next/router';

// Function to track events with additional properties
export const trackEvent = (eventName, properties = {}) => {
  Mixpanel.track(eventName, properties);
};

// Custom hook to track page views on route changes
function useRootChangeTracker() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackEvent('Page View', { url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup function to remove event listener on unmount
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);
}

// Initialize Mixpanel with your project token (replace with yours)
Mixpanel.initialize('ec0d1ce4d06ee41c0de80f1869b50426');

// Run the hook on app load to initiate page view tracking
useRootChangeTracker();