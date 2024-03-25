import { RegionSelect } from "@/features/hints/components/RegionSelect.tsx";

export const FoolishLocations = () => {
  return (
    <>
      <h3 className="hint">Foolish</h3>
      <ol>
        <li>
          <RegionSelect name="foolish1" />
        </li>
        <li>
          <RegionSelect name="foolish2" />
        </li>
        <li>
          <RegionSelect name="foolish3" />
        </li>
      </ol>
    </>
  );
};
