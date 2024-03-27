import { FoolishLocations } from "./FoolishLocations";
import { GossipHints } from "./GossipHints";
import { WothLocations } from "./WothLocations";

export const Hints = () => {
  return (
    <>
      <div className="hints">
        <WothLocations />
        <FoolishLocations />
        <GossipHints />
      </div>
    </>
  );
};
