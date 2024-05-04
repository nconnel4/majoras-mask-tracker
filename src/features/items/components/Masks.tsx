import * as React from "react";

import { SectionProps } from "../types";
import { Item } from "./Item";

export const Masks = React.memo(({ inventory }: SectionProps) => {
  return (
    <div className="masks">
      <Item id="maskPostmanHat" active={inventory.maskPostmanHat} />
      <Item id="maskAllNight" active={inventory.maskAllNight} />
      <Item id="maskBlast" active={inventory.maskBlast} />
      <Item id="maskStone" active={inventory.maskStone} />
      <Item id="maskGreatFairy" active={inventory.maskGreatFairy} />
      <Item id="maskDeku" active={inventory.maskDeku} />
      <Item id="maskKeaton" active={inventory.maskKeaton} />
      <Item id="maskBremen" active={inventory.maskBremen} />
      <Item id="maskBunnyHood" active={inventory.maskBunnyHood} />
      <Item id="maskDonGero" active={inventory.maskDonGero} />
      <Item id="maskScents" active={inventory.maskScents} />
      <Item id="maskGoron" active={inventory.maskGoron} />
      <Item id="maskRomani" active={inventory.maskRomani} />
      <Item id="maskCircusLeader" active={inventory.maskCircusLeader} />
      <Item id="maskKafei" active={inventory.maskKafei} />
      <Item id="maskCouples" active={inventory.maskCouples} />
      <Item id="maskTruth" active={inventory.maskTruth} />
      <Item id="maskZora" active={inventory.maskZora} />
      <Item id="maskKamaro" active={inventory.maskKamaro} />
      <Item id="maskGibdo" active={inventory.maskGibdo} />
      <Item id="maskGaro" active={inventory.maskGaro} />
      <Item id="maskCaptainHat" active={inventory.maskCaptainHat} />
      <Item id="maskGiant" active={inventory.maskGiant} />
      <Item id="maskFierceDeity" active={inventory.maskFierceDeity} />
    </div>
  );
});
