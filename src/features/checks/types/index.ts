export type Region = {
  id: string;
  name: string;
};

export type Check = {
  id: string;
  name: string;
  regions: string[];
  requirements: string[][];
  peekRequirements?: string[][];
};

export type PlayerCheck = Check & {
  isComplete: boolean;
  isActive: boolean;
  canPeek: boolean;
};
