import { Items, items } from "@/features/items";

type ItemSelectProps = {
  name: string;
};

export const ItemSelect = ({ name }: ItemSelectProps) => {
  return (
    <select name={name}>
      <option>-</option>
      {Object.keys(items)
        .sort((a: string, b: string) =>
          items[a as keyof Items].name < items[b as keyof Items].name
            ? -1
            : items[a as keyof Items].name > items[b as keyof Items].name
              ? 1
              : 0,
        )
        .map((id: string) => {
          return (
            <option value={id} key={id}>
              {items[id as keyof Items].name}
            </option>
          );
        })}
    </select>
  );
};
