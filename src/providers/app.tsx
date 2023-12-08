import * as React from "react";

import { CheckProvider } from "@/features/checks";
import { InventoryProvider } from "@/features/inventory";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <CheckProvider>
      <InventoryProvider
        initialItems={[
          "ocarina",
          "sword",
          "shield",
          "songEpona",
          "songTime",
          "songSoaring",
          "dekuStick",
          "dekuNut",
        ]}
      >
        {children}
      </InventoryProvider>
    </CheckProvider>
  );
};
