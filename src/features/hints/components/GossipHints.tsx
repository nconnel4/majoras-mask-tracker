import { DeadHint } from "./DeadHint";
import { ItemSelect } from "./ItemSelect";

export const GossipHints = () => {
  return (
    <>
      <div className="hint gossip-hints always-hints">
        <h3>Always Hints</h3>
        <ul>
          <li>
            <div className="item-hint">
              <span>Gorman</span>
              <ItemSelect name="gorman" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Gossip Stones
              <ItemSelect name="gossipStones" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Mirror Shield
              <ItemSelect name="mirrorShieldChest" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Ocean Spider House
              <ItemSelect name="oceanSpiderHouse" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Ranch Defense
              <ItemSelect name="ranchAliens" />
              <DeadHint />
              <ItemSelect name="ranchCremia" />
              <DeadHint />
            </div>
          </li>
        </ul>
      </div>
      <div className="hint gossip-hints sometimes-hints">
        <h3>Sometimes Hints</h3>
        <ul>
          <li>
            <div className="item-hint">
              Bank 2
              <ItemSelect name="bank2" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Dog Race
              <ItemSelect name="dogRace" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Grog
              <ItemSelect name="grog" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Madame Aroma
              <ItemSelect name="madameAromaLTM" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Midnight Meeting
              <ItemSelect name="midnightMeeting" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Pamela
              <ItemSelect name="pamela" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Shiro
              <ItemSelect name="shiro" />
              <DeadHint />
            </div>
          </li>
          <li>
            <div className="item-hint">
              Swamp Archery
              <ItemSelect name="swampArchery" />
              <DeadHint />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
