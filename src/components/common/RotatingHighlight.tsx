import React from 'react';
import { cn } from '@/lib/utils';

interface RotatingHighlightProps {
  /** The text to display inside the highlight box (e.g., "Foundation") */
  text: string;
  /** Tailwind utility for the background color (e.g., 'bg-destructive') */
  // bgColorClass: string;
  /** 
   * The degree of rotation for the background box. 
   * Must use a value from Tailwind's scale (e.g., -1, -2, -3, 1, 2, 3, etc.).
   */
  rotationDegrees?: -3 | -2 | -1 | 1 | 2 | 3; // Enforcing the most common subtle scale
}

const RotatingHighlight: React.FC<RotatingHighlightProps> = ({
  text,
  rotationDegrees = -3, // Default to -3 degrees
}) => {
  
  // Map rotation degrees to Tailwind's utility class names
  const rotateClass = rotationDegrees > 0 ? `rotate-${rotationDegrees}` : `-rotate-${Math.abs(rotationDegrees)}`;
  const counterRotateClass = rotationDegrees > 0 ? `-rotate-${rotationDegrees}` : `rotate-${Math.abs(rotationDegrees)}`;
  
  // NOTE: Tailwind requires these classes to be present as strings for the JIT engine.

  return (
    // Outer container: Applies the forward rotation to the whole box
    <span 
      className={cn(
        "text-white px-2 py-1 ml-2 inline-block bg-destructive",
        "transform", // Enable transformations
        rotateClass // e.g., -rotate-3
      )}
    >
      {/* Inner container: Applies the opposite rotation to the text content */}
      <span 
        className={cn("inline-block transform", counterRotateClass)} // e.g., rotate-3
      >
        {text}
      </span>
    </span>
  );
};

export default RotatingHighlight;