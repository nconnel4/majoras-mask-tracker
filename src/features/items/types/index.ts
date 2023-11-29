export type Item = {
  id: string;
  name: string;
  type: "song" | "item" | "mask" | "remain";
  image: string;
  quantity?: number;
};
