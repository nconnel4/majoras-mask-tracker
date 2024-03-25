import { FoolishLocations } from "./FoolishLocations.tsx";
import { WothLocations } from "./WothLocations.tsx";

export const Hints = () => {
  return (
    <>
      <div className="hints">
        <WothLocations />
        <FoolishLocations />
      </div>
    </>
  );
};
