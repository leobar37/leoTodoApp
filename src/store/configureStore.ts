import { configureStore } from "@reduxjs/toolkit";
import * as fromTodoFeature from "@leo/app/features/todo";
import createSagaMiddleware from "redux-saga";
import { sagas } from "../app/features/todo";
const sagaMiddleware = createSagaMiddleware();
import { all } from "redux-saga/effects";
function* rootSaga() {
  yield all(sagas.map((fun) => fun()));
}

const configureAppStore = () => {
  const store = configureStore({
    reducer: {
      [fromTodoFeature.todoFeatureKey]: fromTodoFeature.todoReducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(sagaMiddleware);
    },
    devTools: process.env.NODE_ENV !== "production",
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureAppStore();

export default store;
