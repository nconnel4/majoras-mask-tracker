import { clsx } from "clsx";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import * as React from "react";

import { checks, regionChecks } from "@/features/checks";
import { LogicContext } from "@/features/logic";

type MarkerProps = {
  id: string;
  setRegion: Dispatch<SetStateAction<string>>;
  completeChecks: string[];
};

export const Marker = ({ id, setRegion, completeChecks }: MarkerProps) => {
  const [variant, setVariant] = useState("inaccessible");
  const [checkCount, setCheckCount] = useState(0);
  const logic = React.useContext(LogicContext);

  useEffect(() => {
    const regionCheckList = regionChecks[id];
    const checkList = checks.filter((check) =>
      regionCheckList.includes(check.id),
    );

    if (checkList.length === 0) {
      setVariant("hidden");
    } else if (checkList.every((check) => completeChecks.includes(check.id))) {
      setVariant("clear");
    } else if (
      checkList
        .filter((check) => !completeChecks.includes(check.id))
        .every((check) => logic[check.id])
    ) {
      setVariant("full-clear");
    } else if (
      checkList.some(
        (check) => logic[check.id] && !completeChecks.includes(check.id),
      )
    ) {
      setVariant("partial-clear");
    } else {
      setVariant("inaccessible");
    }

    setCheckCount(
      checkList.filter(
        (check) => logic[check.id] && !completeChecks.includes(check.id),
      ).length,
    );
  }, [logic, completeChecks, id]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const regionId = e.currentTarget.id.split("-")[1];

    setRegion(regionId);
  };
  return (
    <button
      id={`marker-${id}`}
      className={clsx("marker", variant)}
      onClick={handleClick}
    >
      {checkCount > 0 && <span>{checkCount}</span>}
    </button>
  );
};
