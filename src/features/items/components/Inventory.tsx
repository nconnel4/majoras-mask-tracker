import { Items } from "./Items";
import { Masks } from "./Masks.tsx";
import { Songs } from "./Songs.tsx";

export const Inventory = () => {
  return (
    <div className="inventory">
      <Items />
      <Masks />
      <Songs />
    </div>
  );
};
