import { Dispatch, MouseEvent, SetStateAction } from "react";

import { Region } from "../components/Region";
import { regions } from "../data/regions";

type RegionProps = {
  setRegion: Dispatch<SetStateAction<string>>;
};

export const Regions = ({ setRegion }: RegionProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setRegion(e.currentTarget.id);
  };

  return (
    <div className="check-list">
      {regions.map((region) => (
        <button id={region.id} onClick={handleClick} className="btn">
          <Region region={region} />
        </button>
      ))}
    </div>
  );
};
