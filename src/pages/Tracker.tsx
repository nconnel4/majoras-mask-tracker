import { useContext, useEffect, useState } from "react";

import { CheckDispatchContext, Regions, checks } from "@/features/checks";
import { RegionChecks } from "@/features/checks/routes/RegionChecks.tsx";
import { Inventory } from "@/features/items";

export const Tracker = () => {
  const dispatch = useContext(CheckDispatchContext);
  const [region, setRegion] = useState("");

  useEffect(() => {
    for (let i = 0; i < checks.length; i++) {
      const check = {
        ...checks[i],
        isComplete: false,
        isActive: false,
        canPeek: false,
      };
      if (dispatch) {
        dispatch({ type: "addCheck", payload: check });
      }
    }
  }, [dispatch]);

  return (
    <div className="tracker">
      <Inventory />
      {!region && <Regions setRegion={setRegion} />}
      {region && <RegionChecks region={region} setRegion={setRegion} />}
    </div>
  );
};
