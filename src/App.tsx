import "./global.css";
import styles from "./App.module.css";

import { Calculator } from "./Calculator";
import { MainContent } from "./MainContent";
import { useState } from "react";

function App() {
  const [damageInfo, setDamageInfo] = useState({
    totalPE: 0,
    totalThreat: 0,
    totalDiceAmmount: 0,
    diceType: 0,
    totalCrit: 0,
    totalBonusDamage: 0,
  });

  return (
    <div className={styles.wrapperMob}>
      <Calculator setDamageInfo={setDamageInfo} />
      <div className={styles.wrapper}>
        <MainContent damageInfo={damageInfo} />
      </div>
    </div>
  );
}

export default App;
