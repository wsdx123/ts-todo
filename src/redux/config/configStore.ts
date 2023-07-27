import { combineReducers, createStore } from "redux";

import todos from "redux/modules/todos";

const rootReducer = combineReducers({
  todos
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
