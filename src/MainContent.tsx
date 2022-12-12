import { DamageInfo } from "./InterfaceTypes";
import raegen from "./assets/img/raegen.png";

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
        <div>
          <b> PE:</b> {damageInfo.totalPE}
        </div>{" "}
        <br />
        <div>
          <b>Ameaça:</b> {damageInfo.totalThreat}
        </div>
        <br />
        <div>
          <b>Dados:</b> {damageInfo.totalDiceAmmount}d{damageInfo.diceType}
        </div>
        <br />
        <div>
          <b> Dados crit:</b> {critDices}d{damageInfo.diceType}{" "}
        </div>
        <br />
        <div>
          <b>Multiplicador de Crit:</b> {damageInfo.totalCrit}
        </div>
        <img className={styles.raegen} src={raegen} alt="" />
      </div>
      <div className={styles.block}>
        <div className={styles.blockTitle}> Descrição das opções</div>
        <div>
          <p>
            O Cálculo é sempre considerando que o alvo está afetado por Marca da Presa
          </p>
          <p>
            <b>Destruir Presa:</b> Marque caso tenha marcado o alvo com Destruir
            Presa
          </p>
          <p>
            <b>Executar Presa:</b> Diminui a margem de ameaça do ataque
          </p>
          <p>
            <b>Masscrar Presa:</b> Aumenta o multiplicador de crítico do ataque
          </p>
        </div>
      </div>
    </main>
  );
}
