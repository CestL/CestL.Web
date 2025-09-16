import * as React from 'react'

/**
 * Mobile breakpoint threshold in pixels
 * Devices with width below this value are considered mobile
 */
const MOBILE_BREAKPOINT = 768

/**
 * Custom hook to detect if the current viewport is mobile-sized
 * 
 * This hook uses the matchMedia API to efficiently detect screen size changes
 * and provides a reactive boolean value indicating if the current viewport
 * is considered mobile (width < 768px).
 * 
 * @returns boolean - true if the viewport is mobile-sized, false otherwise
 * 
 * @example
 * function MyComponent() {
 *   const isMobile = useIsMobile()
 *   
 *   return (
 *     <div>
 *       {isMobile ? <MobileLayout /> : <DesktopLayout />}
 *     </div>
 *   )
 * }
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}
