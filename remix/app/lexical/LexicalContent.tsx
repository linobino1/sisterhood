import { Serialize } from "./Serialize";

export interface Props
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "html"> {
  json?: any;
  disableGutter?: boolean;
}

const LexicalContent: React.FC<Props> = ({ json, disableGutter, ...props }) => {
  return (
    <div {...props}>
      <Serialize
        nodes={json?.root?.children ?? []}
        disableGutter={disableGutter}
      />
    </div>
  );
};
export default LexicalContent;
