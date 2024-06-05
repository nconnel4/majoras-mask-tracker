import { RegionSelect } from "../components/RegionSelect.tsx";

export const FoolishLocations = () => {
  return (
    <>
      <div className="hint hint-foolish">
        <h3>Foolish</h3>
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
      </div>
    </>
  );
};
