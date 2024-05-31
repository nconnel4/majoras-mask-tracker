import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { useContext, useEffect, useState } from "react";

import { LogicContext } from "@/features/logic";

import { Checks, PlayerCheck } from "../types";

type CheckProps = {
  id: keyof Checks;
  check: PlayerCheck;
  isComplete: boolean;
  isActive: boolean;
};

export const Check = ({ id, check, isComplete, isActive }: CheckProps) => {
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
    <div className={clsx("check", variant)} id={id}>
      {check.name}
      {id.startsWith("song") && (
        <FontAwesomeIcon className={"song-icon"} icon={faMusic} />
      )}
    </div>
  );
};
