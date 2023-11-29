import { clsx } from "clsx";
import * as React from "react";

import { InventoryDispatchContext } from "@/features/inventory";

import { items } from "../data/items";

type ItemProps = {
  id: string;
  active?: boolean;
};

export const Item = ({ id, active = false }: ItemProps) => {
  const item = items.find((item) => item.id === id);
  const dispatch = React.useContext(InventoryDispatchContext);

  if (item) {
    return (
      <div
        className={clsx("item", { active })}
        onClick={() =>
          dispatch ? dispatch({ type: "toggle", payload: id }) : undefined
        }
      >
        <img src={item.image} alt={item.name} />
        {item.quantity && active ? (
          <p className="item-quantity">{item.quantity}</p>
        ) : null}
      </div>
    );
  }

  return null;
};
