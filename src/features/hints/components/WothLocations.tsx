import { RegionSelect } from "./RegionSelect";

export const WothLocations = () => {
  return (
    <>
      <div className="hint">
        <h3 className="hint-header">WOTH</h3>
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
      </div>
    </>
  );
};
