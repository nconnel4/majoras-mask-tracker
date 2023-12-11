import { Dispatch, SetStateAction } from "react";

import { regions } from "@/features/checks";

import { Marker } from "../components/Marker";

type MapProps = {
  setRegion: Dispatch<SetStateAction<string>>;
  completeChecks: string[];
};

export const Map = ({ setRegion, completeChecks }: MapProps) => {
  return (
    <div className={"map"}>
      <img src={"/overworld.png"} alt={"terminaMap"} />
      {regions.map((region) => (
        <Marker
          key={region.id}
          id={region.id}
          setRegion={setRegion}
          completeChecks={completeChecks}
        />
      ))}
    </div>
  );
};
