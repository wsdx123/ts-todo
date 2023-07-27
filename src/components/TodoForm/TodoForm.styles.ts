import { styled } from "styled-components";

export const TodoFormContainer = styled.form`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InputBox = styled.div`
  display: flex;
  align-items: center;
`;
export const InputLabel = styled.label`
  margin-right: 5px;
`;
export const TodoInput = styled.input`
  margin-right: 20px;
  border-radius: 8px;
  border: none;
  height: 25px;
`;
export const SubmitBtn = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 30px 5px 30px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
`;
