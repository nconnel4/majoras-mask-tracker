import { clsx } from "clsx";
import * as React from "react";

import {
  InventoryContext,
  InventoryDispatchContext,
  Items,
} from "@/features/inventory";

import { items } from "../data/items";

type ItemProps = {
  id: keyof Items;
  className?: string;
};

export const Item = ({ id, className }: ItemProps) => {
  const item = items.find((item) => item.id === id);
  const dispatch = React.useContext(InventoryDispatchContext);
  const inventory = React.useContext(InventoryContext);

  if (item) {
    return (
      <div
        className={clsx("item", { "in-inventory": inventory[id] }, className)}
        onClick={() =>
          dispatch ? dispatch({ type: "toggle", payload: id }) : undefined
        }
      >
        <img src={item.image} alt={item.name} />
        {item.quantity && inventory[id] ? (
          <p className="item-quantity">{item.quantity}</p>
        ) : null}
      </div>
    );
  }

  return null;
};
