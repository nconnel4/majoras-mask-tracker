import { useContext, useEffect, useState } from "react";

import { CheckDispatchContext, Regions, checks } from "@/features/checks";
import { RegionChecks } from "@/features/checks/routes/RegionChecks.tsx";
import { evaluateCheck } from "@/features/checks/utils/evaluateChecks.ts";
import { InventoryContext } from "@/features/inventory";
import { Inventory } from "@/features/items";
import { Map } from "@/features/map";

export const Tracker = () => {
  const dispatch = useContext(CheckDispatchContext);
  const inventory = useContext(InventoryContext);
  const [region, setRegion] = useState("");

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.addEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    for (let i = 0; i < checks.length; i++) {
      const check = {
        ...checks[i],
        isComplete: false,
        isActive: false,
        canPeek: false,
      };
      const _check = evaluateCheck(check, inventory);
      if (dispatch) {
        dispatch({ type: "addCheck", payload: _check });
      }
    }
  }, [dispatch, inventory]);

  return (
    <div className="tracker">
      <Inventory />
      {!region && <Regions setRegion={setRegion} />}
      {region && <RegionChecks region={region} setRegion={setRegion} />}
      <Map setRegion={setRegion} />
    </div>
  );
};
