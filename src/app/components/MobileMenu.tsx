'use client'

import { useEffect, useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import { Navigation } from './Navigation'
import { cn } from '~/util/cn'
import { usePathname } from 'next/navigation'

export interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

const MobileMenu = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
    if (isMenuOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }, [pathname])
  return (
    <>
      <div className="z-20 relative bottom-2.5 left-2 sm:hidden">
        <Hamburger onToggle={toggleMenu} toggled={isMenuOpen} distance={'sm'} size={32} />
      </div>
      <div
        className={cn(
          'fixed inset-0 overflow-y-auto transition-opacity z-10 bg-white flex flex-col items-center justify-center text-center text-2xl',
          {
            'opacity-0 pointer-events-none': !isMenuOpen,
          },
        )}
      >
        <Navigation className="gap-8" />
      </div>
    </>
  )
}
export default MobileMenu
