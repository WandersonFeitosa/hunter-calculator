import { ChangeEvent, FocusEvent, useState } from "react";

import styles from "./Sidebar.module.css";

interface SidebarProps {
  setDamageInfo: Function;
}

export function Sidebar({ setDamageInfo }: SidebarProps) {
  const [nex, setNex] = useState("60");
  const [diceAmmount, setDiceAmmount] = useState("1");
  const [weaponDamage, setWeaponDamage] = useState("16");
  const [crit, setCrit] = useState("3");
  const [threat, setThreat] = useState("20");

  const [destroyPrey, setDestroyPrey] = useState("");
  const [disabledDestroyPrey, setDisabledDestroyPrey] = useState(false);
  const [checkedDestroyPrey, setCheckedDestroyPrey] = useState(false);

  const [heavyStrike, setHeavyStrike] = useState("");

  const [atrociusWeapon, setAtrociousWepaon] = useState("");

  const [threatExecute, setThreatExecute] = useState("0");

  const [slaughtPrey, setSlaughtPrey] = useState("0");

  function handleNex(event: ChangeEvent<HTMLInputElement>) {
    setNex(event.target.value);
  }
  function disableDestroyPrey() {
    setDestroyPrey("");
    setCheckedDestroyPrey(false);
    if (Number(nex) < 25) {
      setDisabledDestroyPrey(true);
    } else {
      setDisabledDestroyPrey(false);
    }
  }

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

  function handleDestroyPrey() {
    if (checkedDestroyPrey == true) {
      setCheckedDestroyPrey(false);
      setDestroyPrey("");
    } else {
      setCheckedDestroyPrey(true);
      setDestroyPrey("checked");
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
    let diceType = weaponDamage;

    function addPE(value: number) {
      totalPE = totalPE + value;
    }
    function addDice(value: number) {
      totalDiceAmmount = totalDiceAmmount + value;
    }
    function addCrit(value: number) {
      totalCrit = totalCrit + value;
    }
    function addThreat(value: number) {
      totalThreat = totalThreat - value;
    }

    //GOLPE PESADO
    if (heavyStrike == "checked") {
      addDice(1);
    }

    //DESTRUIR PRESA

    if (destroyPrey == "checked") {
      if (Number(nex) >= 25 && Number(nex) < 40) {
        addDice(1);
        console.log("aqui");
      }
      if (Number(nex) >= 40 && Number(nex) < 65) {
        addDice(2);
        console.log("aqui");
      }
      if (Number(nex) >= 65 && Number(nex) < 99) {
        addDice(3);
      }
      if (Number(nex) >= 99) {
        addDice(4);
      }
    }

    //ARMA ATROZ
    if (atrociusWeapon == "standard") {
      addThreat(1);
    }
    if (atrociusWeapon == "trueForm") {
      addCrit(2);
      addThreat(2);
    }

    // EXECUTAR PRESA

    if (Number(threatExecute) == 2) {
      addThreat(2);
      addPE(2);
    }
    if (Number(threatExecute) == 4) {
      addThreat(4);
      addPE(6);
    }
    if (Number(threatExecute) == 6) {
      addThreat(6);
      addPE(12);
    }
    if (Number(threatExecute) == 8) {
      addThreat(8);
      addPE(20);
    }

    // MASSACRAR PRESA

    if (Number(slaughtPrey) == 1) {
      addCrit(1);
      addPE(2);
    }
    if (Number(slaughtPrey) == 2) {
      addCrit(2);
      addPE(6);
    }
    if (Number(slaughtPrey) == 3) {
      addCrit(3);
      addPE(12);
    }
    if (Number(slaughtPrey) == 4) {
      addCrit(4);
      addPE(20);
    }

    const damageInfo = {
      totalDiceAmmount,
      totalPE,
      totalCrit,
      totalThreat,
      diceType,
    };

    setDamageInfo(damageInfo);
  }

  return (
    <div className={styles.sidebarWrapper}>
      <div>
        <aside className={styles.aside}>
          <div className={styles.title}>Calculadora</div>
          <form onSubmit={handleCalculateInfo}>
            <div className={styles.inputLine}>
              <div className={styles.labelInput}> NEX </div>
              <input
                className={styles.longInput}
                name="nex"
                type="text"
                onChange={handleNex}
                onBlur={disableDestroyPrey}
                value={nex}
              />
            </div>

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
                onClick={handleDestroyPrey}
                value={destroyPrey}
                checked={checkedDestroyPrey}
                disabled={disabledDestroyPrey}
              />
            </div>

            <div className={styles.inputLine}>
              <div className={styles.labelInput}>Executar Presa:</div>

              <select
                className={styles.longInput}
                name="threatExecute"
                onChange={handleThreatExecute}
                value={threatExecute}
              >
                <option value="0">0</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
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
