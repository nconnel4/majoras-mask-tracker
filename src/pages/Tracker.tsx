import * as React from "react";

import { RegionChecks, Regions } from "@/features/checks";
import { Hints } from "@/features/hints";
import { InventoryProvider } from "@/features/inventory";
import { Inventory } from "@/features/items";
import { LogicProvider } from "@/features/logic";
import { Map } from "@/features/map";

export const Tracker = () => {
  const [region, setRegion] = React.useState("");
  const [completeChecks, setCompleteChecks] = React.useState<string[]>([]);

  React.useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.addEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="tracker">
      <InventoryProvider
        initialItems={[
          "sword",
          "shield",
          "ocarina",
          "songEpona",
          "songTime",
          "songSoaring",
          "dekuNut",
          "dekuStick",
        ]}
      >
        <LogicProvider>
          <Inventory />
          {!region && <Regions setRegion={setRegion} />}
          {region && (
            <RegionChecks
              region={region}
              setRegion={setRegion}
              setCompleteChecks={setCompleteChecks}
              completeChecks={completeChecks}
            />
          )}
          <div className="map-hints">
            <Map setRegion={setRegion} completeChecks={completeChecks} />
            <Hints />
          </div>
        </LogicProvider>
      </InventoryProvider>
    </div>
  );
};
