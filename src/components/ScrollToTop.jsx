import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Find the specific container that handles our scrolling
    const mainContainer = document.getElementById('main-scroll-container');
    
    if (mainContainer) {
      mainContainer.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Adds a nice smooth glide to the top
      });
    } else {
      // Fallback for pages without the layout (like login/signup)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}