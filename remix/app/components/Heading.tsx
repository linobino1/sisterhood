import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  useColor?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  lookLike?: 1 | 2 | 3 | 4 | 5 | 6;
}

const sizes = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "",
  5: "",
  6: "",
};

const Heading: React.FC<Props> = ({
  useColor = true,
  level = 1,
  lookLike,
  children,
  ...props
}) => {
  const Tag = `h${level}` as ElementType;
  if (!lookLike) lookLike = level;
  return (
    <Tag {...props} className={twMerge("", sizes[lookLike], props.className)}>
      {children}
    </Tag>
  );
};
export default Heading;
