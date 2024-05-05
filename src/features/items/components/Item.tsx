import { clsx } from "clsx";
import * as React from "react";

import { InventoryDispatchContext } from "@/features/inventory";

import { items } from "../data/items";
import type { Items } from "../types";

type ItemProps = {
  id: keyof Items;
  className?: string;
  active?: boolean;
};

export const Item = React.memo(
  ({ id, className, active = false }: ItemProps) => {
    const item = items[id];
    const dispatch = React.useContext(InventoryDispatchContext);

    if (item) {
      return (
        <div
          className={clsx("item", { "in-inventory": active }, className)}
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
  },
);
