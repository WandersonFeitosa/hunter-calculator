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
        <div>
          Dados crit: {critDices}d{damageInfo.diceType}{" "}
        </div>
        <br />
        <div>Multiplicador de Crit: {damageInfo.totalCrit}</div>
      </div>
      <div className={styles.block}>
        <div className={styles.blockTitle}> Sobre a Trilha</div>
        <div>
          <p>
            <b>NEX 10% - MARCA DA PRESA:</b> Você pode gastar uma ação de
            movimento e 1 PE para analisar um alvo em alcance curto, com um
            maximo de alvos marcados igual a 1+Int. Ao Marcar um alvo você
            escolhe uma das seguintes ações e ganha os beneficios
            correspondentes até o fim da cena ou até a criatura sair de seu
            alcance longo:
          </p>
          <p>
            <b> Matar: </b> Sua intenção é matar o alvo de sua marca. Você
            recebe +1D nas rolagens de dano contra ele e pode fazer um teste de
            tatica {"("}DT INT do alvo ou 20 para criaturas, assim que ativa a
            habilidade{")"} para receber +1D e +2 em testes de percepção e
            reflexos contra ações dele {"("}como ficar furtivo ou conjurar um
            ritual{")"}, Ao se mover na direção do alvo você ignora a
            necessidade de testes para ultrapassar objetos no caminho. Só pode
            ser usado em cenas de combate e o alvo só é desmarcado quando morre.
            <br />
          </p>
          <p>
            <b> NEX 25% - DESTRUIR PRESA</b> Por +2PE ao analizar o alvo o dano
            adicional para "matar" aumenta em +1D {"("}para um total de 2{")"},
            em 40% em +2D {"("}para um total de 3{")"}, em 65% para 3D {"("}
            total 4{")"} e em 99% para 4D {"("}total 5{")"}, mas você recebe -5
            em percepção, defesa, reflexos e vontade contra outros oponentes.
          </p>
          <p>
            <b> NEX 40% - EXECUTAR PRESA:</b> Você pode gastar 2PE para aumentar
            sua margem de ameaça contra um alvo marcado com "Matar"em +2, e +2PE
            por cada redução feita na rodada {"("}2 para o primeiro, 4 para o
            segundo, 6 para o terceiro{")"} para aumentar adicionalmente +2.
            Para alvos marcados com "Perseguir" ou "entender" você recebe um
            bonus de +5 em manobras ou testes opostos de pericias com Pre.
          </p>
          <p>
            <b> NEX 55% - MASSACRAR PRESA</b> Todo acerto critico contra uma
            presa te da o direito de gastar 2PE por rodada para aumentar seu
            multiplicador de critico contra esse alvo em especifico em +1, e
            +2PE por cada aumento feito na rodada {"("}2 para o primeiro, 4 para
            o segundo, 6 para o terceiro{")"} para aumentar adicionalmente +1
            cada vez que você acerta um critico novamente nesse alvo {"("}o
            limite de aumentos é igual ao numero de criticos que você acertou no
            alvo{")"}, caso você faça isso, pra cada vez que você usou essa
            habilidade na cena você recebe uma penalidade de -Maior gasto de PE
            na cena sempre que erra um golpe contra esse alvo.
          </p>
        </div>
      </div>
    </main>
  );
}
