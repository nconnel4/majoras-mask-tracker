import * as React from "react";

import { LogicContext } from "@/features/logic";

import { Check } from "../components/Check";
import { checks } from "../data/checks";
import { regionChecks as regionCheckList } from "../data/regions";
import { Check as CheckType } from "../types";

type RegionChecksProps = {
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
  completeChecks: string[];
  setCompleteChecks: React.Dispatch<React.SetStateAction<string[]>>;
};

export const RegionChecks = ({
  region,
  setRegion,
  completeChecks,
  setCompleteChecks,
}: RegionChecksProps) => {
  const [regionChecks, setRegionChecks] = React.useState<CheckType[]>([]);
  const logic = React.useContext(LogicContext);

  React.useEffect(() => {
    const checkList = regionCheckList[region];
    setRegionChecks(
      checkList.map((check) => {
        const lookup = checks.find((c) => c.id === check);
        if (lookup === undefined) {
          throw new TypeError(`${check} was not found in master check list.`);
        }

        return lookup;
      }),
    );
  }, [region, completeChecks]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (completeChecks.includes(e.currentTarget.id)) {
      setCompleteChecks(
        completeChecks.filter((check) => check !== e.currentTarget.id),
      );
    } else {
      setCompleteChecks([...completeChecks, e.currentTarget.id]);
    }
  };

  return (
    <div className="check-list">
      <button key="reset" id="reset-btn" onClick={() => setRegion("")}>
        <div className="check">Return to Regions</div>{" "}
      </button>
      {regionChecks.map((check) => {
        return (
          <button key={check.id} id={check.id} onClick={handleClick}>
            <Check
              check={check}
              isActive={logic[check.id]}
              isComplete={completeChecks.includes(check.id)}
            />
          </button>
        );
      })}
    </div>
  );
};
