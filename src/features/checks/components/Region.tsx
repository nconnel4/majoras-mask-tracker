import { Region as RegionType } from "@/features/checks/types";

type RegionProps = {
  region: RegionType;
};

export const Region = ({ region }: RegionProps) => {
  return (
    <div className="region" id={region.id}>
      {region.name}
    </div>
  );
};
