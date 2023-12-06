import { clsx } from "clsx";
import { useEffect, useState } from "react";

import { PlayerCheck } from "@/features/checks/types";

type CheckProps = {
  check: PlayerCheck;
};

export const Check = ({ check }: CheckProps) => {
  const [variant, setVariant] = useState("inactive");

  useEffect(() => {
    if (check.isComplete) {
      setVariant("complete");
    } else if (check.isActive) {
      setVariant("active");
    } else if (check.canPeek) {
      setVariant("peek");
    } else {
      setVariant("inactive");
    }
  }, [check]);

  return (
    <div className={clsx("check", variant)} id={check.id}>
      {check.name}
    </div>
  );
};
