import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge and deduplicate CSS classes
 * 
 * This function combines clsx for conditional class handling with tailwind-merge
 * to intelligently merge Tailwind CSS classes and remove conflicts.
 * 
 * @param inputs - Variable number of class values (strings, objects, arrays, etc.)
 * @returns A single string of merged and deduplicated CSS classes
 * 
 * @example
 * cn('px-2 py-1', 'px-4') // Returns 'py-1 px-4' (px-2 is overridden by px-4)
 * cn('text-red-500', { 'text-blue-500': isActive }) // Returns conditional classes
 * cn('base-class', className) // Merges with additional className prop
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
