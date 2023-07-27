import { useSelector } from "react-redux";

import { Card } from "components";
import { RootState } from "redux/config/configStore";
import * as Styled from "./CardList.styles";

interface Props {
  isDone: boolean;
}
export const CardList = ({ isDone }: Props) => {
  const data = useSelector((state: RootState) => state.todos);
  const filteredData = data.filter(el => el.isDone === isDone);

  return (
    <Styled.CardListContainer>
      {filteredData.map(el => (
        <Card key={el.id} data={el} />
      ))}
    </Styled.CardListContainer>
  );
};
