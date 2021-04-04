// import { Container } from './styles';
import * as S from "./styles";
import Logo from "../../assets/logo.svg";
export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={Logo} alt="Alvaro Money" />
        <button type="button">Cadastrar transação</button>
      </S.Content>
    </S.Container>
  );
}
