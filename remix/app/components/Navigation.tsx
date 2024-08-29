import { NavLink } from "@remix-run/react";
import { cn } from "~/util/cn";

const linkClassName = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) =>
  cn("hover:underline underline-offset-4 underline-3", {
    underline: isActive || isPending,
    "text-contrast": isPending,
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
