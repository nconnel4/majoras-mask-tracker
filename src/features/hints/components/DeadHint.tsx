import { clsx } from "clsx";
import * as React from "react";
import { GiCrossMark } from "react-icons/gi";

export const DeadHint = () => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <div
      className={clsx("dead-hint", { "dead-hint-checked": active })}
      onClick={() => setActive(!active)}
    >
      <GiCrossMark />
    </div>
  );
};
