import { Dispatch, SetStateAction } from "react";

import { regions } from "@/features/checks";

import { Marker } from "../components/Marker";

type MapProps = {
  setRegion: Dispatch<SetStateAction<string>>;
};

export const Map = ({ setRegion }: MapProps) => {
  return (
    <div className={"map"}>
      {regions.map((region) => (
        <Marker key={region.id} id={region.id} setRegion={setRegion} />
      ))}
    </div>
  );
};
