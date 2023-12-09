import { Items } from "./Items";
import { Masks } from "./Masks.tsx";
import { Remains } from "./Remains.tsx";
import { Songs } from "./Songs.tsx";

export const Inventory = () => {
  return (
    <div className="inventory">
      <Items />
      <Masks />
      <Songs />
      <Remains />
    </div>
  );
};
