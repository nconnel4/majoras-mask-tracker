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
      <Item id="moonTear" active={inventory.includes("moonTear")} />
      {!inventory.includes("bomb2") && (
        <Item id="bomb" active={inventory.includes("bomb")} />
      )}
      {inventory.includes("bomb2") && !inventory.includes("bomb3") && (
        <Item id={"bomb2"} active={true} />
      )}
      {inventory.includes("bomb3") && <Item id={"bomb3"} active={true} />}
      <Item id={"bombchu"} active={inventory.includes("bombchu")} />
      <Item id={"dekuStick"} active={inventory.includes("dekuStick")} />
      <Item id={"dekuNut"} active={inventory.includes("dekuNut")} />
      <Item id="magicBean" active={inventory.includes("magicBean")} />

      <Item id="landTitleDeed" active={inventory.includes("landTitleDeed")} />
      <Item id="keg" active={inventory.includes("keg")} />
      <Item id="pictographBox" active={inventory.includes("pictographBox")} />
      <Item id="lensOfTruth" active={inventory.includes("lensOfTruth")} />
      <Item id="hookshot" active={inventory.includes("hookshot")} />
      <Item id="gfs" active={inventory.includes("gfs")} />
      <Item id="swampTitleDeed" active={inventory.includes("swampTitleDeed")} />
      <Item id="bottle1" active={inventory.includes("bottle1")} />
      <Item id="goldDust" active={inventory.includes("goldDust")} />
      <Item id="dekuPrincess" active={inventory.includes("dekuPrincess")} />

      <Item id="magic" active={inventory.includes("magic")} />
      {!inventory.includes("wallet2") && (
        <Item id="wallet" active={inventory.includes("wallet")} />
      )}
      {inventory.includes("wallet2") && <Item id={"wallet2"} active={true} />}
      <Item
        id="mountainTitleDeed"
        active={inventory.includes("mountainTitleDeed")}
      />
      {!inventory.includes("sword2") && (
        <Item id="sword" active={inventory.includes("sword")} />
      )}
      {inventory.includes("sword2") && !inventory.includes("sword3") && (
        <Item id="sword2" active={true} />
      )}
      {inventory.includes("sword3") && <Item id="sword3" active={true} />}
      {!inventory.includes("mirrorShield") && (
        <Item id="shield" active={inventory.includes("shield")} />
      )}
      {inventory.includes("mirrorShield") && (
        <Item id={"mirrorShield"} active={true} />
      )}
      <Item id="roomKey" active={inventory.includes("roomKey")} />
      <Item id="letterToKafei" active={inventory.includes("letterToKafei")} />
      <Item id="letterToMama" active={inventory.includes("letterToMama")} />
      <Item
        className={"ocean-title-deed"}
        id="oceanTitleDeed"
        active={inventory.includes("oceanTitleDeed")}
      />
    </div>
  );
};
