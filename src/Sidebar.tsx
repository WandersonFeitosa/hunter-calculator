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

  const [destroyPrey, setDestroyPrey] = useState("");
  const [heavyStrike, setHeavyStrike] = useState("");
  const [atrociusWeapon, setAtrociousWepaon] = useState("");

  const [executePrey, setExecutePrey] = useState("");
  const [usedExecutePrey, setUsedExecutePrey] = useState("");
  const [threatExecute, setThreatExecute] = useState("0");
  const [threatExecuteDisabled, setThreatExecuteDisabled] = useState(true);

  const [slaughtPrey, setSlaughtPrey] = useState("0");

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
  function handlesetExecutePrey(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setExecutePrey("checked");
      setThreatExecuteDisabled(false);
    } else {
      setExecutePrey("");
      setThreatExecuteDisabled(true);
      setThreatExecute("0");
    }
  }
  function handleThreatExecute(event: ChangeEvent<HTMLSelectElement>) {
    setThreatExecute(event.target.value);
  }
  function handleSlaughtPrey(event: ChangeEvent<HTMLSelectElement>) {
    setSlaughtPrey(event.target.value);
  }

  function handleCalculateInfo() {
    event?.preventDefault();

    let totalPE = 0;

    let totalDiceAmmount = Number(diceAmmount) + 1;
    let totalCrit = Number(crit);
    let totalThreat = Number(threat);
    let totalBonusDamage = 0;

    let diceType = weaponDamage;

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

    if (executePrey == "checked") {
      if (usedExecutePrey == "checked") {
        totalPE = totalPE + 2;
        totalThreat = totalThreat - 2;
      } else {
        totalCrit = totalCrit + 1;
        totalPE = totalPE + 2;
        totalThreat = totalThreat - 2;
      }
    }

    if (usedExecutePrey == "checked") {
      totalCrit = totalCrit + 1;
    }

    // AMEAÇA ADICIONAL EXECUTAR PRESA

    if (Number(threatExecute) == 1) {
      totalThreat = totalThreat - 1;
      totalPE = totalPE + 3;
    }
    if (Number(threatExecute) == 2) {
      totalThreat = totalThreat - 2;
      totalPE = totalPE + 5;
    }
    if (Number(threatExecute) == 3) {
      totalThreat = totalThreat - 2;
      totalPE = totalPE + 10;
    }

    // MASSACRAR PRESA

    if (Number(slaughtPrey) == 1) {
      totalCrit = totalCrit + 1;
      totalPE = totalPE + 2;
    }
    if (Number(slaughtPrey) == 2) {
      totalCrit = totalCrit + 2;
      totalPE = totalPE + 6;
    }
    if (Number(slaughtPrey) == 3) {
      totalCrit = totalCrit + 3;
      totalPE = totalPE + 12;
    }
    if (Number(slaughtPrey) == 4) {
      totalCrit = totalCrit + 4;
      totalPE = totalPE + 20;
    }
    const damageInfo = {
      totalDiceAmmount,
      totalPE,
      totalCrit,
      totalThreat,
      totalBonusDamage,
      diceType,
    };
    console.log(totalPE);
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
              <div className={styles.labelInput}> Desturir Presa: </div>

              <input
                type="Checkbox"
                name="destroyPrey"
                onChange={handleDestroyPrey}
                value={destroyPrey}
              />
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
              <div className={styles.labelInput}> Executar Presa: </div>
              <input
                type="Checkbox"
                name="heavyStrike"
                onChange={handlesetExecutePrey}
                value={executePrey}
              />
            </div>

            <div className={styles.inputLine}>
              <div className={styles.labelInput}>
                Reduzir ameaça além de 2 em:
              </div>

              <select
                className={styles.longInput}
                name="threatExecute"
                onChange={handleThreatExecute}
                value={threatExecute}
                disabled={threatExecuteDisabled}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div className={styles.inputLine}>
              <div className={styles.labelInput}>Massacrar Presa:</div>

              <select
                className={styles.longInput}
                name="threatExecute"
                onChange={handleSlaughtPrey}
                value={slaughtPrey}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <button type="submit"> Calcular</button>
          </form>
        </aside>
      </div>
    </div>
  );
}
