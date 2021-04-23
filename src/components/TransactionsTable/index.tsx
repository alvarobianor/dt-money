import * as S from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Pack</td>
            <td className="deposit">R$500</td>
            <td>Diversão</td>
            <td>12/07/1998</td>
          </tr>

          <tr>
            <td>Miojos</td>
            <td className="withdraw">R$-5</td>
            <td>Comidas</td>
            <td>12/07/1998</td>
          </tr>

          <tr>
            <td>GP</td>
            <td className="withdraw">R$-200</td>
            <td>Diversão manhosa</td>
            <td>12/07/1998</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
