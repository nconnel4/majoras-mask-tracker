import * as React from "react";

import { InventoryContext } from "@/features/inventory";

import { Items } from "./Items";
import { Masks } from "./Masks.tsx";
import { Remains } from "./Remains.tsx";
import { Songs } from "./Songs.tsx";

export const Inventory = React.memo(() => {
  const inventory = React.useContext(InventoryContext);
  return (
    <div className="inventory">
      <Items inventory={inventory} />
      <Masks inventory={inventory} />
      <Songs inventory={inventory} />
      <Remains inventory={inventory} />
    </div>
  );
});
