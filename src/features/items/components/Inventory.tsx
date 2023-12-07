import { Items } from "./Items";
import { Masks } from "./Masks.tsx";

export const Inventory = () => {
  return (
    <div className="inventory">
      <Items />
      <Masks />
    </div>
  );
};
