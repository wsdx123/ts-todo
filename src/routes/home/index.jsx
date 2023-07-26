import { useState } from "react";
import { useDispatch } from "react-redux";

import CardList from "components/cardList";
import TodoForm from "components/todoForm";
import { ActionTypes } from "redux/modules/todos";

import styles from "routes/home/Home.module.css";

function Home() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleText = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle === "" || todoText === "") {
      alert("title과 text를 모두 입력하시오");
      return;
    }
    const newTodo = {
      id: Math.floor(e.timeStamp),
      todoTitle,
      todoText,
      isDone: false,
    };
    dispatch({
      type: ActionTypes.ADD,
      payload: newTodo,
    });
    setTodoTitle("");
    setTodoText("");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>TodoList</h1>
        <TodoForm
          title={todoTitle}
          text={todoText}
          handleSubmit={handleSubmit}
          handleText={handleText}
          handleTitle={handleTitle}
        />
      </header>
      <main className={styles.main}>
        <h3>working...</h3>
        <CardList isDone={false} />
        <h3>Done !</h3>
        <CardList isDone={true} />
      </main>
    </div>
  );
}

export default Home;
