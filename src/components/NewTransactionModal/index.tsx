import Modal from "react-modal";
import * as S from "./styles";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.Container>
        <h2>Cadastrar transação</h2>
      </S.Container>
    </Modal>
  );
}
