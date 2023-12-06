import _ from "lodash";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as React from "react";

import { CheckContext, CheckDispatchContext } from "@/features/checks";
import { evaluateCheck } from "@/features/checks/utils/evaluateChecks.ts";
import { InventoryContext } from "@/features/inventory";

import { Check } from "../components/Check";
import { regionChecks as regionCheckList } from "../data/regions";
import { PlayerCheck } from "../types";

type RegionChecksProps = {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
};

export const RegionChecks = ({ region, setRegion }: RegionChecksProps) => {
  const [regionChecks, setRegionChecks] = useState<PlayerCheck[]>([]);
  const checks = React.useContext(CheckContext);
  const dispatch = React.useContext(CheckDispatchContext);
  const inventory = React.useContext(InventoryContext);

  useEffect(() => {
    for (let i = 0; i < checks.length; i++) {
      const newCheck = evaluateCheck(checks[i], inventory);
      if (!_.isEqual(newCheck, checks[i]) && dispatch) {
        dispatch({ type: "updateCheck", payload: newCheck });
      }
    }
  }, [region, inventory, checks, dispatch]);

  useEffect(() => {
    const checkList = regionCheckList[region];
    setRegionChecks(
      checkList.map((check) => {
        const lookup = checks.find((c) => c.id === check);
        if (lookup === undefined) {
          throw new TypeError(`${check} was not found in master check list.`);
        }

        return lookup;
      }),
    );
  }, [region, checks, dispatch]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const check = checks.find((check) => check.id === e.currentTarget.id);
    if (check && dispatch) {
      dispatch({ type: "toggleComplete", payload: check });
    }
  };

  return (
    <div className="check-list">
      <button key="reset" id="reset-btn" onClick={() => setRegion("")}>
        <div className="check">Return to Regions</div>{" "}
      </button>
      {regionChecks.map((check) => {
        return (
          <button key={check.id} id={check.id} onClick={handleClick}>
            <Check check={check} />
          </button>
        );
      })}
    </div>
  );
};
