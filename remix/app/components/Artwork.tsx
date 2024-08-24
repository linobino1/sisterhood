import { cn } from "~/util/cn";

export interface ArtworkProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

const img = "/artwork.png";
const clipPath = "ellipse(31% 44% at 51.5% 48.5%)";
const shapeOutside = `url('${img}')`;

const Artwork = ({ className, ...props }: ArtworkProps) => {
  return (
    <img
      {...props}
      src={img}
      alt="Artwork"
      className={cn("w-full float-right -mr-50%", className)}
      style={{ clipPath, shapeOutside, shapeMargin: "5px" }}
    />
  );
};
export default Artwork;
