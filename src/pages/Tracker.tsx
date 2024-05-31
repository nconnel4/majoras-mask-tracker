import * as React from "react";

import { Checks, RegionChecks, Regions } from "@/features/checks";
import { Hints } from "@/features/hints";
import { InventoryProvider } from "@/features/inventory";
import { Inventory } from "@/features/items";
import { LogicProvider } from "@/features/logic";
import { Map } from "@/features/map";
import { scrubsS2Settings } from "@/features/settings";

export const Tracker = () => {
  const [region, setRegion] = React.useState("");
  const [completeChecks, setCompleteChecks] = React.useState<(keyof Checks)[]>(
    [],
  );

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
      {/*<CheckProvider initialChecks={scrubsS2Settings.checks}>*/}
      <InventoryProvider initialItems={scrubsS2Settings.initialItems}>
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
      {/*</CheckProvider>*/}
    </div>
  );
};
