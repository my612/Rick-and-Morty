import { useEffect } from 'react';

/**
 * Custom hook to set the background of the page.
 * @param {string} imageUrl - The URL of the image to be used as the background.
 */
const useBackground = (imageUrl: string) => {
  useEffect(() => {
    // Save the current background style
    const originalBackground = document.body.style.background;

    // Set the new background image along with other styles
    document.body.style.backgroundImage = `url("${imageUrl}")`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    // document.body.style.overflow = 'hidden'; // Optional: Disable scrolling

    // Cleanup function to revert to the original background when the component unmounts
    return () => {
      document.body.style.background = originalBackground;
      document.body.style.overflow = ''; // Optional: Re-enable scrolling
    };
  }, [imageUrl]); // Only re-run the effect if the imageUrl changes
};

export default useBackground;