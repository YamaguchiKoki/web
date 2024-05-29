'use client'

import { useMediaQuery } from '@/hooks/useMediaQuery'
import type React from 'react'

interface Props {
  sp: React.ReactNode
  pc: React.ReactNode
  initial?: 'sp' | 'pc' | 'none'
}

export function Switcher({ sp, pc, initial = 'sp' }: Props) {
  const displaySP = useMediaQuery('(max-width: 1023px)')
  const displayPC = useMediaQuery('(min-width: 1024px)')
  if (displaySP) return sp
  if (displayPC) return pc
  if (initial === 'sp') return sp
  if (initial === 'pc') return pc
  return <></>
}
