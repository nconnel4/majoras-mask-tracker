import * as React from "react";

import { PlayerCheck } from "../types";

export type PlayerCheckAction = {
  type: "updateCheck" | "toggleComplete" | "addCheck";
  payload: PlayerCheck;
};

export const CheckContext = React.createContext<PlayerCheck[]>([]);
export const CheckDispatchContext =
  React.createContext<React.Dispatch<PlayerCheckAction> | null>(null);

type CheckProviderProps = {
  children: React.ReactNode;
  initialChecks?: PlayerCheck[];
};

export const CheckProvider = ({
  children,
  initialChecks = [],
}: CheckProviderProps) => {
  const [checks, dispatch] = React.useReducer(checkReducer, initialChecks);

  return (
    <CheckContext.Provider value={checks}>
      <CheckDispatchContext.Provider value={dispatch}>
        {children}
      </CheckDispatchContext.Provider>
    </CheckContext.Provider>
  );
};

const checkReducer = (
  checks: PlayerCheck[],
  action: PlayerCheckAction,
): PlayerCheck[] => {
  switch (action.type) {
    case "addCheck": {
      if (checks.find((check) => check.id === action.payload.id)) {
        return checks;
      }

      return [
        ...checks,
        {
          ...action.payload,
          isComplete: false,
          isActive: false,
          canPeek: false,
        },
      ];
    }
    case "updateCheck": {
      return checks.map((check) => {
        if (check.id === action.payload.id) {
          return action.payload;
        } else {
          return check;
        }
      });
    }
    case "toggleComplete": {
      return checks.map((check) => {
        if (check.id === action.payload.id) {
          return { ...check, isComplete: !check.isComplete };
        } else {
          return check;
        }
      });
    }
    default:
      return checks;
  }
};
