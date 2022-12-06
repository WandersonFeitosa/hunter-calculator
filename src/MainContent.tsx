import { useState } from "react";
import { DamageInfo } from "./InterfaceTypes";

import styles from "./MainContent.module.css";

interface MainContentProps {
  damageInfo: DamageInfo;
}

export function MainContent({ damageInfo }: MainContentProps) {
  const critDices = damageInfo.totalDiceAmmount * damageInfo.totalCrit;
  return (
    <main>
      <div className={styles.block}>
        <div className={styles.blockTitle}> Informações</div>
        <div>PE: {damageInfo.totalPE}</div> <br />
        <div>Ameaça: {damageInfo.totalThreat}</div>
        <br />
        <div>
          Dados: {damageInfo.totalDiceAmmount}d{damageInfo.diceType}
        </div>
        <br />
        <div>Dados crit: {critDices}d{damageInfo.diceType} </div>
        <br />
        <div>Multiplicador de Crit: {damageInfo.totalCrit}</div>
      </div>
    </main>
  );
}
