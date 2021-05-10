import Modal from "react-modal";
import * as S from "./styles";
import CloseButtonImg from "../../assets/close.svg";
import IncomeSvg from "../../assets/income.svg";
import OutcomeSvg from "../../assets/outcome.svg";
import { useState } from "react";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  const [type, setType] = useState<String>("");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button>
        <img
          src={CloseButtonImg}
          alt="CloseButton"
          className="close-button-modal"
          onClick={onRequestClose}
        />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <S.ContainerButtonsType>
          <S.TypeButton
            type="button"
            isActive={type === "deposit"}
            onClick={() =>
              type !== "deposit" ? setType("deposit") : setType("")
            }
          >
            <img src={IncomeSvg} alt="Income" />
            <span>Entrada</span>
          </S.TypeButton>

          <S.TypeButton
            type="button"
            isActive={type === "withdraw"}
            onClick={() =>
              type !== "withdraw" ? setType("withdraw") : setType("")
            }
          >
            <img src={OutcomeSvg} alt="Outcome" />
            <span>Saída</span>
          </S.TypeButton>
        </S.ContainerButtonsType>
        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
