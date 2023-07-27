import { Modal } from "components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ActionTypes } from "redux/modules/todos";
import { initialTodos } from "types";
import * as Styled from "./Card.styles";

interface Props {
  data: initialTodos;
}

export const Card = ({ data }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  type Remove = () => void;
  const handleRemove: Remove = () => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: data.id
    });
  };

  type Done = () => void;
  const handleDone: Done = () => {
    dispatch({
      type: ActionTypes.DONE,
      payload: data
    });
  };

  type Modal = () => void;
  const handleModal: Modal = () => {
    setOpenModal(true);
  };

  return (
    <Styled.CardContainer>
      <Styled.CardTitle>
        <Link to={`card/${data.id}`}>{data.todoTitle}</Link>
      </Styled.CardTitle>
      <Styled.CardText>{data.todoText}</Styled.CardText>
      <Styled.BtnContainer>
        <Styled.BtnItem type="button" color="red" onClick={handleRemove}>
          삭제
        </Styled.BtnItem>
        <Styled.BtnItem type="button" color="blue" onClick={handleModal}>
          수정
        </Styled.BtnItem>
        <Styled.BtnItem type="button" color="green" onClick={handleDone}>
          {data.isDone ? "취소" : "완료"}
        </Styled.BtnItem>
      </Styled.BtnContainer>
      {openModal && <Modal setOpenModal={setOpenModal} cardId={data.id} />}
    </Styled.CardContainer>
  );
};
