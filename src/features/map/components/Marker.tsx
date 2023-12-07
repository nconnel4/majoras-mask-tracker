import { clsx } from "clsx";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { CheckContext, regionChecks } from "@/features/checks";

type MarkerProps = {
  id: string;
  setRegion: Dispatch<SetStateAction<string>>;
};

export const Marker = ({ id, setRegion }: MarkerProps) => {
  const [variant, setVariant] = useState("inaccessible");
  const checks = useContext(CheckContext);

  useEffect(() => {
    const regionCheckList = regionChecks[id];
    const checkList = checks.filter((check) =>
      regionCheckList.includes(check.id),
    );

    if (checkList.length === 0) {
      setVariant("hidden");
    } else if (checkList.every((check) => check.isActive)) {
      setVariant("full-clear");
    } else if (checkList.some((check) => check.isActive)) {
      setVariant("partial-clear");
    } else {
      setVariant("inaccessible");
    }
  }, [checks, id]);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const regionId = e.currentTarget.id.split("-")[1];

    setRegion(regionId);
  };
  return (
    <button
      id={`marker-${id}`}
      className={clsx("marker", variant)}
      onClick={handleClick}
    />
  );
};
