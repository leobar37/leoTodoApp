import { takeLatest, call, put } from "redux-saga/effects";
import {
  listTodosSuccess,
  listTodos,
  todoAddedSuccess,
} from "../actions/todo.actions";
import { Todo } from "../domain";
import { sleep } from "@leo/utils";
const todos: Todo[] = [
  {
    id: 1,
    isCheked: true,
    name: "Hacer la compra",
  },
  {
    id: 2,
    isCheked: true,
    name: "Hacer la comida",
  },
  {
    id: 3,
    isCheked: true,
    name: "Hacer nada",
  },
];

const fetchTodos = async () => {
  await sleep(300);
  return todos;
};

function* handleGetTodos(): Generator<any, void, null> {
  const todos = yield call(fetchTodos);

  yield put(
    listTodosSuccess({
      todos: todos as unknown as Todo[],
    })
  );
}
export function* watcherTodoSaga() {
  yield takeLatest(listTodos().type, handleGetTodos);
}
