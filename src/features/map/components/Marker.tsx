import { clsx } from "clsx";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import * as React from "react";

import { Checks, checks } from "@/features/checks";
import { LogicContext } from "@/features/logic";
import { scrubsS2Settings } from "@/features/settings";

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
    const checkList = Object.keys(checks).filter(
      (checkId) =>
        checks[checkId as keyof Checks].region == id &&
        scrubsS2Settings.checks.includes(checkId as keyof Checks),
    );

    if (checkList.length === 0) {
      setVariant("hidden");
    } else if (checkList.every((checkId) => completeChecks.includes(checkId))) {
      setVariant("clear");
    } else if (
      checkList
        .filter((checkId) => !completeChecks.includes(checkId))
        .every((checkId) => logic[checkId])
    ) {
      setVariant("full-clear");
    } else if (
      checkList.some(
        (checkId) => logic[checkId] && !completeChecks.includes(checkId),
      )
    ) {
      setVariant("partial-clear");
    } else {
      setVariant("inaccessible");
    }

    setCheckCount(
      checkList.filter(
        (checkId) => logic[checkId] && !completeChecks.includes(checkId),
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
