import { Check as CheckType } from "../types";

type CheckProps = {
  check: CheckType;
};

export const Check = ({ check }: CheckProps) => {
  return (
    <div className="check" id={check.id}>
      {check.name}
    </div>
  );
};
