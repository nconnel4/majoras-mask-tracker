import { useState } from "react";

import { Regions } from "@/features/checks";
import { RegionChecks } from "@/features/checks/routes/RegionChecks.tsx";
import { Inventory } from "@/features/items";

export const Tracker = () => {
  const [region, setRegion] = useState("");

  return (
    <div className="tracker">
      <Inventory />
      {!region && <Regions setRegion={setRegion} />}
      {region && <RegionChecks region={region} setRegion={setRegion} />}
    </div>
  );
};
