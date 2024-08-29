import { useLocation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Artwork from "~/components/Artwork";

export interface SideArtworkProps {
  children: React.ReactNode;
}

const clipText = (pathname: string) => ["/", "/about"].includes(pathname);

export const SideArtwork: React.FC<SideArtworkProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  // let's limit the container height by the content height (desktop only)
  useEffect(() => {
    if (window.innerWidth < 700) {
      return;
    }
    if (containerRef.current && contentRef.current) {
      containerRef.current.style.maxHeight = `${contentRef.current.clientHeight}px`;
    }
  }, [pathname]);

  return (
    <div ref={containerRef} className="overflow-hidden flex-1 min-h-[85vh]">
      <Artwork className={"max-sm:hidden"} clipText={clipText(pathname)} />
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SideArtwork;
