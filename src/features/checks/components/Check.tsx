import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { useContext, useEffect, useState } from "react";

import { LogicContext } from "@/features/logic";

import { Check as CheckType } from "../types";

type CheckProps = {
  check: CheckType;
  isComplete: boolean;
  isActive: boolean;
};

export const Check = ({ check, isComplete, isActive }: CheckProps) => {
  const [variant, setVariant] = useState("inactive");
  const logic = useContext(LogicContext);

  useEffect(() => {
    if (isComplete) {
      setVariant("complete");
    } else if (isActive) {
      setVariant("active");
    } else {
      setVariant("inactive");
    }
  }, [check, logic, isComplete, isActive]);

  return (
    <div className={clsx("check", variant)} id={check.id}>
      {check.name}
      {check.id.startsWith("song") && (
        <FontAwesomeIcon className={"song-icon"} icon={faMusic} />
      )}
    </div>
  );
};
