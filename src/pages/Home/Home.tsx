import { CardList, TodoForm } from "components";
import * as Styled from "./Home.styles";

export const Home = () => {
  return (
    <Styled.HomeContainer>
      <Styled.HomeHeader>
        <Styled.HomeTitle>TodoList</Styled.HomeTitle>
        <TodoForm />
      </Styled.HomeHeader>
      <Styled.HomeMain>
        <Styled.StateTitle>working...</Styled.StateTitle>
        <CardList isDone={false} />
        <Styled.StateTitle>Done !</Styled.StateTitle>
        <CardList isDone={true} />
      </Styled.HomeMain>
    </Styled.HomeContainer>
  );
};
