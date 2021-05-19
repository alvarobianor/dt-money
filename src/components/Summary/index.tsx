import * as S from "./styles";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import Totalimg from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.withdraw += transaction.value;
        acc.total -= transaction.value;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraw: 0,
      total: 0,
    }
  );

  console.log("Sumary: ", transactions);
  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="IncomeImg" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="OutcomeImg" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.withdraw)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Balanço</p>
          <img src={Totalimg} alt="Totalimg" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.total)}
        </strong>
      </div>
    </S.Container>
  );
}
