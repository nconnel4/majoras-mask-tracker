import { RegionSelect } from "./RegionSelect";

export const WothLocations = () => {
  return (
    <>
      <h3 className="hint">WOTH</h3>
      <ol>
        <li>
          <RegionSelect name="woth1" />
        </li>
        <li>
          <RegionSelect name="woth2" />
        </li>
        <li>
          <RegionSelect name="woth3" />
        </li>
      </ol>
    </>
  );
};
