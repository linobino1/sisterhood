import { NavLink } from "@remix-run/react";
import { cn } from "~/util/cn";

const linkClassName = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) =>
  cn("hover:underline", {
    underline: isActive || isPending,
    "font-bold": isPending,
  });

export const Navigation: React.FC<{ className?: string }> = ({ className }) => (
  <nav className={cn("flex flex-col gap-2", className)}>
    <NavLink to="/" className={(args) => cn(linkClassName(args), "sm:hidden")}>
      start
    </NavLink>
    <NavLink to="/about" className={linkClassName}>
      about
    </NavLink>
    <NavLink to="/books" className={linkClassName}>
      books
    </NavLink>
    <NavLink to="/contact" className={linkClassName}>
      contact
    </NavLink>
  </nav>
);
