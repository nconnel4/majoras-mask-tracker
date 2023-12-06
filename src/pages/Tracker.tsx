import { useState } from "react";

import { Regions } from "@/features/checks";
import { Inventory } from "@/features/items";

export const Tracker = () => {
  const [region, setRegion] = useState("");

  return (
    <div className="tracker">
      <Inventory />
      {!region && <Regions setRegion={setRegion} />}
      <button onClick={() => setRegion("")}>Reset Region</button>
    </div>
  );
};
