import { items } from "@/features/items";

type ItemSelectProps = {
  name: string;
};

export const ItemSelect = ({ name }: ItemSelectProps) => {
  return (
    <select name={name}>
      <option>-</option>
      <option>dead</option>
      {items
        .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
        .map((item) => {
          return <option value={item.id}>{item.name}</option>;
        })}
    </select>
  );
};
