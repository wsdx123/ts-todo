import { useDispatch, useSelector } from "react-redux";

import { ActionTypes } from "redux/modules/todos";

import { useInput } from "hooks/useInput";
import styles from "./Modal.module.css";

export const Modal = ({ setOpenModal, cardId }) => {
  const cardData = useSelector(state => state.todos.find(el => el.id === cardId));

  const [title, handleTitle] = useInput(cardData.todoTitle);
  const [text, handleText] = useInput(cardData.todoText);

  const dispatch = useDispatch();

  const handleModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch({
      type: ActionTypes.UPDATE,
      payload: { todoTitle: title, todoText: text, id: cardId }
    });
    setOpenModal(false);
  };

  return (
    <div>
      <div className={styles.background} />
      <div className={styles.container}>
        <button className={styles.closeBtn} type="button" onClick={handleModal}>
          x
        </button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <span>제목</span>
          <input type="text" value={title} onChange={handleTitle} />
          <span>내용</span>
          <input type="text" value={text} onChange={handleText} />
          <button type="submit">수정</button>
        </form>
      </div>
    </div>
  );
};
