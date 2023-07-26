import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ActionTypes } from "redux/modules/todos";

import { Modal } from "components";
import styles from "./Card.module.css";

export const Card = ({ props, children }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: props.id,
    });
  };

  const handleDone = () => {
    dispatch({
      type: ActionTypes.DONE,
      payload: props,
    });
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <div key={props.id} className={styles.card}>
      <h4>
        <Link to={`card/${props.id}`}>{props.todoTitle}</Link>
      </h4>
      <p>{props.todoText}</p>
      <div className={styles.cardBtn}>
        <div>
          <button type="button" onClick={handleRemove}>
            삭제
          </button>
          <button type="button" onClick={handleModal}>
            수정
          </button>
          <button type="button" onClick={handleDone}>
            {children}
          </button>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} cardId={props.id} />}
    </div>
  );
};
