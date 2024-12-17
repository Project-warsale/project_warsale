'use client'
import { useContext } from 'react'
import { AppContext } from '@/context/contextProvider'

import { cn } from '@/lib/utils'

const OpacityBackground = ({ onClick }: { onClick: () => void }) => {
  const { cartOpen } = useContext(AppContext)

  return (
    <div
      onClick={onClick}
      className={cn(
        'w-screen h-screen fixed bg-black/30 transition-opacity duration-300 ease-linear left-0 top-0 z-[800]',
        cartOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
    />
  )
}

export default OpacityBackground
