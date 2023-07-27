import { styled } from "styled-components";

export const CardContainer = styled.div`
  background-color: black;
  width: 180px;
  min-height: 150px;
  margin: 10px;
  padding: 10px;
  border: 1px solid aqua;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;
export const CardTitle = styled.h4`
  font-weight: 600;
  font-size: large;
  margin-bottom: 10px;
`;
export const CardText = styled.p`
  word-break: break-all;
`;
export const BtnContainer = styled.div`
  display: flex;
  margin: 10px 0;
  gap: 10px;
`;
export const BtnItem = styled.button<{ color: string }>`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${props => props.color};
  font-weight: 800;
  cursor: pointer;
`;
