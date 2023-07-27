import { useInput } from "hooks/useInput";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "redux/modules/todos";
import { v4 as uuidv4 } from "uuid";
import * as Styled from "./TodoForm.styles";

export const TodoForm = () => {
  const [todoTitle, handleTitle, resetTitle] = useInput();
  const [todoText, handleText, resetText] = useInput();

  const dispatch = useDispatch();

  type TSubmit = (e: FormEvent<HTMLFormElement>) => void;
  const handleSubmit: TSubmit = e => {
    e.preventDefault();
    if (todoTitle === "" || todoText === "") {
      alert("title과 text를 모두 입력하시오");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      todoTitle,
      todoText,
      isDone: false
    };

    dispatch({
      type: ActionTypes.ADD,
      payload: newTodo
    });
    resetTitle();
    resetText();
  };

  return (
    <Styled.TodoFormContainer onSubmit={handleSubmit}>
      <Styled.InputBox>
        <Styled.InputLabel>제목</Styled.InputLabel>
        <Styled.TodoInput value={todoTitle} onChange={handleTitle} />
        <Styled.InputLabel>내용</Styled.InputLabel>
        <Styled.TodoInput value={todoText} onChange={handleText} />
      </Styled.InputBox>
      <Styled.SubmitBtn type="submit">추가하기</Styled.SubmitBtn>
    </Styled.TodoFormContainer>
  );
};
