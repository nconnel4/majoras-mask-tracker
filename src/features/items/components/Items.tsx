import * as React from "react";

import { InventoryContext } from "@/features/inventory";

import { Item } from "./Item";

export const Items = () => {
  const inventory = React.useContext(InventoryContext);

  return (
    <div className="items">
      <Item id="ocarina" />
      {!inventory.heroBow2 && <Item id="heroBow" />}
      {inventory.heroBow2 && !inventory.heroBow3 && <Item id="heroBow2" />}
      {inventory.heroBow3 && <Item id={"heroBow3"} />}
      <Item id="fireArrow" />
      <Item id="iceArrow" />
      <Item id="lightArrow" />
      <Item id="moonTear" />
      {!inventory.bomb2 && <Item id="bomb" />}
      {inventory.bomb2 && !inventory.bomb3 && <Item id={"bomb2"} />}
      {inventory.bomb3 && <Item id={"bomb3"} />}
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
      {!inventory.wallet2 && <Item id="wallet" />}
      {inventory.wallet2 && <Item id={"wallet2"} />}
      <Item id="mountainTitleDeed" />
      {!inventory.sword2 && <Item id="sword" />}
      {inventory.sword2 && !inventory.sword3 && <Item id="sword2" />}
      {inventory.sword3 && <Item id="sword3" />}
      {!inventory.mirrorShield && <Item id="shield" />}
      {inventory.mirrorShield && <Item id={"mirrorShield"} />}
      <Item id="roomKey" />
      <Item id="letterToKafei" />
      <Item id="letterToMama" />
      <Item id="oceanTitleDeed"></Item>
    </div>
  );
};
