import { useEffect, useState } from "react";
import * as S from "./styles";
import { api } from "../../services/api";

interface TransactionsProps {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  type: string;
  value: number;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {/* <tr>
            <td>Pack</td>
            <td className="deposit">R$500</td>
            <td>Diversão</td>
            <td>12/07/1998</td>
          </tr> */}
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{`R$${transaction.value}`}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Container>
  );
}
