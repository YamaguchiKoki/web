'use client'

import { useEffect, useState } from 'react'

export function useMediaQuery(breakpoint: string) {
  const [isMeet, setIsMeet] = useState(false)
  useEffect(() => {
    const mediaQueryList = window.matchMedia(breakpoint)
    const listener = () => setIsMeet(mediaQueryList.matches)
    mediaQueryList.addEventListener('change', listener)
    return () => mediaQueryList.removeEventListener('change', listener)
  }, [])
  return isMeet
}
