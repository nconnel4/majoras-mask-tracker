import { clsx } from "clsx";

import { items } from "../data/items";

type ItemProps = {
  id: string;
  active?: boolean;
};

export const Item = ({ id, active = false }: ItemProps) => {
  const item = items.find((item) => item.id === id);

  if (item) {
    return (
      <div className={clsx("item", { active })}>
        <img src={item.image} alt={item.name} />
      </div>
    );
  }

  return null;
};
