import { cn } from "~/util/cn";

export interface GutterProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg";
  disable?: boolean;
  center?: boolean;
}

const Gutter: React.FC<GutterProps> = ({
  as = "div",
  size = "md",
  disable = false,
  center = true,
  className,
  ...props
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        {
          "w-full": !disable,
          "mx-auto": !disable && center,
          "max-w-[min(970px,92vw)]": !disable && size === "sm",
          "max-w-[min(1280px,92vw)]": !disable && ["lg", "md"].includes(size),
        },
        className
      )}
    >
      {props.children}
    </Tag>
  );
};

export default Gutter;
