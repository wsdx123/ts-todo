import { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "redux/modules/todos";
import styles from "./TodoForm.module.css";

export const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoText, setTodoText] = useState("");

  const dispatch = useDispatch();

  const handleTitle = e => {
    setTodoTitle(e.target.value);
  };

  const handleText = e => {
    setTodoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todoTitle === "" || todoText === "") {
      alert("title과 text를 모두 입력하시오");
      return;
    }
    const newTodo = {
      id: Math.floor(e.timeStamp),
      todoTitle,
      todoText,
      isDone: false
    };
    dispatch({
      type: ActionTypes.ADD,
      payload: newTodo
    });
    setTodoTitle("");
    setTodoText("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label>제목</label>
        <input value={todoTitle} onChange={handleTitle} />
        <label>내용</label>
        <input value={todoText} onChange={handleText} />
      </div>
      <button type="submit" className={styles.submitBtn}>
        추가하기
      </button>
    </form>
  );
};
