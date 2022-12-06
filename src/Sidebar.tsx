import { ChangeEvent, useState } from "react";

import styles from "./Sidebar.module.css";

interface SidebarProps {
  setDamageInfo: Function;
}

export function Sidebar({ setDamageInfo }: SidebarProps) {
  const [diceAmmount, setDiceAmmount] = useState("2");
  const [weaponDamage, setWeaponDamage] = useState("10");
  const [crit, setCrit] = useState("2");
  const [threat, setThreat] = useState("20");

  const [specialAttack, setSpecialAttack] = useState("");
  const [destroyPrey, setDestroyPrey] = useState("");
  const [heavyStrike, setHeavyStrike] = useState("");
  const [atrociusWeapon, setAtrociousWepaon] = useState("");

  const [executePrey, setExecutePrey] = useState("");
  const [usedExecutePrey, setUsedExecutePrey] = useState("");
  const [threatExecute, setThreatExecute] = useState("0");
  const [slaughtTurn, setSlaughtTurn] = useState("0");
  const [slaughtUsedTurn, setSlaughtUsedTurn] = useState("0");

  function handleDiceAmmount(event: ChangeEvent<HTMLInputElement>) {
    setDiceAmmount(event.target.value);
  }
  function handleWeaponDamaget(event: ChangeEvent<HTMLInputElement>) {
    setWeaponDamage(event.target.value);
  }
  function handleCrit(event: ChangeEvent<HTMLInputElement>) {
    setCrit(event.target.value);
  }
  function handleThreat(event: ChangeEvent<HTMLInputElement>) {
    setThreat(event.target.value);
  }
  function handleSpecialAttack(event: ChangeEvent<HTMLSelectElement>) {
    setSpecialAttack(event.target.value);
  }
  function handleDestroyPrey(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setDestroyPrey("checked");
    } else {
      setDestroyPrey("");
    }
  }
  function handleHeavyStrike(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setHeavyStrike("checked");
    } else {
      setHeavyStrike("");
    }
  }
  function handleAtrociousWepaon(event: ChangeEvent<HTMLSelectElement>) {
    setAtrociousWepaon(event.target.value);
  }
  function handleUsedExecutePrey(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setUsedExecutePrey("checked");
    } else {
      setUsedExecutePrey("");
    }
  }
  function handlesetExecutePrey(event: ChangeEvent<HTMLSelectElement>) {
    setExecutePrey(event.target.value);
  }
  function handleThreatExecute(event: ChangeEvent<HTMLInputElement>) {
    setThreatExecute(event.target.value);
  }
  function handleSlaughtTurn(event: ChangeEvent<HTMLInputElement>) {
    setSlaughtTurn(event.target.value);
  }
  function handleSlaughtUsedTurn(event: ChangeEvent<HTMLInputElement>) {
    setSlaughtUsedTurn(event.target.value);
  }

  function handleCalculateInfo() {
    event?.preventDefault();

    let totalPE = 0;

    let totalDiceAmmount = Number(diceAmmount) + 1;
    let totalCrit = Number(crit);
    let totalThreat = Number(threat);
    let totalBonusDamage = 0;

    let diceType = weaponDamage;

    //ATAQUE PODEROSO
    if (specialAttack == "5") {
      totalBonusDamage = totalBonusDamage + 5;
      totalPE = totalPE + 2;
    }

    if (specialAttack == "10") {
      totalBonusDamage = totalBonusDamage + 10;
      totalPE = totalPE + 3;
    }
    if (specialAttack == "15") {
      totalBonusDamage = totalBonusDamage + 15;
      totalPE = totalPE + 4;
    }

    //GOLPE PESADO
    if (heavyStrike == "checked") {
      totalDiceAmmount = totalDiceAmmount + 1;
    }

    //DESTRUIR PRESA
    if (destroyPrey == "checked") {
      totalDiceAmmount = totalDiceAmmount + 1;
      totalPE = totalPE + 2;
    }

    //ARMA ATROZ
    if (atrociusWeapon == "standard") {
      totalThreat = totalThreat - 1;
    }
    if (atrociusWeapon == "trueForm") {
      totalCrit = totalCrit + 2;
      totalThreat = totalThreat - 2;
    }

    // EXECUTAR PRESA

    if (executePrey == "first") {
      totalCrit = totalCrit + 1;
      totalPE = totalPE + 2;
      totalThreat = totalThreat - 2;
    }
    if (executePrey == "following") {
      totalPE = totalPE + 2;
      totalThreat = totalThreat - 2;
    }

    if (usedExecutePrey == "checked") {
      totalCrit = totalCrit + 1;
    }

    // AMEAÇA ADICIONAL EXECUTAR PRESA
    if (Number(threatExecute) >= 1) {
      let additionalThreatPE = Number(threatExecute) + 3;
      totalThreat = totalThreat - Number(threatExecute);
      totalPE = totalPE + additionalThreatPE;
    }

    //MASSACRAR PRESA
    let actualSlaughtTurn = Number(slaughtTurn);
    let SlaughtPE = 0;

    if (actualSlaughtTurn == 1) {
      SlaughtPE = 2;
      totalCrit = totalCrit + 1;
    }
    if (actualSlaughtTurn > 1) {
      SlaughtPE = actualSlaughtTurn * 2 + 2;
      totalCrit = totalCrit + 1;
    }

    totalCrit = totalCrit + Number(slaughtUsedTurn);
    totalPE = totalPE + SlaughtPE;

    const damageInfo = {
      totalDiceAmmount,
      totalPE,
      totalCrit,
      totalThreat,
      totalBonusDamage,
      diceType,
    };
    setDamageInfo(damageInfo);
  }

  return (
    <div className={styles.sidebarWrapper}>
    
      <div>
        <aside className={styles.aside}>
          <div className={styles.title}>Caçador</div>
          <form onSubmit={handleCalculateInfo}>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}>Dano base da arma:</div>
              <input
                className={styles.diceInput}
                name="diceAmmount"
                type="number"
                onChange={handleDiceAmmount}
                value={diceAmmount}
              />
              D
              <input
                className={styles.diceInput}
                name="weaponDamage"
                type="text"
                onChange={handleWeaponDamaget}
                value={weaponDamage}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}> Crit base da arma: </div>
              <input
                className={styles.longInput}
                name="crit"
                type="text"
                onChange={handleCrit}
                value={crit}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}> Ameaça base: </div>
              <input
                className={styles.longInput}
                name="threat"
                type="text"
                onChange={handleThreat}
                value={threat}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}> Ataque Poderoso: </div>

              <select
                name="specialAttack"
                id=""
                className={styles.longInput}
                onChange={handleSpecialAttack}
              >
                <option value="">Não</option>
                <option value="5">+5</option>
                <option value="10">+10</option>
                <option value="15">+15</option>
              </select>
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}> Desturir Presa: </div>

              <input
                type="Checkbox"
                name="destroyPrey"
                onChange={handleDestroyPrey}
                value={destroyPrey}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}> Golpe Pesado: </div>
              <input
                type="Checkbox"
                name="heavyStrike"
                onChange={handleHeavyStrike}
                value={heavyStrike}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}> Arma Atroz: </div>
              <select
                className={styles.longInput}
                name="atrociusWeapon"
                onChange={handleAtrociousWepaon}
                value={atrociusWeapon}
              >
                <option value="no">Não </option>
                <option value="standard">Padrão</option>
                <option value="trueForm">Verdadeiro</option>
              </select>
            </div>

            <div className={styles.inputLine}>
              <div className={styles.labelInput}> Executar Presa: </div>

              <select
                className={styles.longInput}
                onChange={handlesetExecutePrey}
              >
                <option value="no">Não</option>
                <option value="first">Primeiro</option>
                <option value="following">Sequencia</option>
              </select>
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}>
                Já utilizou Executar Presa?
              </div>

              <input
                type="Checkbox"
                name="heavyStrike"
                onChange={handleUsedExecutePrey}
                value={usedExecutePrey}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}>
                Reduzir ameaça além de 2 em:
              </div>
              <input
                className={styles.longInput}
                name="threatExecute"
                type="number"
                onChange={handleThreatExecute}
                value={threatExecute}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}>
                Rodada utilizando massacrar:
              </div>
              <input
                className={styles.longInput}
                name="slaughtTurn"
                type="number"
                onChange={handleSlaughtTurn}
                value={slaughtTurn}
              />
            </div>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}>Bonus atual Massacrar:</div>
              <input
                className={styles.longInput}
                name="slaughtUsedTurn"
                type="number"
                onChange={handleSlaughtUsedTurn}
                value={slaughtUsedTurn}
              />
            </div>
            <button type="submit"> Calcular</button>
          </form>
        </aside>
      </div>
    </div>
  );
}
