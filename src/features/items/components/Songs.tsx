import { Item } from "../components/Item";
import { SectionProps } from "../types";

export const Songs = ({ inventory }: SectionProps) => {
  return (
    <div className={"songs"}>
      <Item id={"songTime"} active={inventory.songTime} />
      <Item id={"songHealing"} active={inventory.songHealing} />
      <Item id={"songEpona"} active={inventory.songEpona} />
      <Item id={"songSoaring"} active={inventory.songSoaring} />
      <Item id={"songStorms"} active={inventory.songStorms} />
      <Item id={"songSonata"} active={inventory.songSonata} />
      <Item id={"songLullaby"} active={inventory.songLullaby} />
      <Item id={"songNewWave"} active={inventory.songNewWave} />
      <Item id={"songElegy"} active={inventory.songElegy} />
      <Item id={"songOath"} active={inventory.songOath} />
    </div>
  );
};
