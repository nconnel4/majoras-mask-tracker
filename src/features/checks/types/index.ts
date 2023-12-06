export type Region = {
  id: string;
  name: string;
};

export type Check = {
  id: string;
  name: string;
  requirements: string[][];
  peekRequirements?: string[][];
};

export type PlayerCheck = Check & {
  isComplete: boolean;
  isActive: boolean;
  canPeek: boolean;
};

export type RegionChecks = {
  [key: string]: string[];
};
