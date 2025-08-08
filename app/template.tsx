'use client'

import { Loader } from '../components/ui/Loader'
import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
    console.log("Template")
  return (
    <div>
      {children}
      <Loader />
    </div>
  )
} 