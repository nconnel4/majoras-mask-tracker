import * as React from "react";

import { LogicContext } from "@/features/logic";
import { scrubsS2Settings } from "@/features/settings";

import { Check } from "../components/Check";
import { checks } from "../data/checks";
import { Checks } from "../types";

type RegionChecksProps = {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  completeChecks: (keyof Checks)[];
  setCompleteChecks: React.Dispatch<React.SetStateAction<(keyof Checks)[]>>;
};

export const RegionChecks = ({
  region,
  setRegion,
  completeChecks,
  setCompleteChecks,
}: RegionChecksProps) => {
  const [regionChecks, setRegionChecks] = React.useState<(keyof Checks)[]>([]);
  const logic = React.useContext(LogicContext);

  React.useEffect(() => {
    const checkList = Object.keys(checks).filter(
      (checkId) =>
        checks[checkId as keyof Checks].region == region &&
        scrubsS2Settings.checks.includes(checkId as keyof Checks),
    );

    setRegionChecks(checkList as (keyof Checks)[]);
  }, [region, completeChecks]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.id as keyof Checks;
    const selectedCheck = checks[id];
    let completeChecksCopy: (keyof Checks)[] = [...completeChecks];

    if (completeChecksCopy.includes(id)) {
      completeChecksCopy = completeChecksCopy.filter((check) => check !== id);
      selectedCheck?.linkedChecks?.forEach((linkedCheck) => {
        completeChecksCopy = completeChecksCopy.filter(
          (check) => check !== linkedCheck,
        );
      });
    } else {
      completeChecksCopy.push(id);
      selectedCheck?.linkedChecks?.forEach((linkedCheck) => {
        completeChecksCopy.push(linkedCheck);
      });
    }

    setCompleteChecks(completeChecksCopy);
  };

  return (
    <div className="check-list">
      <button key="reset" id="reset-btn" onClick={() => setRegion("")}>
        <div className="check">Return to Regions</div>{" "}
      </button>
      {regionChecks.map((checkId) => {
        const check = checks[checkId];

        if (check) {
          return (
            <button key={checkId} onClick={handleClick} id={checkId}>
              <Check
                id={checkId}
                check={check}
                isActive={logic[checkId]}
                isComplete={completeChecks.includes(checkId)}
              />
            </button>
          );
        }
      })}
    </div>
  );
};
