import { cn } from '~/util/cn'
import { NavigationLink } from './NavigationLink'

export const Navigation: React.FC<{ className?: string }> = ({ className }) => (
  <nav className={cn('flex flex-col gap-2', className)}>
    <NavigationLink to="/" className="sm:hidden">
      start
    </NavigationLink>
    <NavigationLink to="/about">about</NavigationLink>
    <NavigationLink to="/books">books</NavigationLink>
    <NavigationLink to="/contact">contact</NavigationLink>
  </nav>
)
