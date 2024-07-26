import { cn } from "~/util/cn";

export interface GutterProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  disable?: boolean;
  disableNavSpacing?: boolean;
  center?: boolean;
}

const Gutter: React.FC<GutterProps> = ({
  as = "div",
  size = "md",
  disable = false,
  disableNavSpacing,
  center = true,
  className,
  ...props
}) => {
  const Tag = as;
  if (disableNavSpacing === undefined) disableNavSpacing = disable;
  return (
    <Tag
      className={cn(
        {
          "w-full": !disable,
          "mx-auto": !disable && center,
          "max-w-[min(1280px,94vw)] xl:max-w-[min(1280px,90vw)]":
            !disable && size === "md",
          "max-w-[min(970px,94vw)] xl:max-w-[min(970px,90vw)]":
            !disable && size === "sm",
          "px-[3vw] xl:px-[5vw]": !disable && size === "lg",
          "sm:pr-35 xs:pr-18": !disableNavSpacing,
        },
        className
      )}
    >
      {props.children}
    </Tag>
  );
};

export default Gutter;
