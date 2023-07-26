import { useSelector } from "react-redux";

import { Card } from "components";
import styles from "./CardList.module.css";

export const CardList = ({ isDone }) => {
  const data = useSelector((state) => state.todos);
  const filteredData = data.filter((el) => el.isDone === isDone);

  return (
    <div className={styles.working}>
      {filteredData.map((el) => (
        <Card key={el.id} props={el}>
          {isDone ? "취소" : "완료"}
        </Card>
      ))}
    </div>
  );
};
