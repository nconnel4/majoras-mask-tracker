// import * as React from "react";
//
// import { checks } from "../data/checks";
// import { Checks } from "../types";
//
// export type PlayerCheckAction = {
//   type: "updateCheck" | "toggleComplete" | "addCheck";
//   payload: keyof typeof checks;
// };
//
// export const CheckContext = React.createContext<Checks>(checks);
// export const CheckDispatchContext =
//   React.createContext<React.Dispatch<PlayerCheckAction> | null>(null);
//
// type CheckProviderProps = {
//   children: React.ReactNode;
//   initialChecks?: (keyof Checks)[];
// };
//
// export const CheckProvider = ({
//   children,
//   initialChecks = [],
// }: CheckProviderProps) => {
//   // const enableChecks = Object.keys(checks)
//   //   .filter((key) => initialChecks?.includes(key as keyof Checks))
//   //   .reduce((obj: Checks, key) => {
//   //     obj[key as keyof Checks] = checks[key as keyof Checks];
//   //     return obj;
//   //   }, {});
//
//   const [avaiableChecks, dispatch] = React.useReducer(
//     checkReducer,
//     initialChecks,
//   );
//
//   return (
//     <CheckContext.Provider value={avaiableChecks}>
//       <CheckDispatchContext.Provider value={dispatch}>
//         {children}
//       </CheckDispatchContext.Provider>
//     </CheckContext.Provider>
//   );
// };
//
// const checkReducer = (checks: Checks, action: PlayerCheckAction): Checks => {
//   switch (action.type) {
//     // case "updateCheck": {
//     //   return checks.map((check) => {
//     //     if (check.id === action.payload.id) {
//     //       return action.payload;
//     //     } else {
//     //       return check;
//     //     }
//     //   });
//     // }
//     case "toggleComplete": {
//       const check = checks[action.payload];
//       const isComplete = check?.isComplete;
//
//       if (isComplete !== undefined) {
//         const completedChecks: Checks = {
//           ...checks,
//           [action.payload]: {
//             ...[action.payload],
//             isComplete: !isComplete,
//           },
//         };
//
//         if (check?.linkedChecks) {
//           check?.linkedChecks.reduce((obj, key) => {
//             console.log(key);
//             return {
//               ...obj,
//               [key]: {
//                 ...[key],
//                 isComplete: !isComplete,
//               },
//             };
//           }, completedChecks);
//         }
//
//         return completedChecks;
//       }
//
//       return checks;
//     }
//     default:
//       return checks;
//   }
// };
