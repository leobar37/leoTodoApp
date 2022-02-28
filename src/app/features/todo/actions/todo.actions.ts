import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../domain";
export const todoAdded =
  createAction<{ todo: Omit<Todo, "id"> }>("[todo] todo added");

export const todoAddedSuccess = createAction<{ todo: Todo }>(
  "[todo/api] todo added success"
);
export const todoDeleted = createAction<{ todo: Todo }>(
  "[todo] deleted a todo"
);

export const todoSelected = createAction<{ todo: Todo }>("[todo] selec todo");

export const todoEdited = createAction<{ todo: Omit<Todo, "id">; id: number }>(
  "[todo/api] edit todo"
);

export const listTodos = createAction("[todo/api] list todos");

export const listTodosSuccess = createAction<{ todos: Todo[] }>(
  "[todo/api] list todos success"
);
