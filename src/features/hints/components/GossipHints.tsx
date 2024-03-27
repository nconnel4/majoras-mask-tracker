import { ItemSelect } from "./ItemSelect";

export const GossipHints = () => {
  return (
    <>
      <div className="hint gossip-hints">
        <div className="always-hints">
          <h3>Always Hints</h3>
          <ul>
            <li>
              <div className="item-hint">
                <span>Gorman</span>
                <ItemSelect name="gorman" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Gossip Stones
                <ItemSelect name="gossipStones" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Mirror Shield
                <ItemSelect name="mirrorShieldChest" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Ocean Spider House
                <ItemSelect name="oceanSpiderHouse" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Ranch Defense
                <ItemSelect name="ranchAliens" />
                <ItemSelect name="ranchCremia" />
              </div>
            </li>
          </ul>
        </div>
        <div className="sometimes-hints">
          <h3>Sometimes Hints</h3>
          <ul>
            <li>
              <div className="item-hint">
                Bank 2
                <ItemSelect name="bank2" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Curiosity Man 2
                <ItemSelect name="curiosityMan2" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Dog Race
                <ItemSelect name="dogRace" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Grog
                <ItemSelect name="grog" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Madame Aroma
                <ItemSelect name="madameAromaLTM" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Midnight Meeting
                <ItemSelect name="midnightMeeting" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Pamela
                <ItemSelect name="pamela" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Shiro
                <ItemSelect name="shiro" />
              </div>
            </li>
            <li>
              <div className="item-hint">
                Swamp Archery
                <ItemSelect name="swampArchery" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
