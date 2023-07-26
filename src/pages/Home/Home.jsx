import { CardList, TodoForm } from "components";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TodoList</h1>
        <TodoForm />
      </header>
      <main className={styles.main}>
        <h3>working...</h3>
        <CardList isDone={false} />
        <h3>Done !</h3>
        <CardList isDone={true} />
      </main>
    </div>
  );
};
