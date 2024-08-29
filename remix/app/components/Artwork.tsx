import { useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { cn } from "~/util/cn";

export interface ArtworkProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  clipText?: boolean;
}

const img1 = "/artwork_crop_1.png";
const img2 = "/artwork_crop_2.png";
const images = [img1, img2];

const Artwork = ({ clipText, className, ...props }: ArtworkProps) => {
  const { pathname } = useLocation();
  const [index, setIndex] = useState(0);

  // toggle img on navigation
  useEffect(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, [pathname]);

  return (
    <img
      {...props}
      src={images[index]}
      alt="Artwork"
      className={cn(
        "w-[33vh] xl:w-[500px]",
        { "float-right": clipText, "fixed right-0 -z-10": !clipText },
        className
      )}
      style={{
        clipPath: `url('${images[index]}')`,
        shapeOutside: `url('${images[index]}')`,
        shapeMargin: "5px",
      }}
    />
  );
};
export default Artwork;
