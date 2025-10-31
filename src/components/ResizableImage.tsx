import React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have your class utility (clsx/tailwind-merge)

// Define the component's properties by extending standard Image attributes
interface ResizableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Source path for the image (required)
   */
  src: string; 
  
  /**
   * Alternative text for accessibility (required)
   */
  alt: string; 
  
  /**
   * Tailwind utility classes for size, position, margins, etc.
   * This is where you would pass classes like 'w-full h-auto absolute top-0'
   */
  className?: string;

  /**
   * How the image should fit into its container. 
   * Maps to Tailwind's object-{fit} classes.
   * @default 'contain'
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

  /**
   * Boolean to use native browser lazy loading (loading="lazy").
   * @default true
   */
  lazyLoad?: boolean;
}

/**
 * A reusable, responsive Image component optimized for resizing and positioning.
 * It combines base sizing, object-fit, and accepts all standard image and positioning classes.
 */
const ResizableImage: React.FC<ResizableImageProps> = ({
  src,
  alt,
  className,
  fit = 'contain',
  lazyLoad = true,
  ...props
}) => {
  
  // Map the 'fit' prop to the corresponding Tailwind object-{fit} class
  const fitClass = {
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  }[fit];

  // Combine all classes: base classes, fit class, and user-provided classes (including positioning)
  const classes = cn(
    'block', // Base: ensures it behaves as a block element
    fitClass,
    className
  );
  
  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      loading={lazyLoad ? 'lazy' : 'eager'} // Use native browser lazy loading
      {...props}
    />
  );
};

export default ResizableImage;