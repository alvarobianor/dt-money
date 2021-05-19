import * as S from "./styles";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import Totalimg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  console.log("Sumary: ", transactions);
  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="IncomeImg" />
        </header>
        <strong>R$ 5</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="OutcomeImg" />
        </header>
        <strong>R$ 2</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Balanço</p>
          <img src={Totalimg} alt="Totalimg" />
        </header>
        <strong>R$ 3</strong>
      </div>
    </S.Container>
  );
}
