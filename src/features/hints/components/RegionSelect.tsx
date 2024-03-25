import { regions } from "@/features/checks";

type RegionSelectProps = {
  name: string;
};

export const RegionSelect = ({ name }: RegionSelectProps) => {
  return (
    <select name={name}>
      <option>-</option>
      {regions
        .sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
        .map((region) => {
          return <option value={region.id}>{region.name}</option>;
        })}
    </select>
  );
};
