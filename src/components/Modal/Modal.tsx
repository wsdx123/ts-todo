import { useDispatch, useSelector } from "react-redux";

import { ActionTypes } from "redux/modules/todos";

import { useInput } from "hooks/useInput";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { RootState } from "redux/config/configStore";
import * as Styled from "./Modal.styles";

interface Props {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  cardId: number;
}

export const Modal = ({ setOpenModal, cardId }: Props) => {
  const cardData = useSelector((state: RootState) => state.todos.find(el => el.id === cardId));

  const [title, handleTitle] = useInput(cardData?.todoTitle);
  const [text, handleText] = useInput(cardData?.todoText);

  const dispatch = useDispatch();

  type TModal = () => void;
  const handleModal: TModal = () => {
    setOpenModal(false);
  };

  type TSubmit = (e: FormEvent<HTMLFormElement>) => void;
  const handleSubmit: TSubmit = e => {
    e.preventDefault();

    dispatch({
      type: ActionTypes.UPDATE,
      payload: { todoTitle: title, todoText: text, id: cardId }
    });
    setOpenModal(false);
  };

  return (
    <div>
      <Styled.ModalBackground />
      <Styled.ModalContainer>
        <Styled.CloseBtn type="button" onClick={handleModal}>
          x
        </Styled.CloseBtn>
        <Styled.FormContainer onSubmit={handleSubmit}>
          <Styled.InputLabel>제목</Styled.InputLabel>
          <Styled.ModalInput type="text" value={title} onChange={handleTitle} />
          <Styled.InputLabel>내용</Styled.InputLabel>
          <Styled.ModalInput type="text" value={text} onChange={handleText} />
          <button type="submit">수정</button>
        </Styled.FormContainer>
      </Styled.ModalContainer>
    </div>
  );
};
