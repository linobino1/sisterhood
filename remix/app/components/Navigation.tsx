import { NavLink } from "@remix-run/react";
import { cn } from "~/util/cn";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  cn("hover:underline", {
    underline: isActive,
  });

export const Navigation: React.FC<{ className?: string }> = ({ className }) => (
  <nav className={cn("flex flex-col gap-2 text-end", className)}>
    <NavLink to="/" className={linkClassName}>
      start
    </NavLink>
    <NavLink to="/about" className={linkClassName}>
      about
    </NavLink>
    <a
      className="hover:underline"
      href="mailto:contact@sisterhoodoftravelingfeministliterature.com"
    >
      contact
    </a>
  </nav>
);
