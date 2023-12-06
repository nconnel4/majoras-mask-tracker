import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { Check } from "../components/Check";
import { checks } from "../data/checks";
import { Check as CheckType } from "../types";

type RegionChecksProps = {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
};

export const RegionChecks = ({ region, setRegion }: RegionChecksProps) => {
  const [regionChecks, setRegionChecks] = useState<CheckType[]>([]);

  useEffect(() => {
    setRegionChecks(checks.filter((check) => check.regions.includes(region)));
  }, [region]);

  return (
    <div className="check-list">
      <button id="reset-btn" onClick={() => setRegion("")}>
        <div className="check">Return to Regions</div>{" "}
      </button>
      {regionChecks.map((check) => (
        <button id={check.id}>
          <Check check={check} />
        </button>
      ))}
    </div>
  );
};
