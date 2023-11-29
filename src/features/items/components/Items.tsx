import * as React from "react";

import { InventoryContext } from "@/features/inventory";

import { Item } from "./Item";

export const Items = () => {
  const inventory = React.useContext(InventoryContext);

  return (
    <div className="items">
      <Item id="ocarina" active={inventory.includes("ocarina")} />
      {!inventory.includes("heroBow2") && (
        <Item id="heroBow" active={inventory.includes("heroBow")} />
      )}
      {inventory.includes("heroBow2") && !inventory.includes("heroBow3") && (
        <Item id="heroBow2" active={true} />
      )}
      {inventory.includes("heroBow3") && <Item id={"heroBow3"} active={true} />}
      <Item id="fireArrow" active={inventory.includes("fireArrow")} />
      <Item id="iceArrow" active={inventory.includes("iceArrow")} />
      <Item id="lightArrow" active={inventory.includes("lightArrow")} />
      <Item id="hookshot" active={inventory.includes("hookshot")} />
      <Item id="bomb" active={inventory.includes("bomb")} />
      <Item id="keg" active={inventory.includes("keg")} />
    </div>
  );
};
