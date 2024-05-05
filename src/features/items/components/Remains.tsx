import { SectionProps } from "../types";
import { Item } from "./Item";

export const Remains = ({ inventory }: SectionProps) => {
  return (
    <div className="remains">
      <Item id="remainsOdolwa" active={inventory.remainsOdolwa} />
      <Item id="remainsGoht" active={inventory.remainsGoht} />
      <Item id="remainsGyorg" active={inventory.remainsGyorg} />
      <Item id="remainsTwinmold" active={inventory.remainsTwinmold} />
    </div>
  );
};
