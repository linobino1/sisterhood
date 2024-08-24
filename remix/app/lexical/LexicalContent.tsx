import { Serialize } from "./Serialize";

export interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "html"> {
  json?: any;
  disableGutter?: boolean;
  disableMarginBlock?: boolean;
}

const LexicalContent: React.FC<Props> = ({
  json,
  disableGutter,
  disableMarginBlock,
  ...props
}) => {
  return (
    <div {...props}>
      <Serialize
        nodes={json?.root?.children ?? []}
        disableGutter={disableGutter}
        disableMarginBlock={disableMarginBlock}
      />
    </div>
  );
};
export default LexicalContent;
