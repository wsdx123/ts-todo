import { styled } from "styled-components";

export const DetailContainer = styled.div`
  width: 400px;
  height: 100%;
  border: 1px solid rgb(230, 225, 225);
  border-radius: 10px;
  background-color: rgb(244, 239, 239);
  margin-top: 200px;
`;
export const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid rgb(230, 225, 225);
`;
export const DetailId = styled.h2`
  font-size: x-large;
`;
export const BackBtn = styled.button`
  background-color: white;
  padding: 15px;
  border: 1px solid rgb(230, 225, 225);
  border-radius: 10px;
  font-size: large;
  cursor: pointer;
`;
export const DetailContent = styled.div`
  padding: 20px;
`;
export const ContentTitle = styled.h3`
  font-size: larger;
  font-weight: 600;
  margin-bottom: 20px;
`;
