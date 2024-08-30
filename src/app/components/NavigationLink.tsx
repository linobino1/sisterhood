'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '~/util/cn'

export const NavigationLink: React.FC<{
  to: string
  className?: string
  children: React.ReactNode
}> = ({ to, className, children }) => {
  const pathname = usePathname()
  const isActive = pathname === to
  const isPending = false

  return (
    <Link
      href={to}
      className={cn(
        'hover:underline underline-offset-4 underline-3',
        {
          underline: isActive || isPending,
          'text-contrast': isPending,
        },
        className,
      )}
    >
      {children}
    </Link>
  )
}
