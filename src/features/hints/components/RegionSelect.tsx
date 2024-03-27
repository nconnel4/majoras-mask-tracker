import { regions } from "@/features/checks";

type RegionSelectProps = {
  name: string;
};

export const RegionSelect = ({ name }: RegionSelectProps) => {
  const regionsCopy = regions.slice();

  return (
    <select name={name}>
      <option>-</option>
      {regionsCopy
        .sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        })
        .map((region) => {
          return <option value={region.id}>{region.name}</option>;
        })}
    </select>
  );
};
