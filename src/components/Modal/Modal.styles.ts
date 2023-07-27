import { styled } from "styled-components";

export const ModalContainer = styled.div`
  width: 400px;
  height: 300px;
  background-color: lightgray;
  z-index: 99;
  position: absolute;
  top: calc(50% - 160px);
  left: calc(50% - 210px);
  padding: 10px;
  border-radius: 10px;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: gray;
  z-index: 10;
  opacity: 0.75;
`;

export const CloseBtn = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: -15px;
  left: calc(100% - 15px);
  border: none;
  border-radius: 50%;
  font-size: large;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const ModalInput = styled.input`
  margin-bottom: 10px;
`;
export const InputLabel = styled.label`
  margin-bottom: 5px;
`;
