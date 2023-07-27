import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { RootState } from "redux/config/configStore";
import * as Styled from "./Detail.styles";

export const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const detailData = useSelector((state: RootState) => state.todos.find(el => el.id === params.id));

  type TBack = () => void;
  const handleBack: TBack = () => {
    navigate("/");
  };

  return (
    <Styled.DetailContainer>
      <Styled.DetailHeader>
        <Styled.DetailId>ID : {detailData?.id}</Styled.DetailId>
        <Styled.BackBtn type="button" onClick={handleBack}>
          이전으로
        </Styled.BackBtn>
      </Styled.DetailHeader>
      <Styled.DetailContent>
        <Styled.ContentTitle>{detailData?.todoTitle}</Styled.ContentTitle>
        <p>{detailData?.todoText}</p>
      </Styled.DetailContent>
    </Styled.DetailContainer>
  );
};
