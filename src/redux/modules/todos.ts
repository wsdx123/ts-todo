export enum ActionTypes {
  ADD = "todos/ADD",
  DELETE = "todos/DELETE",
  DONE = "todos/DONE",
  UPDATE = "todos/UPDATE"
}

export interface addTodo {
  type: ActionTypes.ADD;
  payload: initialTodos;
}

export interface deleteTodo {
  type: ActionTypes.DELETE;
  payload: string;
}

export interface doneTodo {
  type: ActionTypes.DONE;
  payload: initialTodos;
}

export interface updateTodo {
  type: ActionTypes.UPDATE;
  payload: Omit<initialTodos, "isDone">;
}

export type Actions = addTodo | deleteTodo | doneTodo | updateTodo;

export interface initialTodos {
  todoTitle: string;
  todoText: string;
  isDone: boolean;
  id: string;
}

const initalState: initialTodos[] = [];

const todos = (state = initalState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return [...state, action.payload];
    case ActionTypes.DELETE:
      return state.filter(el => el.id !== action.payload);
    case ActionTypes.DONE:
      return state.map(el =>
        el.id === action.payload.id
          ? {
              ...el,
              isDone: !action.payload.isDone
            }
          : el
      );
    case ActionTypes.UPDATE:
      return state.map(el =>
        el.id === action.payload.id
          ? {
              ...el,
              todoTitle: action.payload.todoTitle,
              todoText: action.payload.todoText
            }
          : el
      );
    default:
      return state;
  }
};

export default todos;
