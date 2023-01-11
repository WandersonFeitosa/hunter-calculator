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
        <div className={styles.blockTitle}> Resumo das opções</div>
        <div>
          <p>
            O Cálculo é sempre considerando que o alvo está afetado por
            <b> Marca da Presa</b>
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
      <div className={styles.block}>
        <div className={styles.blockTitle}> Descrição das informações</div>
        <div className={styles.description}>
          <p>Uma descrição de cada uma das opções e o que elas representam</p>
          <p>
            Para uma descrição das informações de arma será considerado uma Acha
            padrão, que possui as seguintes informações: 1d12 | Crit 20 | x3
          </p>
          <p>
            <b>NEX:</b> O nível de exposição paranormal do agente
          </p>
          <p>
            <b>PE:</b> Pontos de esforço, que são utilizado para realizar
            habilidades
          </p>

          <p>
            <b>Dano base da arma:</b> O dano que a arma causa em um ataque
            normal <b>(1d12)</b>
          </p>
          <p>
            <b>Crit base da arma:</b> Quantas vezes os dados serão multiplicados
            ao realizar um ataque crítico <b>(x3)</b>
          </p>
          <p>
            <b>Ameaça base:</b> Qual o valor que quando tirado no dado resultará
            em um acerto crítico <b>(Crit 20)</b>
          </p>
          <p>
            <b>Golpe Pesado:</b> Adiciona mais 1d de dano a todo golpe corpo a
            corpo <b>( 1d12 {"-->"} 2d12 )</b>
          </p>
          <p>
            <b>Arma Atroz:</b> Um ritual que possui várias formas de ser
            utilizado, uma descrição completa dele pode ser encontrada no livro
            de regras, mas uma descrição das opções são:
            <ul>
              <li>
                <b>Padrão:</b> +1 na margem de ameaça
                <b> ( Crit 20 {"-->"} Crit 19 )</b>
              </li>
              <li>
                <b>Verdadeiro:</b> +2 na margem de ameaça e crítico
                <b>
                  {" "}
                  ( Crit 20 {"-->"} Crit 18 || x3 {"-->"} x5 )
                </b>
              </li>
              <li>
                <b>Padrão/Discente (Componente Especial):</b> Mesmo efeito da
                forma verdadeira
              </li>
              <li>
                <b>Verdadeiro (Componente Especial):</b> +3 na margem de ameaça
                e crítico
                <b>
                  {" "}
                  ( Crit 20 {"-->"} Crit 17 || x3 {"-->"} x6 )
                </b>
              </li>
            </ul>
          </p>
          <p>
            <b>Marca da presa:</b> Marca um alvo e permite o uso das habilidades
            abaixo, e adiciona 1d de dano
          </p>
          <p>
            <b>Destuir presa:</b> Adiciona dados relativos ao NEX do personagem
            a alvos marcados de dano a todo ataque realizado, essa habilidade é
            desbloqueada em 25% de NEX{" "}
            <ul>
              <li>
                <b>25%+:</b> +1 dado
                <b> ( 1d12 {"-->"} 2d12 )</b>
              </li>
              <li>
                <b>40%+:</b> +2 dados
                <b> ( 1d12 {"-->"} 3d12 )</b>
              </li>
              <li>
                <b>65%+:</b> +3 dados
                <b> ( 1d12 {"-->"} 4d12 )</b>
              </li>
              <li>
                <b>99%+:</b> +4 dados
                <b> ( 1d12 {"-->"} 5d12 )</b>
              </li>
            </ul>
          </p>
          <p>
            <b>Executar Presa:</b> Permite receber uma certa quantidade de bônus
            de ameaça de acordo com a quantidade de PE gastos
            <ul>
              <li>
                <b>2 PE:</b> +2 de ameaça
                <b> ( Crit 20 {"-->"} Crit 18 )</b>
              </li>
              <li>
                <b>6 PE:</b> +4 de ameaça
                <b> ( Crit 20 {"-->"} Crit 16 )</b>
              </li>
              <li>
                <b>12 PE:</b> +6 de ameaça
                <b> ( Crit 20 {"-->"} Crit 14 )</b>
              </li>
              <li>
                <b>20 PE:</b> +8 de ameaça
                <b> ( Crit 20 {"-->"} Crit 12 )</b>
              </li>
            </ul>
          </p>
          <p>
            <b>Masscrar Presa:</b> Permite receber uma certa quantidade de bônus
            de multiplicador de crítico de acordo com a quantidade de PE gastos
            <ul>
              <li>
                <b>2 PE:</b> +1 de multiplicador de crítico
                <b> ( x3 {"-->"} x4 )</b>
              </li>
              <li>
                <b>6 PE:</b> +2 de multiplicador de crítico
                <b> ( x3 {"-->"} x5 )</b>
              </li>
              <li>
                <b>12 PE:</b> +3 de multiplicador de crítico
                <b> ( x3 {"-->"} x6 )</b>
              </li>
              <li>
                <b>20 PE:</b> +4 de multiplicador de crítico
                <b> ( x3 {"-->"} x7 )</b>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}
