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
