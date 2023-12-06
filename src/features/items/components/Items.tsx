import * as React from "react";

import { InventoryContext } from "@/features/inventory";

import { Item } from "./Item";

export const Items = () => {
  const inventory = React.useContext(InventoryContext);

  return (
    <div className="items">
      <Item id="ocarina" />
      {!inventory.includes("heroBow2") && <Item id="heroBow" />}
      {inventory.includes("heroBow2") && !inventory.includes("heroBow3") && (
        <Item id="heroBow2" />
      )}
      {inventory.includes("heroBow3") && <Item id={"heroBow3"} />}
      <Item id="fireArrow" />
      <Item id="iceArrow" />
      <Item id="lightArrow" />
      <Item id="moonTear" />
      {!inventory.includes("bomb2") && <Item id="bomb" />}
      {inventory.includes("bomb2") && !inventory.includes("bomb3") && (
        <Item id={"bomb2"} />
      )}
      {inventory.includes("bomb3") && <Item id={"bomb3"} />}
      <Item id={"bombchu"} />
      <Item id={"dekuStick"} />
      <Item id={"dekuNut"} />
      <Item id="magicBean" />

      <Item id="landTitleDeed" />
      <Item id="keg" />
      <Item id="pictographBox" />
      <Item id="lensOfTruth" />
      <Item id="hookshot" />
      <Item id="gfs" />
      <Item id="swampTitleDeed" />
      <Item id="bottle1" />
      <Item id="goldDust" />
      <Item id="dekuPrincess" />

      <Item id="magic" />
      {!inventory.includes("wallet2") && <Item id="wallet" />}
      {inventory.includes("wallet2") && <Item id={"wallet2"} />}
      <Item id="mountainTitleDeed" />
      {!inventory.includes("sword2") && <Item id="sword" />}
      {inventory.includes("sword2") && !inventory.includes("sword3") && (
        <Item id="sword2" />
      )}
      {inventory.includes("sword3") && <Item id="sword3" />}
      {!inventory.includes("mirrorShield") && <Item id="shield" />}
      {inventory.includes("mirrorShield") && <Item id={"mirrorShield"} />}
      <Item id="roomKey" />
      <Item id="letterToKafei" />
      <Item id="letterToMama" />
      <Item id="oceanTitleDeed"></Item>
    </div>
  );
};
