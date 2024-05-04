import * as React from "react";

import { InventoryItems } from "@/features/inventory";

import { Item } from "./Item";

export const Items = React.memo(
  ({ inventory }: { inventory: InventoryItems }) => {
    return (
      <div className="items">
        <Item id="ocarina" active={inventory.ocarina} />
        {!inventory.heroBow2 && (
          <Item id="heroBow" active={inventory.heroBow} />
        )}
        {inventory.heroBow2 && !inventory.heroBow3 && (
          <Item id="heroBow2" active={inventory.heroBow2} />
        )}
        {inventory.heroBow3 && (
          <Item id="heroBow3" active={inventory.heroBow3} />
        )}
        <Item id="fireArrow" active={inventory.fireArrow} />
        <Item id="iceArrow" active={inventory.iceArrow} />
        <Item id="lightArrow" active={inventory.lightArrow} />
        <Item id="moonTear" active={inventory.moonTear} />
        {!inventory.bomb2 && <Item id="bomb" active={inventory.bomb} />}
        {inventory.bomb2 && !inventory.bomb3 && (
          <Item id={"bomb2"} active={inventory.bomb2} />
        )}
        {inventory.bomb3 && <Item id={"bomb3"} active={inventory.bomb3} />}
        <Item id="bombchu" active={inventory.bombchu} />
        <Item id="dekuStick" active={inventory.dekuStick} />
        <Item id="dekuNut" active={inventory.dekuNut} />
        <Item id="magicBean" active={inventory.magicBean} />

        <Item id="landTitleDeed" active={inventory.landTitleDeed} />
        <Item id="keg" active={inventory.keg} />
        <Item id="pictographBox" active={inventory.pictographBox} />
        <Item id="lensOfTruth" active={inventory.lensOfTruth} />
        <Item id="hookshot" active={inventory.hookshot} />
        <Item id="gfs" active={inventory.gfs} />
        <Item id="swampTitleDeed" active={inventory.swampTitleDeed} />
        {!inventory.bottle2 && <Item id="bottle1" active={inventory.bottle1} />}
        {inventory.bottle2 && <Item id="bottle2" active={inventory.bottle2} />}
        {inventory.bottle3 && <Item id="bottle3" active={inventory.bottle3} />}
        {inventory.bottle4 && <Item id="bottle4" active={inventory.bottle4} />}
        {inventory.bottle5 && <Item id="bottle5" active={inventory.bottle5} />}
        {inventory.bottle6 && <Item id="bottle6" active={inventory.bottle6} />}
        <Item id="goldDust" active={inventory.goldDust} />
        <Item id="dekuPrincess" active={inventory.dekuPrincess} />

        <Item id="magic" active={inventory.magic} />
        {!inventory.wallet2 && <Item id="wallet" active={inventory.wallet} />}
        {inventory.wallet2 && (
          <Item id={"wallet2"} active={inventory.wallet2} />
        )}
        <Item id="mountainTitleDeed" active={inventory.mountainTitleDeed} />
        {!inventory.sword2 && <Item id="sword" active={inventory.sword2} />}
        {inventory.sword2 && !inventory.sword3 && (
          <Item id="sword2" active={inventory.sword2} />
        )}
        {inventory.sword3 && <Item id="sword3" active={inventory.sword3} />}
        {!inventory.mirrorShield && (
          <Item id="shield" active={inventory.shield} />
        )}
        {inventory.mirrorShield && (
          <Item id={"mirrorShield"} active={inventory.mirrorShield} />
        )}
        <Item id="roomKey" active={inventory.roomKey} />
        <Item id="letterToKafei" active={inventory.letterToKafei} />
        <Item id="letterToMama" active={inventory.letterToMama} />
        <Item id="oceanTitleDeed" active={inventory.oceanTitleDeed} />
      </div>
    );
  },
);
